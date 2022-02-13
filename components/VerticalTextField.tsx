import { useTheme } from "@mui/material"
import styles from "../styles/VerticalTextField.module.css"
import React from 'react'
import WordProcessorDocumentData from "../src/data/wordprocessor/WordProcessorDocumentData"
import WordProcessorDocument from "../src/wordprocessor/WordProcessorDocument"

const DEFAULT_FONT_SIZE = "20px"

/** VerticalTextField へ渡すデータ */
type VerticalTextFieldProps = {
    /** ドキュメント情報 */
    wordDocument: WordProcessorDocumentData,
    /** ドキュメント情報を更新する関数 */
    setWordDocument: (wordDocument: WordProcessorDocumentData) => void,
    /** テキスト編集エリアのDivのインスタンス。宣言的UIでやっちゃいけないことだとは分かっている */
    textFieldRef: React.Ref<HTMLDivElement>,
    /** テキストフィールドを離れたら呼ばれる */
    onBlur?: () => void,
}

/** 縦書きテキストフィールド */
const VerticalTextField: React.FC<VerticalTextFieldProps> = (props) => {
    // MUIのテーマ
    const theme = useTheme()

    /**
     * 入力した内容を管理側に反映させる
     * 
     * @param 入力してる要素
     */
    const updateDocument = (element: HTMLElement) => {
        props.setWordDocument(WordProcessorDocument.convertDocumentData(element))
    }

    return (
        <div
            id="text_field"
            ref={props.textFieldRef}
            suppressContentEditableWarning
            contentEditable
            className={styles.font}
            onInput={(e) => {
                updateDocument(e.target as HTMLElement)
            }}
            onPaste={(e) => {
                updateDocument(e.target as HTMLElement)
            }}
            onBlur={props.onBlur}
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
        />
    )
}

export default VerticalTextField