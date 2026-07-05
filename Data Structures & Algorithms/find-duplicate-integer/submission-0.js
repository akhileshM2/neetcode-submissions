class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findDuplicate(nums) {
        let exists = new Set()

        for (let n of nums) {
            if (exists.has(n)) {
                return n
            }
            exists.add(n)
        }
    }
}
