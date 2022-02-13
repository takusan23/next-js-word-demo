import SelectedTextPos from "../data/wordprocessor/SelectedTextPos"

/** 選択中テキストの範囲を返す関数がある */
class SelectedText {

    /**
     * 選択中テキストの範囲を返す
     * 
     * TODO これだと同じ行に同じ文章があった場合に対応できない
     * 
     * @returns 成功したら SelectedTextPos 、失敗したらnull
     */
    static getPosition() {
        const selection = window.getSelection()
        // とりあえず位置を出す
        const startElement = selection?.anchorNode?.parentElement
        const endElement = selection?.focusNode?.parentElement
        // 各spanにカスタム属性として位置を入れておいたので参照する
        const lineNumber = parseInt(startElement?.getAttribute('data-linenumber') ?? '-1')

        if (startElement !== undefined && endElement !== undefined && lineNumber !== -1) {
            // なんかうまく動かないので文字列を探すようにした
            const startPos = startElement?.parentElement?.textContent?.indexOf(selection!.toString())!
            const endPos = startPos + (selection!.toString().length - 1) // 既にstartPosに含まれているので-1
            return <SelectedTextPos>{
                startPos: startPos,
                endPos: endPos,
                lineNumber: lineNumber
            }
        } else {
            return null
        }
    }
}

export default SelectedText