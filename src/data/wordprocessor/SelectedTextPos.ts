/** 選択中テキストの位置を返す */
type SelectedTextPos = {
    /** 何行目？ */
    lineNumber: number,
    /** 開始位置 */
    startPos: number,
    /** 終了位置 */
    endPos: number
}
export default SelectedTextPos