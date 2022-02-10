import { Box, colors, Grid, Typography, useTheme } from "@mui/material"
import React from "react"

/** 選択中のリボンの色 */
const RibbonSelectedColor = colors.grey[100];

/** 未選択中のリボンの色 */
const RibbonUnSelectedColor = '#ffffff00'

/** タブ情報データクラス */
export type TabItem = {
    /** タブのテキスト */
    title: string,
    /** 選択中かどうか */
    isSelected: boolean
}

/** RibbonTab へ渡すデータ */
export type RibbonTabProps = {
    /** タブの配列 */
    tabItemList: Array<TabItem>
}

/** リボンUIのタブ部分 */
export const RibbonTab: React.FC<RibbonTabProps> = (props) => {
    const theme = useTheme()

    return (
        <>
            <Grid container>
                {props.tabItemList.map((tabItem) => (
                    <Grid item key={tabItem.title}>
                        {/* 選択中は背景の色を変える */}
                        <Box
                            sx={{
                                paddingLeft: 2,
                                paddingRight: 2,
                                backgroundColor: tabItem.isSelected ? RibbonSelectedColor : RibbonUnSelectedColor
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
