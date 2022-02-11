import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { useEffect } from 'react'
import Layout from '../components/Layout'
import useWordTheme from '../src/WordTheme'
import { ThemeProvider } from '@mui/material'
import React from 'react'
import { useWordProcessorReducer, WordProcessorContext } from '../src/context/WordProcessorContext'

/** エントリーポイント */
const MyApp = ({ Component, pageProps }: AppProps) => {

    // テーマ
    const theme = useWordTheme()
    // WordProcessorDataはuseReducerで扱う
    const [wordData, setWordData] = useWordProcessorReducer()

    // Next.jsではMaterial-UIの設定が必要。
    // useEffectはJetpackComposeで言うところのLaunchedEffectのようなもの
    useEffect(() => {
        const jssStyles = document.querySelector('#jss-server-side')
        jssStyles?.parentElement?.removeChild(jssStyles)
    }, [])

    return (
        <ThemeProvider theme={theme}>
            <WordProcessorContext.Provider value={{ state: wordData, dispatch: setWordData }}>
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            </WordProcessorContext.Provider>
        </ThemeProvider>
    )
}

export default MyApp
