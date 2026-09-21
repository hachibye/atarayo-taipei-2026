/*
 * Atarayo Taipei 2026 event data.
 *
 * Event facts come from the official Atarayo tour page and the KKTIX event
 * page. The spoiler list is the user-submitted 2026 Malaysia setlist, not a
 * leaked or confirmed Taipei setlist. Titles use the official Japanese forms.
 */

export const SHOW_TIMELINE = {
  "2026-12-19": [
    { t: "18:00", label: "預計開場・開始入場" },
    { t: "19:00", label: "正式演出開始" },
    { t: "21:00", label: "預計演出結束（以現場為準）" }
  ]
};

export const SHOW_SCHEDULE = [
  { start: "2026-12-19T19:00:00+08:00", end: "2026-12-19T21:30:00+08:00" }
];

export const ASIA_TOUR_STOPS = [
  { date: "08.22", dow: "六", city: "大阪", venue: "Music Club JANUS" },
  { date: "09.12", dow: "六", city: "名古屋", venue: "CLUB UPSET" },
  { date: "09.13", dow: "日", city: "福岡", venue: "DRUM Be-1" },
  { date: "09.18", dow: "五", city: "東京", venue: "Spotify O-EAST" },
  { date: "10.19", dow: "一", city: "香港", venue: "PORTAL" },
  { date: "10.20", dow: "二", city: "香港", venue: "PORTAL", note: "追加公演" },
  { date: "10.22", dow: "四", city: "香港", venue: "PORTAL", note: "再追加公演" },
  { date: "12.19", dow: "六", city: "台北", venue: "台北流行音樂中心", current: true }
];

export const OVERSEAS_ONE_MAN_STOPS = [
  {
    date: "07.24",
    dow: "五",
    city: "吉隆坡",
    venue: "KLCC Hall 6",
    event: "ONE-MAN LIVE IN JAPAN EXPO MALAYSIA 2026",
    start: "19:30",
    url: "https://atarayo-jp.com/contents/1075672"
  },
  {
    date: "07.26",
    dow: "日",
    city: "曼谷",
    venue: "Lido Connect Hall 2",
    event: "あたらよ LIVE in Bangkok",
    start: "20:00",
    url: "https://atarayo-jp.com/contents/1075674"
  }
];

// 主辦單位發布新的入場、周邊或 VIP 圖卡後，可依序加入這裡。
export const NOTICES = [];
export const PICS = {};

const previewSong = (id, title, youtubeId, note = "先用官方影片熟悉歌曲。現場互動請以成員帶領為準。", duration = null) => {
  if (typeof note === "number") {
    duration = note;
    note = "先用官方影片熟悉歌曲。現場互動請以成員帶領為準。";
  }
  return {
    id,
    title,
    artist: "あたらよ",
    youtubeId,
    duration,
    lyricsMode: "remote-timed",
    lyrics: [
      { time: 0, jp: title, tr: note }
    ]
  };
};

/*
 * All video IDs below are embedded by Atarayo's official site. Song lyrics are
 * intentionally not copied into this repository without a clear licence.
 */
