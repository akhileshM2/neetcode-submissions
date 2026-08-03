class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums) {
        let res = 0, count = 0

        for (let n of nums) {
            if (count === 0) {
                res = n
            }
            count += n === res ? 1 : -1
        }
        return res
    }
}
