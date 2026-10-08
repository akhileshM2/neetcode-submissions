class Solution {
    /**
     * @param {number[][]} grid
     */
    islandsAndTreasure(grid) {
        const val = 2147483647
        let dirs = [[1, 0], [0, 1], [-1, 0], [0, -1]]
        let ROWS = grid.length, COLS = grid[0].length
        let visit = new Set()
        let q = new Queue()

        const addCell = (r, c) => {
            if (r < 0 || c < 0 || r >= ROWS || c >= COLS || grid[r][c] === -1 || visit.has(r + "," + c)) {
                return
            }

            visit.add(r + "," + c)
            q.push([r, c])
        }
        
        for (let i = 0; i < ROWS; i++) {
            for (let j = 0; j < COLS; j++) {
                if (grid[i][j] === 0) {
                    q.push([i, j])
                    visit.add(i + "," + j)
                }
            }
        }

        let dist = 0
        while (!q.isEmpty()) {
            for (let i = q.size(); i > 0; i--) {
                let [r, c] = q.pop()
                grid[r][c] = dist
                addCell(r + 1, c)
                addCell(r - 1, c)
                addCell(r, c + 1)
                addCell(r, c - 1)
            }
            dist++
        }
    }
}
