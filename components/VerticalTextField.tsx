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
                height: '80vh',
                width: '80vw',
                fontSize: '22px',
                writingMode: 'vertical-rl',
                msWritingMode: 'vertical-rl',
                WebkitWritingMode: 'vertical-rl',
                border: 'none',
                outline: 'none',
                backgroundColor: theme.palette.background.default
            }}>
            縦書きWord
        </div>
    )
}

export default VerticalTextField