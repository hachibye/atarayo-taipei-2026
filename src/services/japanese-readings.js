import Kuroshiro from "kuroshiro";
import Tokenizer from "kuromoji/src/Tokenizer.js";
import DynamicDictionaries from "kuromoji/src/dict/DynamicDictionaries.js";

const furiganaCache = new Map();
const romajiCache = new Map();
let kuroshiroPromise = null;

/*
 * Exact-line overrides are intentionally kept separate from generated readings.
 * When an official booklet, caption, or artist annotation confirms an uncommon
 * reading, add the full lyric line here so it wins over Kuromoji's dictionary.
 */
const FURIGANA_OVERRIDES = Object.freeze({});
const ROMAJI_OVERRIDES = Object.freeze({});

class BrowserKuromojiAnalyzer {
  constructor({ dictPath }){
    this.dictPath = dictPath;
    this.tokenizer = null;
  }

  init(){
    return loadTokenizer(this.dictPath).then(tokenizer => {
      this.tokenizer = tokenizer;
    });
  }

  parse(source = ""){
    if (!source.trim()) return Promise.resolve([]);
    return Promise.resolve(this.tokenizer.tokenize(source).map(token => ({
      surface_form: token.surface_form,
      pos: token.pos,
      pos_detail_1: token.pos_detail_1,
      pos_detail_2: token.pos_detail_2,
      pos_detail_3: token.pos_detail_3,
      conjugated_type: token.conjugated_type,
      conjugated_form: token.conjugated_form,
      basic_form: token.basic_form,
      reading: token.reading,
      pronunciation: token.pronunciation
    })));
  }
}

function exactBuffer(bytes){
  return bytes.byteOffset === 0 && bytes.byteLength === bytes.buffer.byteLength
    ? bytes.buffer
    : bytes.buffer.slice(bytes.byteOffset, bytes.byteOffset + bytes.byteLength);
}

async function loadDictionaryFile(dictPath, filename){
  const response = await fetch(new URL(filename, dictPath));
  if (!response.ok) throw new Error(`Japanese dictionary request failed: ${response.status} ${filename}`);
  const bytes = new Uint8Array(await response.arrayBuffer());
  // Some static hosts transparently decode .gz responses while others return
  // the original compressed bytes. Kuromoji's stock browser loader always
  // gunzips and therefore breaks on the first case; accept both forms.
  if (bytes[0] !== 0x1f || bytes[1] !== 0x8b) return exactBuffer(bytes);
  const stream = new Blob([bytes]).stream().pipeThrough(new DecompressionStream("gzip"));
  return await new Response(stream).arrayBuffer();
}

async function loadTokenizer(dictPath){
  const names = [
    "base.dat.gz", "check.dat.gz",
    "tid.dat.gz", "tid_pos.dat.gz", "tid_map.dat.gz",
    "cc.dat.gz",
    "unk.dat.gz", "unk_pos.dat.gz", "unk_map.dat.gz",
    "unk_char.dat.gz", "unk_compat.dat.gz", "unk_invoke.dat.gz"
  ];
  const files = Object.fromEntries(await Promise.all(names.map(async filename =>
    [filename, await loadDictionaryFile(dictPath, filename)]
  )));
  const dictionaries = new DynamicDictionaries();
  dictionaries.loadTrie(
    new Int32Array(files["base.dat.gz"]),
    new Int32Array(files["check.dat.gz"])
  );
  dictionaries.loadTokenInfoDictionaries(
    new Uint8Array(files["tid.dat.gz"]),
    new Uint8Array(files["tid_pos.dat.gz"]),
    new Uint8Array(files["tid_map.dat.gz"])
  );
  dictionaries.loadConnectionCosts(new Int16Array(files["cc.dat.gz"]));
  dictionaries.loadUnknownDictionaries(
    new Uint8Array(files["unk.dat.gz"]),
    new Uint8Array(files["unk_pos.dat.gz"]),
    new Uint8Array(files["unk_map.dat.gz"]),
    new Uint8Array(files["unk_char.dat.gz"]),
    new Uint32Array(files["unk_compat.dat.gz"]),
    new Uint8Array(files["unk_invoke.dat.gz"])
  );
  return new Tokenizer(dictionaries);
}

function dictionaryUrl(){
  return new URL("dict/", document.baseURI);
}

async function getKuroshiro(){
  if (!kuroshiroPromise){
    kuroshiroPromise = (async () => {
      const kuroshiro = new Kuroshiro();
      await kuroshiro.init(new BrowserKuromojiAnalyzer({ dictPath: dictionaryUrl() }));
      return kuroshiro;
    })();
  }
  return kuroshiroPromise;
}

async function convertLine(kuroshiro, source){
  const overrideFurigana = FURIGANA_OVERRIDES[source];
  const overrideRomaji = ROMAJI_OVERRIDES[source];
  const [furiganaResult, romajiResult] = await Promise.allSettled([
    overrideFurigana || kuroshiro.convert(source, { mode: "furigana", to: "hiragana" }),
    overrideRomaji || kuroshiro.convert(source, { mode: "spaced", to: "romaji", romajiSystem: "hepburn" })
  ]);
  if (furiganaResult.status === "fulfilled") furiganaCache.set(source, furiganaResult.value);
  if (romajiResult.status === "fulfilled") romajiCache.set(source, romajiResult.value);
  if (furiganaResult.status === "rejected" && romajiResult.status === "rejected") {
    throw furiganaResult.reason;
  }
}

export async function prepareJapaneseReadings(lines){
  const sources = [...new Set((lines || []).map(String).filter(Boolean))]
    .filter(source => !furiganaCache.has(source) || !romajiCache.has(source));
  if (!sources.length) return;
  const kuroshiro = await getKuroshiro();
  const results = await Promise.allSettled(sources.map(source => convertLine(kuroshiro, source)));
  if (results.every(result => result.status === "rejected")) {
    throw results.find(result => result.status === "rejected").reason;
  }
}

export function furiganaFor(source){
  return FURIGANA_OVERRIDES[source] || furiganaCache.get(source) || null;
}

export function romajiFor(source){
  return ROMAJI_OVERRIDES[source] || romajiCache.get(source) || null;
}
