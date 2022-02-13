import WordProcessorDocumentData from "../data/wordprocessor/WordProcessorDocumentData"
import SelectedText from "./SelectedText"

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
        // 位置を出す
        const selectedPos = SelectedText.getPosition()
        if (selectedPos !== null) {
            // 指定位置にフォントサイズをあてる
            documentData.wordLine[selectedPos.lineNumber].charList.forEach((charData) => {
                if (selectedPos.startPos <= charData.position && charData.position <= selectedPos.endPos) {
                    charData.fontSize = fontSize
                }
            })
        }
    }

}

export default EditFontSize