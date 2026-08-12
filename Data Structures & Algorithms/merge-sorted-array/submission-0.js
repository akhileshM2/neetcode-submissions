class Solution {
    /**
     * @param {number[]} nums1
     * @param {number} m
     * @param {number[]} nums2
     * @param {number} n
     * @return {void} Do not return anything, modify nums1 in-place instead.
     */
    merge(nums1, m, nums2, n) {
        let j = nums2.length - 1
        for (let i = m + n - 1; i > m - 1; i--) {
            nums1[i] = nums2[j]
            j--
        }
        nums1.sort((a, b) => a - b)
    }
}
