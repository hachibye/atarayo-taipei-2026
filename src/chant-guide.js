/*
 * Atarayo-specific audience cues have not been verified yet. These exports
 * keep the inherited UI modules compatible without presenting Vaundy cues as
 * Atarayo guidance.
 */
export const CHANT_VERSIONS = Object.freeze({
  jp: { label: "現場觀察", shortLabel: "觀察", source: "Atarayo 官方影片與台北觀眾紀錄" }
});

export const DEFAULT_CHANT_VERSION = "jp";
export const JP_CHANT_GUIDES = Object.freeze({
  Sakana: {
    chantLineCount: 7,
    texts: [
      "ねぇ僕らまだ間に合うかな",
      "つまりはそうだ",
      "未練がましくも",
      "分かってたって",
      "手放せないね",
      "あと少しだけ",
      "笑えるね"
    ],
    ranges: [
      ["02:35", "03:03"]
    ],
    notes: [
      "歌曲尾聲結尾段為全場大合唱段落。"
    ]
  },
  Natsugasumi: {
    all: true,
    chantLineCount: 38,
    notes: [
      "現場演出時ひとみ經常會引導全場觀眾一起大合唱整首歌曲。"
    ]
  },
  Asanagi: {
    chantLineCount: 7,
    texts: [
      "朝凪の中でずっと",
      "朝凪のなかでずっと",
      "ずっと",
      "虹が空に弧を描いた",
      "弧を描いた",
      "描いた"
    ],
    ranges: [
      ["00:48", "01:08"],
      ["02:18", "02:39"]
    ],
    notes: [
      "副歌中的「朝凪の中でずっと」接在ひとみ後的「ずっと」會由觀眾回聲唱兩次；另一處「虹が空に弧を描いた」接在ひとみ後的「描いた」也是由觀眾回聲唱兩次。"
    ]
  },
  Harururu: {
    chantLineCount: 9,
    texts: [
      "もう分からないんだよ",
      "分からないんだよ 分からないんだよ",
      "分からないんだよ",
      "分かりたいんだよ"
    ],
    ranges: [
      ["01:40", "01:50"],
      ["02:54", "03:04"],
      ["04:09", "04:19"]
    ],
    notes: [
      "全曲共有三處「もう分からないんだよ ～ 分かりたいんだよ」段落為大合唱。"
    ]
  },
  SoraAoiMama: {
    chantLineCount: 2,
    texts: [
      "空蒼いまま泣いている",
      "海蒼いまま泣いている"
    ],
    ranges: [
      ["01:31", "01:36"],
      ["04:01", "04:07"]
    ],
    notes: [
      "兩次副歌最後一句的「泣いている」現場ひとみ通常會將麥克風朝向觀眾讓全場大合唱。"
    ]
  }
});
export const CHANT_DIFFERENCES = Object.freeze([]);
export const CHANT_REFERENCE_URL = "https://www.youtube.com/@Atarayo";
