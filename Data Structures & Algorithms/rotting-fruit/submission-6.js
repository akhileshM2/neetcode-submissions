class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    orangesRotting(grid) {
        let q = new Queue()
        let fresh = 0
        let time = 0
        let dirs = [[0, 1], [1, 0], [-1, 0], [0, -1]]
        let ROWS = grid.length, COLS = grid[0].length

        for (let i = 0; i < ROWS; i++) {
            for (let j = 0; j < COLS; j++) {
                if (grid[i][j] === 1) {
                    fresh++
                }
                if (grid[i][j] === 2) {
                    q.push([i, j])
                }
            }
        }

        while (fresh > 0 && !q.isEmpty()) {
            const length = q.size()
            for (let i = 0; i < length; i++) {
                let [r, c] = q.pop()
                for (const [dr, dc] of dirs) {
                    const row = r + dr
                    const col = c + dc
                    if (row >= 0 && row < ROWS && col >= 0 && col < COLS && grid[row][col] === 1) {
                        grid[row][col] = 2
                        q.push([row, col])
                        fresh--
                    }
                }
            }
            time++
        }
        return fresh === 0 ? time : -1
    }
}
