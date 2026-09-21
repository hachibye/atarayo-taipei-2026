import { ATARAYO_DISCOGRAPHY, LISTENING_MOODS } from "../../src/data/discography.js";

const SONGS = new Set(ATARAYO_DISCOGRAPHY.map(song => song.title));
const MOODS = new Set(LISTENING_MOODS.map(mood => mood.id));
const COOKIE_NAME = "atarayo_voter";
const MAX_BODY_BYTES = 2048;

function taipeiDateKey(date = new Date()){
  return new Intl.DateTimeFormat("en-CA", {
    timeZone: "Asia/Taipei",
    year: "numeric",
    month: "2-digit",
    day: "2-digit"
  }).format(date);
}

function json(data, init = {}){
  const headers = new Headers(init.headers);
  headers.set("Content-Type", "application/json; charset=utf-8");
  headers.set("X-Content-Type-Options", "nosniff");
  headers.set("Referrer-Policy", "no-referrer");
  headers.set("Cross-Origin-Resource-Policy", "same-origin");
  return new Response(JSON.stringify(data), { ...init, headers });
}

function parseCookies(header){
  const cookies = new Map();
  for (const item of String(header || "").split(";")){
    const separator = item.indexOf("=");
    if (separator < 1) continue;
    const key = item.slice(0, separator).trim();
    const value = item.slice(separator + 1).trim();
    if (key) cookies.set(key, value);
  }
  return cookies;
}

async function sha256(value){
  const bytes = new TextEncoder().encode(value);
  const digest = await crypto.subtle.digest("SHA-256", bytes);
  return [...new Uint8Array(digest)].map(byte => byte.toString(16).padStart(2, "0")).join("");
}

function validVoterToken(value){
  return typeof value === "string" && /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(value);
}

function voterCookie(value, requestUrl){
  const secure = new URL(requestUrl).protocol === "https:" ? "; Secure" : "";
  return `${COOKIE_NAME}=${value}; Path=/; Max-Age=31536000; HttpOnly; SameSite=Strict${secure}`;
}

async function readSummary(database, date){
  const [songsResult, moodsResult, totalResult, recentResult] = await database.batch([
    database.prepare(`
      SELECT song_title AS title, COUNT(*) AS count
      FROM daily_votes
      WHERE taipei_date = ?1
      GROUP BY song_title
      ORDER BY count DESC, song_title ASC
      LIMIT 10
    `).bind(date),
    database.prepare(`
      SELECT mood_id AS id, COUNT(*) AS count
      FROM daily_votes
      WHERE taipei_date = ?1
      GROUP BY mood_id
      ORDER BY count DESC, mood_id ASC
    `).bind(date),
    database.prepare(`
      SELECT COUNT(*) AS count
      FROM daily_votes
      WHERE taipei_date = ?1
    `).bind(date),
    database.prepare(`
      SELECT song_title AS title, mood_id AS mood, updated_at AS updatedAt
      FROM daily_votes
      WHERE taipei_date = ?1
      ORDER BY updated_at DESC
      LIMIT 10
    `).bind(date)
  ]);
  const total = Number(totalResult.results?.[0]?.count || 0);
  return {
    date,
    total,
    songs: (songsResult.results || [])
      .filter(item => SONGS.has(item.title))
      .map(item => ({ title: item.title, count: Number(item.count || 0) })),
    moods: (moodsResult.results || [])
      .filter(item => MOODS.has(item.id))
      .map(item => ({ id: item.id, count: Number(item.count || 0) })),
    recent: (recentResult.results || [])
      .filter(item => SONGS.has(item.title) && MOODS.has(item.mood))
      .map(item => ({
        title: item.title,
        mood: item.mood,
        updatedAt: Math.max(0, Number(item.updatedAt || 0))
      }))
  };
}

