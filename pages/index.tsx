import { colors, Grid } from '@mui/material'
import type { NextPage } from 'next'
import React from 'react'
import VerticalTextField from '../components/VerticalTextField'
import WordProcessorDocument, { useWordProcessorDocument } from '../src/wordprocessor/WordProcessorDocument'
import { useWordProcessorContext } from "../src/context/WordProcessorContext"
import EditFontSize from '../src/wordprocessor/EditFontSize'

/** 最初に表示される画面 */
const Home: NextPage = () => {

    // ドキュメントの情報を管理する
    const [wordDocument, setWordDocument] = useWordProcessorDocument('縦書き。美しい日本語')
    // 文字のサイズとか
    const wordData = useWordProcessorContext()
    // テキストフィールドへのインスタンス（宣言的UIでやるべきではない）
    const textFieldRef = React.useRef<HTMLDivElement>(null)

    /** DocumentDataを実際のテキストフィールドへ入れる */
    const applyDocument = () => {
        textFieldRef.current!.innerHTML = WordProcessorDocument.convertJSXToHTML(WordProcessorDocument.buildJSXDocument(wordDocument))
    }

    React.useEffect(() => {
        // 今の私ではこのような形で書き換える以外の考えが出なかった...
        // dangerouslySetInnerHTMLで毎回指定すると描画がおかしくなるんだよね...
        if (wordDocument !== undefined) {
            EditFontSize.edit(wordDocument, wordData?.state.fontSize ?? 20)
            applyDocument()
        }
    }, [wordData?.state.fontSize])

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
                <VerticalTextField
                    textFieldRef={textFieldRef}
                    setWordDocument={(data) => { setWordDocument(data) }}
                    wordDocument={wordDocument}
                />
            </Grid>
        </Grid>
    )
}

export default Home
