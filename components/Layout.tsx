import { CssBaseline } from "@mui/material"
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
            <RibbonUI />
            <Box component="main">
                {children}
            </Box>
        </Box>
    )
}

export default Layout