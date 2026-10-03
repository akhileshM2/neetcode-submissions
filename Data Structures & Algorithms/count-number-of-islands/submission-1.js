class Solution {
    /**
     * @param {character[][]} grid
     * @return {number}
     */
    numIslands(grid) {
        let visited = new Set()
        let ROWS = grid.length, COLS = grid[0].length
        let dirs = [[0, 1], [-1, 0], [1, 0], [0, -1]]
        let islands = 0

        const dfs = (r, c) => {
            if (r < 0 || c < 0 || r >= ROWS || c >= COLS || grid[r][c] === "0") {
                return
            }

            grid[r][c] = "0"
            for (const [dr, dc] of dirs) {
                dfs(r + dr, c + dc)
            }
        }

        for (let i = 0; i < ROWS; i++) {
            for (let j = 0; j < COLS; j++) {
                if (grid[i][j] === "1") {
                    dfs(i, j)
                    islands++
                }
            }
        }
        return islands
    }
}
