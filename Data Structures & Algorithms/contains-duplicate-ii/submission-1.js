class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {boolean}
     */
    containsNearbyDuplicate(nums, k) {
        let count = new Map()
        for (let i = 0; i < nums.length; i++) {
            if (count.has(nums[i]) && (Math.abs(i - count.get(nums[i])) <= k)) {
                return true
            }
            count.set(nums[i], i)
        }
        return false
    }
}
