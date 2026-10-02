/*
 * Atarayo Taipei 2026 event data.
 *
 * Event facts come from the official Atarayo tour page and the KKTIX event
 * page. The spoiler list is the 2026 Japan tour setlist, not a
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
  previewSong("SoraAoiMama", "空蒼いまま", "gOJpsOhNi4A"),
  previewSong("Shogetsu", "祥月", "w6gD2XS-fxM"),
  previewSong("Pierce", "ピアス", "Q0VOAAWODf4"),
  previewSong("Kyokuya", "極夜", "Gs8pBBH6-FU"),
  previewSong("Shiritakunakatta", "「知りたくなかった、失うのなら」", "IkA71P0_e5U"),
  previewSong("KanashiiLoveSong", "悲しいラブソング", "mB00Bwv3p3A"),
  previewSong("Gojuni", "52", "xUWSVNSWbp4"),
  previewSong("Sai", "差異", "WcDOGGDIXXI"),
  previewSong("YasashiiAprilFool", "優しいエイプリルフール", "jPEyk9lsh2M"),
  previewSong("TadaSukiToIetara", "ただ好きと言えたら", "tQUqMISD0H8"),
  previewSong("KonyaFutari", "今夜2人だけのダンスを", "bPcdl4BZ7Rw"),
  previewSong("ChristmasNoYoru", "クリスマスのよる", "sZz8KDIIoiM"),
  previewSong("AoWoSukuu", "青を掬う", "B9d2RMJP0e0"),
  previewSong("TodokuMiraiE", "届く、未来へ", "Y_6sFi9R6QI"),
  previewSong("NemurenaiYoru", "眠れない夜を君に", "yZhyDl1oaaI"),
  previewSong("YukiSayuru", "雪冴ゆる", "trexKoD6a6Q"),
  previewSong("Jyuusangatsu", "13月", "3cAVI0zccC0"),
  previewSong("Refrain", "リフレイン", "JsApqqd02Mc"),
  previewSong("KimiTo", "君と", "-L-VvspxyMU"),
  previewSong("Hikare", "光れ", "vJt-S01eNOI"),
  previewSong("Shinaide", "しないで", "5fdsAeMU5B0"),
  previewSong("Yumeutsutsu", "夢現、夏風薫る", "54pVJd03s2U"),
  previewSong("FutariCover", "ふたり", "DCq41_6-DA4"),
  previewSong("BuddyCover", "バディ", "GAv9lmzpKro"),
  previewSong("Root", "√", "OLxE7tmPWWI"),
  previewSong("SemiToTritoma", "蝉とトリトマ", "5DUjsIHJR9c"),
  previewSong("Tsutaetakatta", "伝えたかったこと", "O4jLFgdtESs")
];

/*
 * Direct track identifiers verified against Spotify Web API and Apple's
 * official iTunes Search API on 2026-09-21. Keeping identifiers instead of
 * search URLs prevents mobile apps from opening an empty search screen.
 */
