import { Box, colors } from "@mui/material"

/** ColorButton へ渡すデータ */
type ColorButtonProps = {
    /** カラーコード */
    colorCode: string
}

/** 色のボタン */
const ColorButton: React.FC<ColorButtonProps> = (props) => {
    return (
        <Box
            sx={{
                borderWidth: 1,
                borderStyle: 'solid',
                borderColor: colors.grey[500],
            }}
        >
            <Box
                sx={{
                    margin: '3px',
                    width: 20,
                    height: 20,
                    backgroundColor: props.colorCode
                }}
            />
        </Box>
    )
}

export default ColorButton