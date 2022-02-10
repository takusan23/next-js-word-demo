import ExpandMoreOutlined from "@mui/icons-material/ExpandMoreOutlined"
import { Box, colors, Typography } from "@mui/material"
import React from "react"

/** DropdownButton へ渡すデータ */
export type DropdownButtonProps = {
    /** ドロップダウンメニューに表示するテキスト */
    value: string,
    /** ボタンを押したときに呼ばれる */
    onClick?: (event: React.MouseEvent<HTMLElement>) => void
}

/** ドロップダウンメニューで使うボタン部分。ポップアップメニューはPopupの方に書いてる */
export const DropdownButton: React.FC<DropdownButtonProps> = (props) => {
    return (
        <Box
            onClick={props.onClick}
            style={{
                display: 'flex',
                alignItems: 'center',
                flexWrap: 'wrap',
                borderRadius: '5px',
                cursor: 'pointer',
                background: colors.grey[300],
            }}
        >
            <Typography sx={{
                paddingLeft: 1,
                paddingRight: 1,
            }}>
                {props.value}
            </Typography>
            <ExpandMoreOutlined sx={{
                borderRadius: '5px',
                background: colors.grey[400]
            }} />
        </Box>
    )
}