export const STREAMING_IDS = Object.freeze({
  Suzukaze: ["1dHoORp875dv0CJrqZ4kVF", "6793854736"],
  Sakana: ["3c98GZdP2qgTOr4zxLLbZL", "6784079017"],
  HaruTonari: ["6UFYmzhfHBkQXYAPo1cx35", "1868571279"],
  Haku: ["6rcu3zzJEHEZaiCnGHI1pR", "1861463479"],
  YozoraWoMushibande: ["3aWz8DKkDInc9AQDP1es3T", "1838386839"],
  Bouai: ["4JjMVB8xrHPO3PuFBor8tr", "1804255675"],
  TsukiNoFune: ["67G4XvHmTW7JKg6YKzPZV2", "1801497806"],
  Shizuku: ["4ABfKq8N5qMsLXOdXTBkjn", "1769019030"],
  AkegataNoNatsu: ["6caaFgoMDcQWyXbwCZ31AV", "1764228952"],
  BokuWa: ["5uJOkhUYFa6kkDrlEmZk3D", "1720898327"],
  ShounenKazeKaoru: ["5Gpkdf4zVQkzuLgRvo1EVD", "1748519663"],
  KoisuruMonoNoAware: ["3rWcWii8DDL4hO68IEFThP", "1727258917"],
  JugatsuMukuchi: ["2YQ8TlTmNheRI3VafoDpod", "1558400919"],
  Natsugasumi: ["34jv2mOVzPjncrBncjYl6F", "1578238903"],
  MataNatsuWoOu: ["53mioS2nnOFyknS2qGPig8", "1637768598"],
  Usotsuki: ["74ndzfvtog0KrABo5cwpmW", "1586096310"],
  BokuraWaSoreWoAiToYonda: ["79ooqFAy9eNPlcC3f4xyIh", "1687919176"],
  NatsuGaKuruTabi: ["55ItTj78No5IMK6yR9grGj", "1698938111"],
  EightEight: ["0vnQh69kXw7PqpyWsOgFMz", "1569265026"],
  Ureizakura: ["4P4Ocx5koM1TT8RHQ0Ssgv", "1671745398"],
  Outcry: ["2lQoiI7k4xuDWmla4GhEdo", "1613670052"],
  Harururu: ["2W1NCler1KTYtQneW1Wtyz", "1562938620"],
  AkaneChiru: ["0pZIXyZeLrFoA4Lt6BgJtM", "1649885699"],
  Oboreteiru: ["6DmcOgxZDyIbc4Xq6cklr2", "1838386842"],
  Realize: ["5XvpDIZqga1XDpt8HcAUOA", "1757790975"],
  Asanagi: ["6CUbPRA9vVWqBc7ncQ8sfY", "1834548535"],
  Kousaten: ["30PNP1Wa8tKyxUOTyX8KXx", "1609923384"],
  SoraAoiMama: ["7KuDruzY7dnXzRXgLL1Oi0", "1664317608"],
  Shogetsu: ["6wshmuVd6TBngLDEkm5CTO", "1613670048"],
  Pierce: ["56XoTJJOKtHip2SQ8uWcWF", "1586096308"],
  Kyokuya: ["71FYJKdXLroV5UYWjg4qA1", "1613670047"],
  Shiritakunakatta: ["4Uhz9f0VQKcSY867rqz80l", "1613670049"],
  KanashiiLoveSong: ["6exgbyrb2Bdjob70v2DhHx", "1613670050"],
  Gojuni: ["5gQC15sAmhMxHDqKqtSlBR", "1613670053"],
  Sai: ["5h2TIuO8wLJMZV5zMVd15F", "1613670055"],
  YasashiiAprilFool: ["1wycwu57y4UGSxNFUUpJOx", "1630899492"],
  TadaSukiToIetara: ["4IipBgo7ezhvECl2odGarn", "1698938108"],
  KonyaFutari: ["6ljAfGfbmkBnhEwREQQsAY", "1698938110"],
  ChristmasNoYoru: ["4watSjupcRe4jV3ZOid7YE", "1698938388"],
  AoWoSukuu: ["3vB8shteBMXiu72Y0I57xp", "1698938389"],
  TodokuMiraiE: ["4B4Zq784FjGiUnb9x7fI94", "1698938390"],
  NemurenaiYoru: ["6LswTLrybtNM47zddXfPsI", "1698938391"],
  YukiSayuru: ["5pCaX1pIz2jH49DNRFv08A", "1698938392"],
  Jyuusangatsu: ["2XyHmpis59lgOvG6Ds28ar", "1698938394"],
  Refrain: ["1sv9BSRemtQco3cQnNXWfy", "1764228953"],
  KimiTo: ["63WA25WfYdOGJWSKW9g2NG", "1764228956"],
  Hikare: ["7MWIeb6gdPRAEXSzJrHs5H", "1764228958"],
  Shinaide: ["40qZtWHCLVkO7jpnjPca0M", "1838386844"],
  Yumeutsutsu: ["6BxrqlNGUdE4CPIhfc3IDo", "1838386845"],
  FutariCover: ["1sTUvRot7jiJ5iFsicqb6M", "6793854739"],
  BuddyCover: ["5BayhomxUoRprSLNCQxpf4", "6793854740"],
  Root: ["3nwqfTCMIywEIi5mZx74s9", "6793854743"],
  SemiToTritoma: ["5ib4lqUK4QVLUDYogdQ9eK", "6793854744"],
  Tsutaetakatta: ["5srwkwZMVSdVTgw46L4XMx", "6793854745"]
});

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
    description: "完整收錄 2026 最新專輯《私雨に夏の灯を知る》全 9 首曲目。",
    sourceLabel: "官方專輯與影片",
    sourceUrl: "https://atarayo-jp.com/musics/21060",
    checkedAt: "2026.10.02",
    songIds: [
      "Suzukaze", "Sakana", "HaruTonari", "FutariCover", "BuddyCover",
      "Haku", "Root", "SemiToTritoma", "Tsutaetakatta"
    ]
  },
  {
    id: "spotify-top",
    label: "Spotify Top 10",
    title: "從 Spotify 熱門曲開始",
    description: "依 Spotify 藝人頁目前顯示的熱門歌曲排序。",
    sourceLabel: "Spotify Top tracks",
    sourceUrl: "https://open.spotify.com/artist/2yRnjWtHzmDELwYaUiX0Yh",
    checkedAt: "2026.10.02",
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
    checkedAt: "2026.10.02",
    songIds: [
      "Natsugasumi", "BokuWa", "MataNatsuWoOu", "JugatsuMukuchi", "BokuraWaSoreWoAiToYonda",
      "Usotsuki", "EightEight", "HaruTonari", "Kousaten", "Outcry"
    ]
  },
  {
    id: "official-recent",
    label: "官方近期 MV",
    title: "從近期官方影片開始",
    description: "依官方網站影片頁順序，整理 2024 至 2026 年作品。",
    sourceLabel: "Atarayo 官方影片",
    sourceUrl: "https://atarayo-jp.com/movies/categories/video",
    checkedAt: "2026.10.02",
    songIds: [
      "SemiToTritoma", "Suzukaze", "Sakana", "HaruTonari", "Haku", "YozoraWoMushibande",
      "Bouai", "TsukiNoFune", "Shizuku", "AkegataNoNatsu", "ShounenKazeKaoru", "BokuWa"
    ]
  },
  {
    id: "all",
    label: "全部影片",
    title: "瀏覽全部官方影片",
    description: "包含上述分類及目前已整理的官方影片。",
    sourceLabel: "Atarayo 官方影片",
    sourceUrl: "https://atarayo-jp.com/movies/categories/video",
    checkedAt: "2026.10.02",
    songIds: SONGS.map(song => song.id)
  }
];

