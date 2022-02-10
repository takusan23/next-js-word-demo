import { Box } from "@mui/material"
import { DropdownPopup } from "./DropdownPopup"
import { DropdownButton } from "./DropdownButton"
import React from "react"

/** DropdownMenu へ渡すデータ。 */
type DropdownMenuProps = {
    /** テキスト */
    value: string,
    /** メニューの項目押したときに呼ばれる。引数は押したメニューのテキスト*/
    onMenuClick?: (menu: string) => void,
    /** メニューの項目 */
    menuList?: Array<string>,
}

/** ボタン + ドロップダウンメニュー */
const DropdownMenu: React.FC<DropdownMenuProps> = (props) => {
    /** ドロップダウンメニューを表示する位置合わせで使う要素。nullを入れると表示しない */
    const [anchorElement, setAnchorElement] = React.useState<null | HTMLElement>(null)
    /** ドロップダウンメニューを表示するか。 */
    const isShow = anchorElement !== null

    /** ドロップダウンメニューを閉じる */
    const closeMenu = () => {
        setAnchorElement(null)
    }

    /** ドロップダウンメニューを表示させる */
    const showMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElement(event.currentTarget)
    }

    return (
        <Box>
            {/* ボタン部分 */}
            <DropdownButton
                value={props.value}
                onClick={showMenu}
            />
            {/* ポップアップメニュー部分 */}
            <DropdownPopup
                isShow={isShow}
                onMenuClick={props.onMenuClick}
                onMenuClose={closeMenu}
                anchorElement={anchorElement}
                menuList={props.menuList}
            />
        </Box>
    )
}

export default DropdownMenu