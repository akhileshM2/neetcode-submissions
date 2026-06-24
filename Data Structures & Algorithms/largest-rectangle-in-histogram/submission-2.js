class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    largestRectangleArea(heights) {
        let n = heights.length
        let res = 0
        let stack = []

        for (let i = 0; i < n; i++) {
            let start = i
            while (stack.length && stack[stack.length - 1][0] > heights[i]) {
                let [height, index] = stack.pop()
                res = Math.max(res, height * (i - index))
                start = index
            }
            stack.push([heights[i], start])
        }
        for (const [h, i] of stack) {
            res = Math.max(res, h * (n - i))
        }
        return res
    }
}
