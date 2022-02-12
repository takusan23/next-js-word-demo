import React from "react";
import WordProcessorData from "../data/WordProcessorData";

/** WordProcessorData 初期値 */
const initialData: WordProcessorData = {
    fontSize: 20,
}

/** useReducerで返ってくる値をContextに入れるための型 */
type WordProcessorContextType = {
    /** 現在のWordProcessorDataを返す */
    state: WordProcessorData,
    /** 更新用関数です。ActionTypeを参照に */
    dispatch: React.Dispatch<WordProcessorActionType>
}

/** Dispatchで更新する際に受け付ける操作 Union型とかいうやつらしい */
export type WordProcessorActionType =
    | { type: "setFontSize", value: number } // フォントサイズの変更


/** Dispatcherを受け取って値の変更をする関数 */
export const wordProcessorContextReducer = (data: WordProcessorData, action: WordProcessorActionType) => {
    switch (action.type) {
        // フォントサイズの変更
        case "setFontSize":
            return {
                ...data,
                fontSize: action.value
            }
        default:
            return data
    }
}

/** WordProcessorDataへアクセスするReducerをグローバルに参照できるようにContext を作る */
export const WordProcessorContext = React.createContext<WordProcessorContextType | undefined>(undefined)

/** useReducerでWordProcessorDataを作成する */
export const useWordProcessorReducer = () => React.useReducer(wordProcessorContextReducer, initialData)

/** グローバルに参照できるWordProcessorDataへアクセスするやつ */
export const useWordProcessorContext = () => React.useContext(WordProcessorContext)