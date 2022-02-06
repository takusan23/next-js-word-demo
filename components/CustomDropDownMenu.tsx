import ExpandMoreOutlined from "@mui/icons-material/ExpandMoreOutlined"
import { colors, Typography } from "@mui/material"

/** CustomDropDownMenu へ渡すデータ */
type CustomDropDownMenuProps = {
    /** ドロップダウンメニューに表示するテキスト */
    value: string
}

/** ドロップダウンメニュー（見た目だけ） */
const CustomDropDownMenu: React.FC<CustomDropDownMenuProps> = (props) => {
    return (
        <div
            style={{
                display: 'flex',
                alignItems: 'center',
                flexWrap: 'wrap',
                borderRadius: '5px',
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
        </div>
    )
}

export default CustomDropDownMenu