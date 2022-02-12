import WordProcessorDocumentData from "../data/wordprocessor/WordProcessorDocumentData"

/**
 * WordProcessorDocumentData を加工するシリーズ第一弾
 * 
 * フォントサイズを変更する
 */
class EditFontSize {

    /**
     * ユーザーがキャレットを動かして選択中した文字の部分のフォントサイズを指定する
     * 
     * @param fontSize フォントサイズ
     * @parma documentData ドキュメント情報
     * @return これを更新して
     */
    static edit(documentData: WordProcessorDocumentData, fontSize: number) {
        const selection = window.getSelection()
        // とりあえず位置を出す
        const startElement = selection?.anchorNode?.parentElement
        const endElement = selection?.focusNode?.parentElement

        if (startElement !== undefined && endElement !== undefined) {
            // 各Spanにカスタム属性として位置を入れておいたので参照する
            const lineNumber = parseInt(startElement?.getAttribute('data-linenumber') ?? '-1')
            if (lineNumber == -1) {
                // 初回時落ちる。何もせず返す
                return null
            }
            // TODO これだと同じ行に同じ文章があった場合に対応できない
            ({ ...documentData }).wordLine[lineNumber].charList.forEach((charData) => {
                if (selection?.toString().includes(charData.char)) {
                    charData.fontSize = fontSize
                }
            })
        }
    }

}

export default EditFontSize