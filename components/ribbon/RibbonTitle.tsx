import { Grid, Typography } from "@mui/material"
import FullscreenOutlined from "@mui/icons-material/FullscreenOutlined"
import CloseOutlined from "@mui/icons-material/CloseOutlined"
import MinimizeOutlined from "@mui/icons-material/MinimizeOutlined"

/** タイトル部分 */
const RibbonTitle = () => {
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

export default RibbonTitle