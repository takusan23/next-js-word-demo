import { colors, Grid } from '@mui/material'
import type { NextPage } from 'next'
import React from 'react'
import VerticalTextField from '../components/VerticalTextField'

/** 最初に表示される画面 */
const Home: NextPage = () => {

    return (
        <Grid
            container
            direction="column"
            alignItems="center"
            sx={{
                paddingTop: 5,
                paddingBottom: 5,
                backgroundColor: colors.grey[600]
            }}
        >
            <Grid item xs>
                <VerticalTextField />
            </Grid>
        </Grid>
    )
}

export default Home
