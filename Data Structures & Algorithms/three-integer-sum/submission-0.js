class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        const result = []
        const count = new Map()
        nums.sort((a, b) => a - b)

        for (const num of nums) {
            count.set(num, (count.get(num) || 0) + 1)
        }

        for (let i = 0; i < nums.length; i++) {
            count.set(nums[i], count.get(nums[i]) - 1)
            if (i > 0 && nums[i] === nums[i - 1]) {
                continue
            }
            
            for (let j = i + 1; j < nums.length; j++) {
                count.set(nums[j], count.get(nums[j]) - 1)
                if (j > i + 1 && nums[j] === nums[j - 1]) {
                    continue
                }
                
                let target = (nums[i] + nums[j]) * (-1)
                if (count.get(target) > 0) {
                    result.push([nums[i], target, nums[j]])
                }
            }

            for (let j = i + 1; j < nums.length; j++) {
                count.set(nums[j], count.get(nums[j]) + 1)
            }
        }
        return result
    }
}
