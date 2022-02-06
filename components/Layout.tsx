import Box from "@mui/material/Box"
import RibbonUI from "./RibbonUI"

/** Layout へ渡すデータ */
type LayoutProps = {

}

/** 共通部分 */
const Layout: React.FC<LayoutProps> = ({ children, ...props }) => {
    return (
        <Box sx={{ display: 'flex' }}>
            <RibbonUI />
            {children}
        </Box>
    )
}

export default Layout