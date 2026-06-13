class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let left = 0, right = heights.length - 1
        let result = 0

        while (left < right) {
            result = Math.max(result, Math.min(heights[left], heights[right]) * (right - left))
            if (heights[left] < heights[right]) {
                left++
            }
            else {
                right--
            }
        }
        return result
    }
}
