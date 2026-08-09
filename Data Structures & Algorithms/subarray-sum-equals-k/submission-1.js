class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    subarraySum(nums, k) {
        let res = 0, curr = 0
        let prefixSum = new Map()
        prefixSum.set(0, 1)

        for (const num of nums) {
            curr += num
            let diff = curr - k
            res += prefixSum.get(diff) || 0
            prefixSum.set(curr, (prefixSum.get(curr) || 0) + 1)
        }
        return res
    }
}
