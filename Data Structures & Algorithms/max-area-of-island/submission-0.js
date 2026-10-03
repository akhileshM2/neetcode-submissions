class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    maxAreaOfIsland(grid) {
        let ROWS = grid.length, COLS = grid[0].length
        let dirs = [[1, 0], [-1, 0], [0, 1], [0, -1]]
        let maxArea = 0

        const dfs = (r, c) => {
            if (r < 0 || c < 0 || r >= ROWS || c >= COLS || grid[r][c] === 0) {
                return 0
            }

            grid[r][c] = 0
            let res = 1
            for (const [dr, dc] of dirs) {
                res += dfs(r + dr, c + dc)
            }
            return res
        }

        for (let i = 0; i < ROWS; i++) {
            for (let j = 0; j < COLS; j++) {
                if (grid[i][j] === 1) {
                    maxArea = Math.max(maxArea, dfs(i, j))
                }
            }
        }
        return maxArea
    }
}
