let furiganaPromise = null;
let karaokeSourcesPromise = null;

export function loadFurigana(){
  if (!furiganaPromise){
    furiganaPromise = import("./japanese-readings.js").catch(() => null);
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
