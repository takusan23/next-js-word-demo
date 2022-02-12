import WordProcessorCharData from "./WordProcessorCharData"

/** 各行のデータ */
type WordProcessorLineData = {
    /** その行の文字の情報が一文字一文字入ってる */
    charList: Array<WordProcessorCharData>,
    /** 何行目か */
    lineNumber: number,
}

export default WordProcessorLineData