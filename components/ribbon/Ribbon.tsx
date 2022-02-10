import { Paper, useTheme } from "@mui/material"
import RibbonMainContent from "./RibbonMainContent"
import { RibbonTab, TabItem } from "./RibbonTab"
import RibbonTitle from "./RibbonTitle"

/** タブのテキスト */
const TabItemList = new Array<TabItem>(
    { title: "ファイル", isSelected: false },
    { title: "ホーム", isSelected: false },
    { title: "挿入", isSelected: false },
    { title: "デザイン", isSelected: true },
    { title: "画面切り替え", isSelected: false },
    { title: "ページレイアウト", isSelected: false },
    { title: "参照", isSelected: false },
    { title: "表示", isSelected: false },
    { title: "ヘルプ", isSelected: false },
)


/** リボンUI */
const Ribbon = () => {
    const theme = useTheme()

    return (
        <Paper
            elevation={2}
            square={true}
            sx={{
                width: '100%',
                backgroundColor: theme.palette.primary.main
            }}
        >
            {/* タイトル */}
            <RibbonTitle />

            {/* タブ */}
            <RibbonTab tabItemList={TabItemList} />

            {/* リボンUIの詳細 */}
            <RibbonMainContent />

        </Paper>
    )
}

export default Ribbon