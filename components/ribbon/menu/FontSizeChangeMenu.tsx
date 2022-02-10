import React from "react"
import DropdownMenu from "../../dropdownmenu/DropdownMenu"

/** フォントサイズ変更 */
const FontSizeChangeMenu = () => {
    // メニューの中身
    const menuItemList = Array.from({ length: 5 }, (v, i) => (i + 1) * 10).map((num) => `${num}pt`)
    // 選択中テキスト
    const [currentSize, setSize] = React.useState("20pt")
    return (
        <DropdownMenu
            menuList={menuItemList}
            onMenuClick={(menu) => setSize(menu)}
            value={currentSize}
        />
    )
}

export default FontSizeChangeMenu