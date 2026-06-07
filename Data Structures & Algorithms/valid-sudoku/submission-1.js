class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        for (let i = 0; i < 9; i++) {
            const row = new Set()
            for (let j = 0; j < 9; j++) {
                if (board[i][j] === ".") {
                    continue
                }
                else if (row.has(board[i][j])) {
                    return false
                }
                else {
                    row.add(board[i][j])
                }
            }
        }

        for (let i = 0; i < 9; i++) {
            const col = new Set()
            for (let j = 0; j < 9; j++) {
                if (board[j][i] === ".") {
                    continue
                }
                else if (col.has(board[j][i])) {
                    return false
                }
                else {
                    col.add(board[j][i])
                }
            }
        }

        for (let k = 0; k < 9; k++) {
            const cell = new Set()
            for (let i = 0; i < 3; i++) {
                for (let j = 0; j < 3; j++) {
                    let r = Math.floor(k / 3) * 3 + i
                    let c = Math.floor(k % 3) * 3 + j
                    if (board[r][c] === ".") {
                        continue
                    }
                    else if (cell.has(board[r][c])) {
                        return false
                    }
                    else {
                        cell.add(board[r][c])
                    }
                }
            }
        }
        return true
    }
}
