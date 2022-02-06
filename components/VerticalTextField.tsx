import { useTheme } from "@mui/material"

/** 縦書きテキストフィールド */
const VerticalTextField = () => {
    const theme = useTheme()

    return (
        <div
            suppressContentEditableWarning
            contentEditable
            style={{
                padding: '10px',
                width: '80vw',
                fontSize: '22px',
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