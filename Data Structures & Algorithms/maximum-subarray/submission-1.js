class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxSubArray(nums) {
        let res = nums[0], sum = 0

        for (const n of nums) {
            if (sum < 0) {
                sum = 0
            }
            sum += n
            res = Math.max(res, sum)
        }
        return res
    }
}
