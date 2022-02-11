import { Box, colors, Grid } from "@mui/material"
import ColorButton from "../ColorButton"
import { DropdownButton } from "../dropdownmenu/DropdownButton"
import SkeletonComponent from "../SkeletonComponent"
import Spacer from "../Spacer"
import React from "react"
import FontSizeChangeMenu from "./menu/FontSizeChangeMenu"
import ArrayTool from "../../src/ArrayTool"
import { useWordProcessorContext } from "../../src/context/WordProcessorContext"

/** 「デザイン」タブの中身 */
const DesignContent = () => {
    // ここに書くべきなのかは知らない
    const wordData = useWordProcessorContext()
    /** フォントサイズをセットする */
    const setFontSize = (size: number) => wordData?.dispatch({ type: "setFontSize", value: size })

    return (
        <Box>
            <Grid container direction="row" alignItems="center" spacing={2}>
                <Grid item>
                    <DropdownButton value="画像挿入" />
                </Grid>
                <Grid item>
                    <DropdownButton value="左揃え" />
                </Grid>
                <Grid item>
                    <ColorButton colorCode="#000000" />
                </Grid>
                <Grid item>
                    <ColorButton colorCode="#ff0000" />
                </Grid>
            </Grid>
            <Spacer value={1} />
            <Grid container spacing={2}>
                <Grid item>
                    <FontSizeChangeMenu
                        fontSize={wordData?.state.fontSize}
                        onSizeSelect={setFontSize}
                    />
                </Grid>
                <Grid item>
                    <DropdownButton value="游ゴシック" />
                </Grid>
                <Grid item>
                    <DropdownButton value="Regular" />
                </Grid>
            </Grid>
        </Box>
    )
}

/** スケルトンビューがある部分 */
const SkeletonUIGroup = () => {
    return (
        <Grid container spacing={2}>
            {
                ArrayTool.create(4).map((key) => (
                    <Grid item key={key}>
                        <SkeletonComponent />
                    </Grid>
                ))
            }
        </Grid>
    )
}

/** リボンの中身。フォントサイズ変更とかがあるUI */
const RibbonMainContent = () => {
    return (
        <Box
            sx={{
                paddingLeft: 1,
                paddingTop: 2,
                paddingBottom: 2,
                background: colors.grey[100]
            }}
        >
            <Grid container>
                <Grid item>
                    <DesignContent />
                </Grid>
                <Grid item>
                    <Spacer value={2} />
                </Grid>
                <Grid item>
                    <SkeletonUIGroup />
                </Grid>
            </Grid>
        </Box >
    )
}

export default RibbonMainContent