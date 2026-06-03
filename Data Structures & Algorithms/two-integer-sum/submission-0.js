class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const exists = new Map()
        for (let i = 0; i < nums.length; i++) {
            if (exists.has(target - nums[i])) {
                return [exists.get(target - nums[i]), i]
            }
            else {
                exists.set(nums[i], i)
            }
        }
    }
}