export const SONGS = [
  previewSong("Suzukaze", "涼風 feat. 友成空", "K89J6iNNTqA", "2026 專輯《私雨に夏の灯を知る》收錄曲。官方影片預習中。"),
  previewSong("Sakana", "魚", "AyXdyPlzUog", "2026 專輯《私雨に夏の灯を知る》收錄曲。官方影片預習中。"),
  previewSong("HaruTonari", "春となり", "5IKyt5JW70w", "2026 專輯《私雨に夏の灯を知る》收錄曲。官方影片預習中。"),
  previewSong("Haku", "ハク", "sYmHIomk8Iw", "2026 專輯《私雨に夏の灯を知る》收錄曲。官方影片預習中。"),
  previewSong("YozoraWoMushibande", "夜空を蝕んで", "6gDr80aO8HI"),
  previewSong("Bouai", "忘愛", "ZpmyOYeBoS0"),
  previewSong("TsukiNoFune", "ツキノフネ", "CEQT-ZOBH_Y", 211),
  previewSong("Shizuku", "雫", "Wg2-8duyBY0"),
  previewSong("AkegataNoNatsu", "明け方の夏", "-os2RI3UT_k", 237),
  previewSong("BokuWa", "「僕は...」", "5tABGeWbVtQ"),
  previewSong("ShounenKazeKaoru", "少年、風薫る", "wM6e_lAGUQM"),
  previewSong("KoisuruMonoNoAware", "恋するもののあはれ", "-_yY4OD5Owk", 226),
  previewSong("JugatsuMukuchi", "10月無口な君を忘れる", "zO8yNYEsYTc"),
  previewSong("Natsugasumi", "夏霞", "hcXcJAmzmAc"),
  previewSong("MataNatsuWoOu", "また夏を追う", "EZlD-H-6WzU"),
  previewSong("Usotsuki", "嘘つき", "gpA4vP5-DF0"),
  previewSong("BokuraWaSoreWoAiToYonda", "僕らはそれを愛と呼んだ", "qw4gIxgwTB4"),
  previewSong("NatsuGaKuruTabi", "夏が来るたび", "4F_GX8v-CS4"),
  previewSong("EightEight", "8.8", "OmuW_v5LoIU"),
  previewSong("Ureizakura", "憂い桜", "k5U7hZFn_rI"),
  previewSong("Outcry", "outcry", "Y2wZKacNue8"),
  previewSong("Harururu", "晴るる", "ZNVnIw7SxuE"),
  previewSong("AkaneChiru", "アカネチル", "vRPgoGGevRc"),
  previewSong("Oboreteiru", "溺れている", "7nB1b5JVE2A"),
  previewSong("Realize", "realize", "hks9PHSMo-g"),
  previewSong("Asanagi", "朝凪", "nrPxKCdPgnM"),
  previewSong("Kousaten", "交差点", "xNmv1tCigFg"),
  previewSong("SoraAoiMama", "空蒼いまま", "gOJpsOhNi4A")
];

/*
 * Guide collections are snapshots of the linked platform pages, not permanent
 * charts. Their order is intentionally preserved when the guide uses the
 * default sort, so the number at the left is the rank within that collection.
 */
export const GUIDE_COLLECTIONS = [
  {
    id: "new-2026",
    label: "2026 新作",
    title: "先聽今年的新歌",
    description: "收錄 2026 專輯中已發布官方影片的歌曲。",
    sourceLabel: "官方專輯與影片",
    sourceUrl: "https://atarayo-jp.com/musics/21060",
    checkedAt: "2026.09.21",
    songIds: ["Suzukaze", "Sakana", "HaruTonari", "Haku"]
  },
  {
    id: "spotify-top",
    label: "Spotify Top 10",
    title: "從 Spotify 熱門曲開始",
    description: "依 Spotify 藝人頁目前顯示的熱門歌曲排序。",
    sourceLabel: "Spotify Top tracks",
    sourceUrl: "https://open.spotify.com/artist/2yRnjWtHzmDELwYaUiX0Yh",
    checkedAt: "2026.09.21",
    songIds: [
      "JugatsuMukuchi", "BokuWa", "Natsugasumi", "MataNatsuWoOu", "Suzukaze",
      "Sakana", "HaruTonari", "Usotsuki", "BokuraWaSoreWoAiToYonda", "NatsuGaKuruTabi"
    ]
  },
  {
    id: "apple-top",
    label: "Apple Music Top 10",
    title: "從 Apple Music 熱門曲開始",
    description: "依 Apple Music 藝人頁目前顯示的熱門歌曲排序。",
    sourceLabel: "Apple Music Top Songs",
    sourceUrl: "https://music.apple.com/tw/artist/atarayo/1558407178",
    checkedAt: "2026.09.21",
    songIds: [
      "BokuWa", "Natsugasumi", "JugatsuMukuchi", "MataNatsuWoOu", "Usotsuki",
      "Ureizakura", "Suzukaze", "EightEight", "Outcry", "Sakana"
    ]
  },
  {
    id: "official-recent",
    label: "官方近期 MV",
    title: "從近期官方影片開始",
    description: "依官方網站影片頁順序，整理 2024 至 2026 年作品。",
    sourceLabel: "Atarayo 官方影片",
    sourceUrl: "https://atarayo-jp.com/movies/categories/video",
    checkedAt: "2026.09.21",
    songIds: [
      "Suzukaze", "Sakana", "HaruTonari", "Haku", "YozoraWoMushibande", "Bouai",
      "TsukiNoFune", "Shizuku", "AkegataNoNatsu", "ShounenKazeKaoru", "BokuWa", "KoisuruMonoNoAware"
    ]
  },
  {
    id: "all",
    label: "全部影片",
    title: "瀏覽全部官方影片",
    description: "包含上述分類及目前已整理的官方影片。",
    sourceLabel: "Atarayo 官方影片",
    sourceUrl: "https://atarayo-jp.com/movies/categories/video",
    checkedAt: "2026.09.21",
    songIds: SONGS.map(song => song.id)
  }
];

