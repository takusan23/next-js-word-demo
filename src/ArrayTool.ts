/** 指定した数埋めた配列を返す関数がある */
class ArrayTool {

    /**
     * 引数に指定した大きさの配列を作成する
     * 
     * @param size 大きさ
     */
    static create(size: number) {
        return Array.from({ length: size }, (v, i) => i)
    }

}

export default ArrayTool