async function readSelection(database, date, voterHash){
  if (!voterHash) return null;
  const row = await database.prepare(`
    SELECT song_title AS song, mood_id AS mood
    FROM daily_votes
    WHERE taipei_date = ?1 AND voter_hash = ?2
    LIMIT 1
  `).bind(date, voterHash).first();
  if (!row || !SONGS.has(row.song) || !MOODS.has(row.mood)) return null;
  return { song: row.song, mood: row.mood };
}

async function handleGet({ request, env }){
  if (!env.PULSE_DB) return json({ error: "database_unavailable" }, { status: 503 });
  try {
    const date = taipeiDateKey();
    const storedToken = parseCookies(request.headers.get("Cookie")).get(COOKIE_NAME);
    const voterHash = validVoterToken(storedToken) ? await sha256(storedToken) : "";
    const [summary, selection] = await Promise.all([
      readSummary(env.PULSE_DB, date),
      readSelection(env.PULSE_DB, date, voterHash)
    ]);
    return json({ ...summary, selection }, { headers: { "Cache-Control": "private, no-store" } });
  } catch (error) {
    console.error("pulse_summary_failed", error);
    return json({ error: "summary_failed" }, { status: 500 });
  }
}

async function handlePost({ request, env }){
  if (!env.PULSE_DB) return json({ error: "database_unavailable" }, { status: 503 });
  const url = new URL(request.url);
  const origin = request.headers.get("Origin");
  const fetchSite = request.headers.get("Sec-Fetch-Site");
  if (!origin || origin !== url.origin || (fetchSite && fetchSite !== "same-origin")){
    return json({ error: "origin_not_allowed" }, { status: 403 });
  }
  if (!request.headers.get("Content-Type")?.toLowerCase().startsWith("application/json")){
    return json({ error: "content_type_required" }, { status: 415 });
  }
  const declaredLength = Number(request.headers.get("Content-Length") || 0);
  if (declaredLength > MAX_BODY_BYTES) return json({ error: "payload_too_large" }, { status: 413 });

  let payload;
  try {
    const rawBody = await request.text();
    if (new TextEncoder().encode(rawBody).byteLength > MAX_BODY_BYTES){
      return json({ error: "payload_too_large" }, { status: 413 });
    }
    payload = JSON.parse(rawBody);
  }
  catch { return json({ error: "invalid_json" }, { status: 400 }); }
  const song = typeof payload?.song === "string" ? payload.song : "";
  const mood = typeof payload?.mood === "string" ? payload.mood : "";
  if (!SONGS.has(song) || !MOODS.has(mood)) return json({ error: "invalid_selection" }, { status: 400 });

  const cookies = parseCookies(request.headers.get("Cookie"));
  const storedToken = cookies.get(COOKIE_NAME);
  const voterToken = validVoterToken(storedToken) ? storedToken : crypto.randomUUID();
  const voterHash = await sha256(voterToken);
  const date = taipeiDateKey();

  try {
    const write = await env.PULSE_DB.prepare(`
      INSERT INTO daily_votes (taipei_date, voter_hash, song_title, mood_id, updated_at)
      VALUES (?1, ?2, ?3, ?4, ?5)
      ON CONFLICT (taipei_date, voter_hash) DO NOTHING
    `).bind(date, voterHash, song, mood, Date.now()).run();
    const selection = await readSelection(env.PULSE_DB, date, voterHash);
    const summary = await readSummary(env.PULSE_DB, date);
    const headers = new Headers({ "Cache-Control": "no-store" });
    if (voterToken !== storedToken) headers.append("Set-Cookie", voterCookie(voterToken, request.url));
    if (!write.meta?.changes){
      return json({ error: "already_submitted", selection, summary }, { status: 409, headers });
    }
    return json({ ok: true, selection, summary }, { headers });
  } catch (error) {
    console.error("pulse_save_failed", error);
    return json({ error: "save_failed" }, { status: 500 });
  }
}

export function onRequest(context){
  if (context.request.method === "GET") return handleGet(context);
  if (context.request.method === "POST") return handlePost(context);
  return json({ error: "method_not_allowed" }, { status: 405, headers: { Allow: "GET, POST" } });
}
