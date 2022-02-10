import Head from "next/head"

/**
 * Google Fonts Noto Serif Japanese
 * 
 * License
 * 
 * These fonts are licensed under the Open Font License.
 * 
 * You can use them freely in your products & projects - print or digital, commercial or otherwise.
 * 
 * This isn't legal advice, please consider consulting a lawyer and see the full license for all details.
 * 
 */

/** GoogleフォントをロードするstyleタグをHeadに追加する */
const GoogleFontLoader = () => {
    return (
        <Head>
            <style dangerouslySetInnerHTML={{
                __html: `@import url('https://fonts.googleapis.com/css2?family=Noto+Serif+JP&display=swap');`
            }} />
        </Head>
    )
}

export default GoogleFontLoader