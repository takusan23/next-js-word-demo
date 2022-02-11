import { useTheme } from "@mui/material"
import { useWordProcessorContext } from "../src/context/WordProcessorContext"
import styles from "../styles/VerticalTextField.module.css"

/** 縦書きテキストフィールド */
const VerticalTextField = () => {
    // MUIのテーマ
    const theme = useTheme()
    // 文字のサイズとか
    const wordData = useWordProcessorContext()

    return (
        <div
            suppressContentEditableWarning
            contentEditable
            className={styles.font}
            style={{
                padding: '10px',
                width: '80vw',
                fontSize: `${wordData?.state.fontSize}px`,
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
            }}>
            縦書きWord。
        </div>
    )
}

export default VerticalTextField