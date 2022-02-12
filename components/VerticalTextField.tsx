import ReactDOMServer from 'react-dom/server';
import { useTheme } from "@mui/material"
import { useWordProcessorContext } from "../src/context/WordProcessorContext"
import WordProcessorDocument, { useWordProcessorDocument } from "../src/wordprocessor/WordProcessorDocument"
import styles from "../styles/VerticalTextField.module.css"
import React from 'react';
import EditFontSize from '../src/wordprocessor/EditFontSize';

const DEFAULT_FONT_SIZE = "20px"

/** 縦書きテキストフィールド */
const VerticalTextField = () => {
    // MUIのテーマ
    const theme = useTheme()
    // ドキュメントの情報を管理する
    const [wordDocument, setWordDocument] = useWordProcessorDocument('縦書き')
    // テキスト編集エリアのDivのインスタンス。宣言的UIでやっちゃいけないことだとは分かっている
    const textFieldRef = React.useRef<HTMLDivElement>(null)

    // 文字のサイズとか
    const wordData = useWordProcessorContext()
    React.useEffect(() => {
        // 今の私ではこのような形で書き換える以外の考えが出なかった...
        // dangerouslySetInnerHTMLで毎回指定すると描画がおかしくなるんだよね...
        if (wordDocument !== undefined && textFieldRef.current !== null) {

            EditFontSize.edit(wordDocument, wordData?.state.fontSize ?? 20)

            textFieldRef.current.innerHTML = ReactDOMServer.renderToString(WordProcessorDocument.buildJSXDocument(wordDocument))
        }
    }, [wordData?.state.fontSize])

    return (
        <div
            id="text_field"
            ref={textFieldRef}
            suppressContentEditableWarning
            contentEditable
            className={styles.font}
            onInput={(e) => {
                setWordDocument(WordProcessorDocument.convertDocumentData(e.target as HTMLElement))
            }}
            onPaste={(e) => {
                setWordDocument(WordProcessorDocument.convertDocumentData(e.target as HTMLElement))
            }}
            style={{
                padding: '10px',
                width: '80vw',
                fontSize: DEFAULT_FONT_SIZE,
                border: 'none',
                outline: 'none',
                height: '100%',
                backgroundColor: theme.palette.background.default,
                // 縦書き
                writingMode: 'vertical-rl',
                msWritingMode: 'vertical-rl',
                WebkitWritingMode: 'vertical-rl',
                // すべて縦方向
                textOrientation: 'upright'
            }}
        >
        </div >
    )
}

export default VerticalTextField