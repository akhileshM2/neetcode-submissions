class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const exists = new Set(nums)
        let result = 0

        for (const n of nums) {
            if (!exists.has(n - 1)) {
                let length = 0
                while (exists.has((n + length))) {
                    length += 1
                }
                result = Math.max(result, length)
            }
        }
        return result
    }
}
