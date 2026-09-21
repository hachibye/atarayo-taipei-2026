/*
 * Official Atarayo audio discography, checked against atarayo-jp.com on
 * 2026-09-21. Alternate acoustic and piano arrangements are folded into the
 * original title; live-video track lists are not counted as separate songs.
 */

const release = (year, titles) => titles.map(item => {
  if (typeof item === "string") return { title: item, year };
  return { year, ...item };
});

export const ATARAYO_DISCOGRAPHY = Object.freeze([
  ...release(2026, [
    "涼風 feat. 友成空",
    "魚",
    "春となり",
    { title: "ふたり", note: "Atarayo Cover" },
    { title: "バディ", note: "Atarayo Cover" },
    "ハク",
    "√",
    "蝉とトリトマ",
    "伝えたかったこと"
  ]),
  ...release(2025, [
    "朝凪",
    "ツキノフネ",
    "夜空を蝕んで",
    "忘愛",
    "溺れている",
    "雫",
    "しないで",
    "夢現、夏風薫る"
  ]),
  ...release(2024, [
    "「僕は...」",
    "明け方の夏",
    "リフレイン",
    "realize",
    "少年、風薫る",
    "君と",
    "光れ",
    "恋するもののあはれ"
  ]),
  ...release(2023, [
    { title: "ただ好きと言えたら", note: "KERENMI & あたらよ" },
    "今夜2人だけのダンスを",
    "夏が来るたび",
    "僕らはそれを愛と呼んだ",
    "また夏を追う",
    "憂い桜",
    "アカネチル",
    "クリスマスのよる",
    "青を掬う",
    "届く、未来へ",
    "眠れない夜を君に",
    "雪冴ゆる",
    "空蒼いまま",
    "13月"
  ]),
  ...release(2022, [
    "交差点",
    "極夜",
    "「知りたくなかった、失うのなら」",
    "悲しいラブソング",
    "outcry",
    "52",
    "差異",
    "優しいエイプリルフール"
  ]),
  ...release(2021, [
    "10月無口な君を忘れる",
    "夏霞",
    "晴るる",
    "祥月",
    "8.8",
    "ピアス",
    "嘘つき"
  ])
]);

export const LISTENING_MOODS = Object.freeze([
  { id: "calm", emoji: "😌", label: "安靜" },
  { id: "miss", emoji: "🥹", label: "想念" },
  { id: "heartbreak", emoji: "💔", label: "失落" },
  { id: "rain", emoji: "🌧️", label: "低潮" },
  { id: "healing", emoji: "✨", label: "被治癒" },
  { id: "energy", emoji: "🔥", label: "有力量" }
]);

export const DISCOGRAPHY_SOURCE_URLS = Object.freeze([
  "https://atarayo-jp.com/discography",
  "https://atarayo-jp.com/discography/page/2",
  "https://atarayo-jp.com/musics/21060",
  "https://atarayo-jp.com/musics/19364",
  "https://atarayo-jp.com/musics/15728",
  "https://atarayo-jp.com/musics/18512",
  "https://atarayo-jp.com/musics/18520",
  "https://atarayo-jp.com/musics/18521"
]);
