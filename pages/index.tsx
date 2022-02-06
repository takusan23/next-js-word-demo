import { colors, Grid } from '@mui/material'
import type { NextPage } from 'next'
import WritingLayout from '../components/WritingLayout'

/** 最初に表示される画面 */
const Home: NextPage = () => {
    return (
        <Grid
            container
            direction="column"
            alignItems="center"
            sx={{
                paddingLeft: 5,
                paddingRight: 5,
                paddingTop: 2,
                paddingBottom: 2,
                height: '80vh',
                overflowY: 'scroll',
                backgroundColor: colors.grey[300]
            }}
        >
            <Grid item>
                <WritingLayout />
            </Grid>
        </Grid>
    )
}

export default Home
