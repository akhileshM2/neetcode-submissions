class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    islandPerimeter(grid) {
        let ROWS = grid.length, COLS = grid[0].length
        let dirs = [[0, 1], [-1, 0], [1, 0], [0, -1]]
        const visited = Array.from({ length: ROWS }, () => Array(COLS).fill(false))

        const dfs = (r, c) => {
            if (r < 0 || c < 0 || r >= ROWS || c >= COLS || grid[r][c] === 0) {
                return 1
            }

            if (visited[r][c]) {
                return 0
            }
            visited[r][c] = true
            let perimeter = 0
            
            for (const [dr, dc] of dirs) {
                perimeter += dfs(r + dr, c + dc)
            }
            return perimeter
        }

        for (let i = 0; i < ROWS; i++) {
            for (let j = 0; j < COLS; j++) {
                if (grid[i][j] === 1) {
                    return dfs(i, j)
                }
            }
        }
        return 0
    }
}
