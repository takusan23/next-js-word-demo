import { Box, colors, Grid } from "@mui/material"
import ColorButton from "../ColorButton"
import CustomDropDownMenu from "../CustomDropDownMenu"
import SkeletonComponent from "../SkeletonComponent"
import Spacer from "../Spacer"

/** ドロップダウンメニュー、色選択のUIがある部分 */
const DropDownMenuGroup = () => {
    return (
        <Box>
            <Grid container direction="row" alignItems="center" spacing={2}>
                <Grid item>
                    <CustomDropDownMenu value="画像挿入" />
                </Grid>
                <Grid item>
                    <CustomDropDownMenu value="左揃え" />
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
                    <CustomDropDownMenu value="22pt" />
                </Grid>
                <Grid item>
                    <CustomDropDownMenu value="游ゴシック" />
                </Grid>
                <Grid item>
                    <CustomDropDownMenu value="Regular" />
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
                [0, 1, 2, 3].map((key) => (
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
                    <DropDownMenuGroup />
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