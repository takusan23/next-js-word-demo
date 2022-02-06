import { Box, colors } from "@mui/material"

/** スケルトンビュー */
const SkeletonComponent = () => {
    return (
        <Box
            style={{
                display: 'flex',
                alignItems: 'center',
                flexWrap: 'wrap',
                borderRadius: 2,
                width: 140,
                height: 70,
                background: colors.grey[400],
            }}
        />
    )
}

export default SkeletonComponent