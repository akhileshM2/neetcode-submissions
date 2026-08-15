class Solution {
    /**
     * @param {number} target
     * @param {number[]} nums
     * @return {number}
     */
    minSubArrayLen(target, nums) {
        let l = 0, r = 0, sum = 0, res = nums.length + 1
        while (r < nums.length) {
            sum += nums[r]
            while (sum >= target) {
                res = Math.min(res, r - l + 1)
                sum -= nums[l]
                l++
            }
            r++
        }
        return res === nums.length + 1 ? 0 : res
    }
}
