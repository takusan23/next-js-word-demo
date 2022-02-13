import SelectedTextPos from "../data/wordprocessor/SelectedTextPos"

/** 選択中テキストの範囲を返す関数がある */
class SelectedText {

    /**
     * 選択中テキストの範囲を返す
     * 
     * TODO これだと同じ行に同じ文章があった場合に対応できない
     * 
     * @param textFieldElementId テキストフィールドの要素のID
     * @returns 成功したら SelectedTextPos 、失敗したらnull
     */
    static getPosition(textFieldElementId: string = 'text_field') {
        const selection = window.getSelection()
        // とりあえず位置を出す
        const textFieldElement = document.getElementById(textFieldElementId)
        // 選択中文字
        const selectionText = selection?.toString()!
        // テキストフィールドの文字を取得する
        const textContentList = Array.from(textFieldElement!.childNodes)
            .map((element) => element.textContent)
        // TODO 同じ文字列が別の行にあると動かない！！！！
        const lineNumber = textContentList
            .findIndex((text) => text?.includes(selectionText))
        // 行を探してた後、選択位置を探す
        // TODO これも同じ行に同じ文字列があった場合に対応できない
        const lineText = textContentList[lineNumber]
        const startPos = lineText?.indexOf(selectionText) ?? 0
        const endPos = startPos + (selectionText.length! - 1)
        // endPosが範囲内の場合はおかしいので...
        if (1 <= endPos) {
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