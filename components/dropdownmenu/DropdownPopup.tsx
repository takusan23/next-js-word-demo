import { Menu, MenuItem } from "@mui/material"
import React from "react";

/** DropdownPopup へ渡すデータ */
export type DropdownPopupProps = {
    /** 表示する場合はtrue */
    isShow: boolean,
    /** どのHTML要素の上に表示するか */
    anchorElement: HTMLElement | null,
    /** メニューの項目 */
    menuList?: Array<string>,
    /** メニュー閉じてほしいときに呼ばれる */
    onMenuClose: () => void,
    /** メニューの項目押したときに呼ばれる。引数は押したメニューのテキスト*/
    onMenuClick?: (menu: string) => void,
}

/** ポップアップするメニュー */
export const DropdownPopup: React.FC<DropdownPopupProps> = (props) => {
    const menuList = props.menuList ?? new Array()

    return (
        <>
            <Menu
                elevation={1}
                anchorEl={props.anchorElement}
                open={props.isShow && menuList.length != 0}
                onClose={props.onMenuClose}
                transitionDuration={0}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
            >
                {
                    menuList.map((menuText) => (
                        <MenuItem
                            key={menuText}
                            onClick={() => {
                                // Kotlinの function?.invoke() のようなもの
                                props.onMenuClick?.(menuText)
                                props.onMenuClose()
                            }}
                        >
                            {menuText}
                        </MenuItem>
                    ))
                }
            </Menu>
        </>
    )
}