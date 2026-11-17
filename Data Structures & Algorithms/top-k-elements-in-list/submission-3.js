class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let count = new Map()
        let freq = Array.from({length: nums.length + 1}, () => [])

        for (const n of nums) {
            count.set(n, (count.get(n) || 0) + 1)
        }

        for (const [key, value] of count) {
            freq[value].push(key)
        }

        let result = []
        let i = freq.length - 1
        while (result.length < k) {
            if (freq[i].length > 0) {
                result.push(...freq[i])
            }
            i--
        }
        return result
    }
}
