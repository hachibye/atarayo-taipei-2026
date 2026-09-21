import Kuroshiro from "kuroshiro";
import kuromoji from "kuromoji/build/kuromoji.js";

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
    return new Promise((resolve, reject) => {
      kuromoji.builder({ dicPath: this.dictPath }).build((error, tokenizer) => {
        if (error) return reject(error);
        this.tokenizer = tokenizer;
        resolve();
      });
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

function dictionaryUrl(){
  // Kuromoji joins this value with a POSIX-style path helper; passing a full
  // http(s) URL would collapse the double slash in the scheme.
  return new URL("dict/", document.baseURI).pathname;
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
  const [furigana, romaji] = await Promise.all([
    overrideFurigana || kuroshiro.convert(source, { mode: "furigana", to: "hiragana" }),
    overrideRomaji || kuroshiro.convert(source, { mode: "spaced", to: "romaji", romajiSystem: "hepburn" })
  ]);
  furiganaCache.set(source, furigana);
  romajiCache.set(source, romaji);
}

export async function prepareJapaneseReadings(lines){
  const sources = [...new Set((lines || []).map(String).filter(Boolean))]
    .filter(source => !furiganaCache.has(source) || !romajiCache.has(source));
  if (!sources.length) return;
  const kuroshiro = await getKuroshiro();
  await Promise.all(sources.map(source => convertLine(kuroshiro, source)));
}

export function furiganaFor(source){
  return FURIGANA_OVERRIDES[source] || furiganaCache.get(source) || null;
}

export function romajiFor(source){
  return ROMAJI_OVERRIDES[source] || romajiCache.get(source) || null;
}
