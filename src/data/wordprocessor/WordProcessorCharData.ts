/** ドキュメント各行にある文字一つ一つのデータ */
type WordProcessorCharData = {
    /** 文字 */
    char: string,
    /** 文字の位置 */
    position: number,
    /** フォントサイズ */
    fontSize?: number,
    /** フォントの色 */
    fontColor?: string
}
export default WordProcessorCharData