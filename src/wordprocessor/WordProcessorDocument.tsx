import React from "react"
// ドキュメントを統括する
import WordProcessorDocumentData from "../data/wordprocessor/WordProcessorDocumentData"
// ドキュメントの各行を統括する
import WordProcessorLineData from "../data/wordprocessor/WordProcessorLineData"
// ドキュメント各行の文字一つ一つのデータ
import WordProcessorCharData from "../data/wordprocessor/WordProcessorCharData"

/**
 * 初期値生成器
 * 
 * @param text 初期値
 */
const createInitialData = (text: string) => {
    return ({
        wordLine: new Array<WordProcessorLineData>(
            ({
                charList: text.split('').map(c => ({
                    char: c
                } as WordProcessorCharData))
            } as WordProcessorLineData)
        )
    } as WordProcessorDocumentData)
}

/** 作業中のドキュメントを管理するやつを作る */
export const useWordProcessorDocument = (initialText: string = '') => React.useState<WordProcessorDocumentData>(createInitialData(initialText))

/**
 * 編集中HTML を WordProcessorDocumentData 形式に変換する
 * 
 * @param document contentEditable を付けた要素
 */
export const convertDocumentData = (document: HTMLElement) => {
    const lineData = Array.from(document.childNodes)
        // 各行の文字を各文字の配列に
        .map(childElement => childElement.textContent?.split(''))
        // 各行の文字列をLineDataへ、各文字の配列に
        .map(charList => ({

            charList: charList?.map(c => ({
                char: c,
            } as WordProcessorCharData))

        } as WordProcessorLineData))

    const documentData: WordProcessorDocumentData = {
        wordLine: lineData
    }
    console.log(documentData)
    return documentData
}

/** 
 * WordProcessorDocumentDataをJSX(TSX)に変換する
 *
 * @param data WordProcessorDocumentData
 */
export const buildJSXDocument = (data: WordProcessorDocumentData) => {
    // const html = data.wordLine.map(lineData => {
    //     const div = document.createElement('div')
    //     lineData.charList.forEach((charData) => {
    //         const span = document.createElement('span')
    //         span.style.color = charData.fontColor ?? 'black'
    //         span.style.fontSize = `${charData.fontSize ?? 20}px`
    //         span.textContent = charData.char
    //         div.appendChild(span)
    //     })
    //     return div.innerHTML
    // }).join('')
    const createJSX = (
        <>
            {
                data.wordLine.map(lineData => (
                    // 各行作成
                    <div key={Math.random()}>
                        {
                            // 行の中身の文字を描画
                            lineData.charList.map(charData => (
                                <span
                                    key={Math.random()}
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