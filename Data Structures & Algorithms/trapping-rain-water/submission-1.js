class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        let leftMax = [], rightMax = []
        let left = height[0], right = height[height.length - 1]
        let result = 0
        let n = height.length

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
            let waterVolume = Math.min(leftMax[i], rightMax[n - i - 1])
            if (waterVolume > height[i]) {
                result += waterVolume - height[i]
            }
        }

        return result
    }
}
