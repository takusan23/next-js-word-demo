import { createTheme } from "@mui/material/styles"
import React from "react"

/** テーマ設定 */
const useWordTheme = () => {
    return React.useMemo(
        () => createTheme({
            palette: {
                mode: 'light',
                primary: {
                    main: '#4559a9',
                },
                secondary: {
                    main: '#006c49',
                },
                error: {
                    main: '#ba1b1b',
                },
                background: {
                    default: '#ffffff',
                    paper: '#fefbff',
                },
            },
            typography: {
                fontFamily: [
                    'Koruri Regular'
                ].join(','),
            }
        }), []
    )
}

export default useWordTheme