export const SONG_BPM = Object.freeze(
  Object.fromEntries(SONGS.map(song => [song.id, 90]))
);

/*
 * Kept under the existing export name to minimise changes to the inherited UI.
 * This is the Malaysia reference setlist, not the Taipei performance order.
 */
export const SETLIST_TOKYO = {
  label: "2026 馬來西亞獨立專場參考歌單",
  dates: "2026.07.24｜ATARAYO ONE-MAN LIVE IN JAPAN EXPO MALAYSIA 2026｜非本次亞巡站次",
  sourceUrl: "https://www.setlist.fm/setlist/atarayo/2026/kl-convention-centre-kuala-lumpur-malaysia-4375d7df.html",
  items: [
    { n: 1, songs: [{ id: "NatsuGaKuruTabi", title: "夏が来るたび" }] },
    { n: 2, songs: [{ id: "Natsugasumi", title: "夏霞" }] },
    { n: 3, songs: [{ id: "BokuWa", title: "「僕は...」" }] },
    { n: 4, songs: [{ id: "HaruTonari", title: "春となり" }] },
    { n: 5, songs: [{ id: "JugatsuMukuchi", title: "10月無口な君を忘れる" }] },
    { n: 6, songs: [{ id: "EightEight", title: "8.8" }] },
    { n: 7, songs: [{ id: "Usotsuki", title: "嘘つき" }] },
    { n: 8, songs: [{ id: "AkaneChiru", title: "アカネチル" }] },
    { n: 9, songs: [{ id: "Oboreteiru", title: "溺れている" }] },
    { n: 10, songs: [{ id: "Realize", title: "realize" }] },
    { n: 11, songs: [{ id: "Ureizakura", title: "憂い桜" }] },
    { n: 12, songs: [{ id: "Harururu", title: "晴るる" }] },
    { n: 13, songs: [{ id: "Asanagi", title: "朝凪" }] },
    { n: 14, songs: [{ id: "Kousaten", title: "交差点" }] },
    { n: 15, songs: [{ id: "TsukiNoFune", title: "ツキノフネ" }] },
    { n: 16, songs: [{ id: "MataNatsuWoOu", title: "また夏を追う" }] },
    { n: 17, encore: true, songs: [{ id: "BokuraWaSoreWoAiToYonda", title: "僕らはそれを愛と呼んだ" }] },
    { n: 18, songs: [{ id: "SoraAoiMama", title: "空蒼いまま" }] }
  ]
};

// The current Taipei venue section uses the official KKTIX seating image.
// Legacy vector-map exports remain empty so inherited helper code stays safe.
export const SEAT_VIEW = { w: 630, h: 421, cx: 315, cy: 210 };
export const SEAT_BLOCKS = [];
export const SEAT_GRADE = {};
export const SEAT_HINT = "請以 KKTIX 官方座位配置圖及票面資訊為準。";
export const SEAT_DIRS = [];
export const FLOOR_WAIT = {};