export const SONG_BPM = Object.freeze(
  Object.fromEntries(SONGS.map(song => [song.id, 90]))
);

/*
 * Kept under the existing export name to minimise changes to the inherited UI.
 * This is the 2026 Japan tour reference setlist, not the Taipei performance order.
 */
export const SETLIST_TOKYO = {
  label: "2026 日本巡演參考歌單",
  dates: "2026｜Atarayo ASIA TOUR 2026「夕立が去ったその後で」日本巡演參考曲序",
  sourceUrl: "",
  items: [
    { n: 1, songs: [{ id: "Sakana", title: "魚" }] },
    { n: 2, songs: [{ id: "ShounenKazeKaoru", title: "少年、風薫る" }] },
    { n: 3, songs: [{ id: "BuddyCover", title: "バディ" }] },
    { n: 4, songs: [{ id: "HaruTonari", title: "春となり" }] },
    { n: 5, songs: [{ id: "FutariCover", title: "ふたり" }] },
    { n: 6, songs: [{ id: "JugatsuMukuchi", title: "10月無口な君を忘れる" }] },
    { n: 7, songs: [{ id: "MataNatsuWoOu", title: "また夏を追う" }] },
    { n: 8, songs: [{ id: "SemiToTritoma", title: "蝉とトリトマ" }] },
    { n: 9, songs: [{ id: "Tsutaetakatta", title: "伝えたかったこと" }] },
    { n: 10, songs: [{ id: "Suzukaze", title: "涼風" }] },
    { n: 11, songs: [{ id: "Root", title: "√" }] },
    { n: 12, songs: [{ id: "BokuWa", title: "「僕は...」" }] },
    { n: 13, songs: [{ id: "TsukiNoFune", title: "ツキノフネ" }] },
    { n: 14, songs: [{ id: "Haku", title: "ハク" }] },
    { n: 15, songs: [{ id: "Natsugasumi", title: "夏霞" }] },
    { n: 16, songs: [{ id: "Asanagi", title: "朝凪" }] },
    { n: 17, songs: [{ id: "NatsuGaKuruTabi", title: "夏が来るたび" }] }
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
