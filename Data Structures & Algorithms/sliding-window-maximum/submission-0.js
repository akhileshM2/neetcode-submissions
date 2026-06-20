class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    maxSlidingWindow(nums, k) {
        let res = []
        let l = 0, r = k

        while (r <= nums.length) {
            res.push(Math.max(...nums.slice(l, r)))
            l++
            r++
        }
        return res
    }
}
