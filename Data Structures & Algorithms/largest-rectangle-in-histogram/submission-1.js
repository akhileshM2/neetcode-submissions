class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    largestRectangleArea(heights) {
        let n = heights.length
        let res = 0

        for (let i = 0; i < n; i++) {
            let min = Infinity
            for (let j = i; j < n; j++) {
                min = Math.min(min, heights[j])
                res = Math.max(res, min * (j - i + 1))
            }
        }
        return res
    }
}
