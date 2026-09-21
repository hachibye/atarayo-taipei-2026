let furiganaPromise = null;
let karaokeSourcesPromise = null;

export function loadFurigana(){
  if (window.JP_FURIGANA || window.JP_ROMAJI) return Promise.resolve();
  if (!furiganaPromise){
    furiganaPromise = import("../../furigana.js")
      .then(() => undefined)
      .catch(() => undefined);
  }
  return furiganaPromise;
}

export function loadKaraokeSources(){
  if (window.KARAOKE_SOURCES) return Promise.resolve(window.KARAOKE_SOURCES);
  if (!karaokeSourcesPromise){
    karaokeSourcesPromise = import("../../karaoke-sources.js")
      .then(() => window.KARAOKE_SOURCES || null)
      .catch(() => null);
  }
  return karaokeSourcesPromise;
}
