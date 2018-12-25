import {toHiragana, toRomaji, toKatakana} from 'wanakana';

export default class Converter {

  toHiragana(romaji) {
    return toHiragana(romaji);
  }

  toRomaji(str) {
    return toRomaji(str);
  }

  toKatakana(romaji) {
    return toKatakana(romaji);
  }

}
