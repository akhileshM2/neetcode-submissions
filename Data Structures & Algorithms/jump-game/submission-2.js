class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    canJump(nums) {
        let end = nums.length - 1
        
        for (let i = nums.length - 2; i >= 0; i--) {
            if (i + nums[i] >= end) {
                end = i
            }
        }
        return end === 0
    }
}
