class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        let leftMax = [], rightMax = []
        let n = height.length, result = 0
        let left = height[0], right = height[n - 1]

        for (let i = 0; i < n; i++) {
            leftMax.push(left)
            if (height[i] > left) {
                left = height[i]
            }
        }

        for (let i = n - 1; i >= 0; i--) {
            rightMax.push(right)
            if (height[i] > right) {
                right = height[i]
            }
        }

        for (let i = 0; i < n; i++) {
            let waterHeight = Math.min(leftMax[i], rightMax[n - i - 1])
            if (waterHeight > height[i]) {
                result += waterHeight - height[i]
            }
        }
        return result
    }
}
