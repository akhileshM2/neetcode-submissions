class Solution {
    /**
     * @param {number[]} nums
     * @param {number} val
     * @return {number}
     */
    removeElement(nums, val) {
        let i = 0, k = nums.length
        while (i < k) {
            if (nums[i] === val) {
                nums[i] = nums[--k]
            } else {
                i++
            }
        }
        return k
    }
}
