class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        let r = matrix.length, c = matrix[0].length
        let top = 0, bot = r - 1

        while (top <= bot) {
            let row = Math.floor((top + bot) / 2)
            if (target > matrix[row][c - 1]) {
                top = row + 1
            } else if (target < matrix[row][0]) {
                bot = row - 1
            } else {
                break
            }
        }
        if (!(top <= bot)) return false

        let l = 0, rw = c - 1
        let row = Math.floor((top + bot) / 2)
        while (l <= rw) {
            let mid = Math.floor((l + rw) / 2)
            if (target > matrix[row][mid]) {
                l = mid + 1
            } else if (target < matrix[row][mid]) {
                rw = mid - 1
            } else {
                return true
            }
        }
        
        return false
    }
}
