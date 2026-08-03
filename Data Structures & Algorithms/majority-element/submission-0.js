class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums) {
        let majority = new Map()

        for (const n of nums) {
            majority.set(n, (majority.get(n) || 0) + 1)
        }

        for (const [key, val] of majority) {
            if (val >= Math.floor(nums.length / 2)) {
                return key
            }
        }
    }
}
