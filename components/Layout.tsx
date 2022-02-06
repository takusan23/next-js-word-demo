import { CssBaseline, Grid } from "@mui/material"
import Box from "@mui/material/Box"
import RibbonUI from "./RibbonUI"

/** Layout へ渡すデータ */
type LayoutProps = {

}

/** 共通部分 */
const Layout: React.FC<LayoutProps> = ({ children, ...props }) => {
    return (
        <Box>
            <CssBaseline />
            <Grid
                container
                spacing={0}
                direction="column"
                alignItems="stretch"
                sx={{ minHeight: '100vh', }}
            >
                {/* リボンUIの部分 */}
                <Grid item xs="auto">
                    <RibbonUI />
                </Grid>

                {/* 本文 */}
                <Grid item xs sx={{ overflowY: 'scroll' }}>
                    <Box
                        component="main"
                        sx={{
                            height: '100%',
                            maxHeight: '100%',
                        }}
                    >
                        {children}
                    </Box>
                </Grid>
            </Grid>
        </Box >
    )
}

export default Layout