class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    majorityElement(nums) {
        let count = new Map()
        let res = []
        for (const n of nums) {
            count.set(n, (count.get(n) || 0) + 1)
        }

        for (const [key, value] of count) {
            if (value > Math.floor(nums.length / 3)) {
                res.push(key)
            }
        }
        return res
    }
}
