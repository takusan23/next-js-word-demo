import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { useEffect } from 'react'
import Layout from '../components/Layout'
import useWordTheme from '../src/WordTheme'
import { ThemeProvider } from '@mui/material'

/** エントリーポイント */
const MyApp = ({ Component, pageProps }: AppProps) => {

    // テーマ。カスタムフック？何もわからん
    const theme = useWordTheme()

    // Next.jsではMaterial-UIの設定が必要。
    // useEffectはJetpackComposeで言うところのLaunchedEffectのようなもの
    useEffect(() => {
        const jssStyles = document.querySelector('#jss-server-side')
        jssStyles?.parentElement?.removeChild(jssStyles)
    }, [])

    return (
        <ThemeProvider theme={theme}>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </ThemeProvider>
    )
}

export default MyApp
