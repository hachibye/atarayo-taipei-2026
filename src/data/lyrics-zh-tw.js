/*
 * Licensed or user-supplied Traditional Chinese lyric translations belong here.
 * Keys are exact Japanese lines so provider line-order changes do not attach a
 * translation to the wrong timestamp.
 *
 * Example:
 * "SongId": Object.freeze({
 *   "日本語の一行": "獲授權的繁中翻譯"
 * })
 */
export const ZH_TW_LYRICS = Object.freeze({});

export function traditionalChineseFor(songId, japaneseLine){
  const song = ZH_TW_LYRICS[songId];
  return song && song[japaneseLine] || "";
}
