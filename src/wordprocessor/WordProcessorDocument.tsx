import React from "react"
import ReactDomServer from 'react-dom/server'
// ドキュメントを統括する
import WordProcessorDocumentData from "../data/wordprocessor/WordProcessorDocumentData"
// ドキュメントの各行を統括する
import WordProcessorLineData from "../data/wordprocessor/WordProcessorLineData"
// ドキュメント各行にある文字一つ一つのデータ
import WordProcessorCharData from "../data/wordprocessor/WordProcessorCharData"


/**
 * 初期値生成器
 * 
 * @param text 初期値
 */
const createInitialData = (text: string) => {
    const charList = text.split('').map((char, charIndex) => {
        const charData: WordProcessorCharData = {
            char: char,
            position: charIndex
        }
        return charData
    })
    const lineData: WordProcessorLineData = {
        charList: charList,
        lineNumber: 0
    }
    const documentData: WordProcessorDocumentData = {
        wordLine: new Array(lineData)
    }
    return documentData
}

/** 作業中のドキュメントを管理するやつを作る */
export const useWordProcessorDocument = (initialText: string = '') => React.useState<WordProcessorDocumentData>(createInitialData(initialText))

class WordProcessorDocument {

    /**
     * 編集中HTML を WordProcessorDocumentData 形式に変換する
     * 
     * @param document contentEditable を付けた要素
     */
    static convertDocumentData = (document: HTMLElement) => {
        const lineData = Array.from(document.childNodes)
            // 各行の文字を各文字の配列に
            .map(childElement => childElement.textContent?.split(''))
            // 各行の文字列をLineDataへ、各文字の配列に
            .map((charList, lineIndex) => ({
                lineNumber: lineIndex,
                charList: charList?.map((c, charIndex) => ({
                    char: c,
                    position: charIndex
                } as WordProcessorCharData))

            } as WordProcessorLineData))

        const documentData: WordProcessorDocumentData = {
            wordLine: lineData
        }
        return documentData
    }

    /** 
     * WordProcessorDocumentDataをJSX(TSX)に変換する
     *
     * @param data WordProcessorDocumentData
     */
    static buildJSXDocument = (data: WordProcessorDocumentData) => {
        // 他でかぶらないように数値を作る
        let uniqueIndex = 0
        const createJSX = (
            <>
                {
                    data.wordLine.map(lineData => (
                        // 各行作成
                        <div
                            id={lineData.lineNumber.toString()}
                            key={uniqueIndex++}
                        >
                            {
                                // 行の中身の文字を描画
                                lineData.charList.map(charData => (
                                    // window.getSelection が要素を返すのでその際の情報を入れておく
                                    // data- から始まる属性でカスタム属性が作れる
                                    <span
                                        data-linenumber={lineData.lineNumber}
                                        data-position={charData.position}
                                        key={uniqueIndex++}
                                        style={{
                                            fontSize: `${charData.fontSize ?? 20}px`,
                                            color: charData.fontColor
                                        }}
                                    >
                                        {charData.char}
                                    </span>
                                ))
                            }
                        </div>
                    ))
                }
            </>
        )
        return createJSX
    }

    /**
     * JSXをHTMLにする
     * 
     * @param jsx JSX
     * @returns HTML
     */
    static convertJSXToHTML(jsx: JSX.Element) {
        return ReactDomServer.renderToString(jsx)
    }

    /**
     * 今入力してる中身と引数に指定したドキュメントのデータが違う場合はtrueを返す
     * 
     * @param document contentEditable の要素
     * @param wordDocument 比較するドキュメントデータ
     * @return 違う場合はtrue
     */
    static isNotEqual(document: HTMLElement, wordDocument: WordProcessorDocumentData) {
        const documentDataHTML = this.convertJSXToHTML(this.buildJSXDocument(wordDocument))
        return document.innerHTML !== documentDataHTML
    }
}

export default WordProcessorDocument