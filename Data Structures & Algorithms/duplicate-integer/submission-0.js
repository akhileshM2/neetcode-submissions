class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const numSet = new Set()
        for (let i = 0; i < nums.length; i++) {
            if (numSet.has(nums[i])) {
                return true
            } 
            else {
                numSet.add(nums[i])
            }
        }
        return false
    }
}
