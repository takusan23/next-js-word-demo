import React from "react"
import ArrayTool from "../../../src/ArrayTool"
import DropdownMenu from "../../dropdownmenu/DropdownMenu"

/** FontSizeChangeMenu へ渡すデータ */
export type FontSizeChangeMenuProps = {
    /** 今のフォントサイズ */
    fontSize?: number,
    /** 選択が変更されたら呼ばれる */
    onSizeSelect?: (size: number) => void
}

/** フォントサイズ変更 */
const FontSizeChangeMenu: React.FC<FontSizeChangeMenuProps> = (props) => {
    // メニューの中身
    const menuItemList = ArrayTool.create(10).map(i => (i + 1) * 10).map(i => i.toString())

    return (
        <DropdownMenu
            menuList={menuItemList}
            onMenuClick={(menu) => {
                // フォントサイズの変更
                props.onSizeSelect?.(parseInt(menu))
            }}
            value={`${props.fontSize ?? 10}pt`}
        />
    )
}

export default FontSizeChangeMenu