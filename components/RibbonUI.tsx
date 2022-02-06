import FullscreenOutlined from "@mui/icons-material/FullscreenOutlined"
import CloseOutlined from "@mui/icons-material/CloseOutlined"
import MinimizeOutlined from "@mui/icons-material/MinimizeOutlined"
import { Box, Grid, Paper, Typography, useTheme } from "@mui/material"
import RibbonContent from "./RibbonContent"

/** タブ情報データクラス */
type TabItem = {
    /** タブのテキスト */
    title: string,
    /** 選択中かどうか */
    isSelected: boolean
}

/** タブのテキスト */
const TabItemTextList = new Array<TabItem>(
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

/** タイトル部分 */
const Title = () => {
    return (
        <Grid container alignItems="center">
            {/* タイトル */}
            <Grid item xs>
                <Typography
                    sx={{ padding: 1 }}
                    align="center"
                    color="#ffffff"
                >
                    Woword 2021
                </Typography>
            </Grid>
            {/* 終了、最大化 */}
            <Grid item xs="auto">
                <MinimizeOutlined sx={{
                    marginLeft: 1,
                    marginRight: 1,
                    color: '#ffffff'
                }} />
            </Grid>
            <Grid item xs="auto">
                <FullscreenOutlined sx={{
                    marginLeft: 1,
                    marginRight: 1,
                    color: '#ffffff'
                }} />
            </Grid>
            <Grid item xs="auto">
                <CloseOutlined sx={{
                    marginLeft: 1,
                    marginRight: 1,
                    color: '#ffffff'
                }} />
            </Grid>
        </Grid>
    )
}

/** タブUI */
const RibbonTab = () => {
    const theme = useTheme()

    return (
        <>
            <Grid container>
                {TabItemTextList.map((tabItem) => (
                    <Grid item key={tabItem.title}>
                        {/* 選択中は背景の色を変える */}
                        <Box
                            sx={{
                                paddingLeft: 2,
                                paddingRight: 2,
                                backgroundColor: tabItem.isSelected ? '#ffffff' : '#ffffff00'
                            }}
                        >
                            {/* 背景の色を変えたら文字の色も変える */}
                            <Typography
                                color={tabItem.isSelected ? theme.palette.primary.main : '#ffffff'}>
                                {tabItem.title}
                            </Typography>
                        </Box>
                    </Grid>
                ))}
            </Grid>
        </>
    )
}

/** リボンUI */
const RibbonUI = () => {
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
            <Title />

            {/* タブ */}
            <RibbonTab />

            {/* リボンUIの詳細 */}
            <RibbonContent />

        </Paper>
    )
}

export default RibbonUI