class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    splitArray(nums, k) {
        let l = Math.max(...nums)
        let r = nums.reduce((a, b) => a + b, 0)
        let res = r

        const canSplit = (largest) => {
            let subarray = 0
            let currSum = 0
            for (const n of nums) {
                currSum += n
                if (currSum > largest) {
                    subarray += 1
                    currSum = n
                }
            }
            return subarray + 1 <= k
        }

        while (l <= r) {
            const mid = Math.floor(l + (r - l) / 2)
            if (canSplit(mid)) {
                res = mid
                r = mid - 1
            } else {
                l = mid + 1
            }
        }
        return res
    }
}
