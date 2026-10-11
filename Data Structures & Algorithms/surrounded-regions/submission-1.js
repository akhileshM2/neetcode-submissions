class Solution {
    /**
     * @param {character[][]} board
     * @return {void} Do not return anything, modify board in-place instead.
     */
    solve(board) {
        let ROWS = board.length, COLS = board[0].length
        let dirs = [[0, 1], [1, 0], [0, -1], [-1, 0]]

        const dfs = (r, c) => {
            if (r < 0 || c < 0 || r >= ROWS || c >= COLS || board[r][c] !== "O") {
                return
            }
            board[r][c] = "T"
            for (let [dr, dc] of dirs) {
                dfs(r + dr, c + dc)
            }
        }

        for (let r = 0; r < ROWS; r++) {
            if (board[r][0] === "O") {
                dfs(r, 0)
            }
            if (board[r][COLS - 1] === "O") {
                dfs(r, COLS - 1)
            }
        }

        for (let c = 0; c < COLS; c++) {
            if (board[0][c] === "O") {
                dfs(0, c)
            }
            if (board[ROWS - 1][c] === "O") {
                dfs(ROWS - 1, c)
            }
        }

        for (let r = 0; r < ROWS; r++) {
            for (let c = 0; c < COLS; c++) {
                if (board[r][c] === "O") {
                    board[r][c] = "X"
                } else if (board[r][c] === "T") {
                    board[r][c] = "O"
                }
            }
        }
    }
}
