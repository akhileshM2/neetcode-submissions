class Solution {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number}
     */
    findMedianSortedArrays(nums1, nums2) {
        let A = nums1, B = nums2
        let total = nums1.length + nums2.length
        let half = Math.floor((total + 1) / 2)

        if (B.length < A.length) {
            [A, B] = [B, A]
        }

        let l = 0, r = A.length - 1
        while (true) {
            let mA = l + Math.floor((r - l) / 2)
            let mB = half - mA - 2
            let Aleft = mA >= 0 ? A[mA] : -Infinity
            let Aright = (mA + 1) < A.length ? A[mA + 1] : Infinity
            let Bleft = mB >= 0 ? B[mB] : -Infinity
            let Bright = (mB + 1) < B.length ? B[mB + 1] : Infinity

            if (Aleft <= Bright && Bleft <= Aright) {
                if (total % 2) {
                    return Math.max(Aleft, Bleft)
                }
                return (Math.max(Aleft, Bleft) + Math.min(Aright, Bright)) / 2
            } else if (Aleft > Bright) {
                r = mA - 1
            } else {
                l = mA + 1
            }
        }
    }
}
