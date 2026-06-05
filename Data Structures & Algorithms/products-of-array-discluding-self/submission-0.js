class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let prefix = 1, postfix = 1
        const result = Array.from({length: nums.length}, () => 1)

        for (let i = 0; i < nums.length; i++) {
            result[i] *= prefix
            prefix *= nums[i]
        }
        
        for (let i = nums.length - 1; i >= 0; i--) {
            result[i] *= postfix
            postfix *= nums[i]
        }
        return result
    }
}
