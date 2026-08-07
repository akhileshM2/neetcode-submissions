class NumMatrix {
    /**
     * @param {number[][]} matrix
     */
    constructor(matrix) {
        let ROWS = matrix.length, COLS = matrix[0].length
        this.sumMat = Array.from({ length: ROWS + 1 }, () => Array(COLS + 1).fill(0))

        for (let i = 0; i < ROWS; i++) {
            let prefix = 0
            for (let j = 0; j < COLS; j++) {
                prefix += matrix[i][j]
                let above = this.sumMat[i][j + 1]
                this.sumMat[i + 1][j + 1] = prefix + above
            }
        }
    }

    /**
     * @param {number} row1
     * @param {number} col1
     * @param {number} row2
     * @param {number} col2
     * @return {number}
     */
    sumRegion(row1, col1, row2, col2) {
        row1++
        col1++
        row2++
        col2++

        let bottomRight = this.sumMat[row2][col2]
        let above = this.sumMat[row1 - 1][col2]
        let left = this.sumMat[row2][col1 - 1]
        return bottomRight - above - left + this.sumMat[row1 - 1][col1 - 1]
    }
}

/**
 * Your NumMatrix object will be instantiated and called as such:
 * var obj = new NumMatrix(matrix)
 * var param_1 = obj.sumRegion(row1,col1,row2,col2)
 */
