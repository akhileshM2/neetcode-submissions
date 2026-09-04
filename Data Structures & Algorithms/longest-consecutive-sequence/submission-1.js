class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let result = 0
        let exists = new Set(nums)

        for (const n of nums) {
            if (!exists.has(n - 1)) {
                let length = 0
                while (exists.has(n + length)) {
                    length++
                }
                result = Math.max(result, length)
            }
        }
        return result
    }
}
