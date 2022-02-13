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
        const textFieldElement = document.getElementById('text_field')

        // DocumentDataをHTMLに適用済み（全部の文字をspanでくくってあるか）確認
        if (startElement?.textContent?.length === 1) {
            // DocumentDataからHTMLを構築した後の場合
            // 
            const lineNumber = parseInt(startElement?.getAttribute('data-linenumber')!)
            if (startElement !== undefined && endElement !== undefined && lineNumber !== -1) {
                // なんかうまく動かないので文字列を探すようにした
                // TODO これだと同じ行に同じ文字列があった場合に対応できない！！！
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
        } else {
            // 入力中で、DocumentDataをHTMLに適用していない場合
            const anchorNode = (selection?.anchorNode! as HTMLElement);
            const anchorNodeText = selection?.anchorNode?.textContent
            const startPos = anchorNodeText?.indexOf(selection?.toString()!) ?? 0
            const endPos = startPos + (selection?.toString()!.length!)
            // 何行目か、親要素の子要素配列から探す
            // TODO 同じ文字列が別の行にあると動かない！！！！
            const lineNumber = Array.from(textFieldElement!.childNodes)
                .findIndex((child) => child.textContent?.includes(selection?.toString()!))
            console.log(Array.from(anchorNode!.parentElement!.childNodes))
            console.log(startPos)
            console.log(endPos)
            console.log(lineNumber)
            // 同じ場合は初回時として無視
            if (startPos !== endPos) {
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
}

export default SelectedText