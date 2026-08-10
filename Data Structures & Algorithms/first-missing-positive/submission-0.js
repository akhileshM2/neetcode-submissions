class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    firstMissingPositive(nums) {
        let n = nums.length
        let seen = new Array(n).fill(false)
        for (let i = 0; i < n; i++) {
            if (nums[i] > 0 && nums[i] <= n) {
                seen[nums[i] - 1] = true
            }
        }

        for (let i = 0; i < n; i++) {
            if (!seen[i]) {
                return i + 1
            }
        }
        return n + 1
    }
}
