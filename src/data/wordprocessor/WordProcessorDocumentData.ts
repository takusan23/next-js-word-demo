import WordProcessorLineData from "./WordProcessorLineData"

/** 
 * 編集中のテキストを保持しておくデータ
 *
 * 唯一の情報源にする
 */
type WordProcessorDocumentData = {
    /**
     * 一行目..二行目.. のような行の文字をまとめておく配列
     * 
     * 
     */
    wordLine: Array<WordProcessorLineData>
}
export default WordProcessorDocumentData