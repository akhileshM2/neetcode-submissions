class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    maxSlidingWindow(nums, k) {
        if (k === 1) return nums

        let n = nums.length, r = 0, l = 0
        let q = new Deque()
        let res = new Array(n - k + 1)

        while (r < n) {
            while (q.size() && nums[q.back()] < nums[r]) {
                q.popBack()
            }
            q.pushBack(r)

            if (l > q.front()) {
                q.popFront()
            }

            if (r - l + 1 === k) {
                res[l] = nums[q.front()]
                l++
            }
            r++
        }
        return res
    }
}
