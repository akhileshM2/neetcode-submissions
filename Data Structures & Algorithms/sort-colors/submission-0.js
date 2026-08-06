class Solution {
    /**
     * @param {number[]} nums
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    sortColors(nums) {
        let count = new Map()
        for (const n of nums) {
            count.set(n, (count.get(n) || 0) + 1)
        }
        let idx = 0
        for (let i = 0; i < 3; i++) {
            while (count.get(i) > 0) {
                nums[idx++] = i
                count.set(i, count.get(i) - 1)
            }
        }
    }
}
