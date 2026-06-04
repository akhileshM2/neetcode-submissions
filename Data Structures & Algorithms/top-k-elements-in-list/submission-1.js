class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const count = new Map()
        const freq = Array.from({length: nums.length + 1}, () => [])
        console.log(freq)

        for (let n of nums) {
            if (!count.has(n)) {
                count.set(n, 1)
            }
            else {
                count.set(n, count.get(n) + 1)
            }
        }

        for (const [key, value] of count) {
            freq[value].push(key)
        }

        let result = []
        let i = freq.length - 1
        while (result.length < k) {
            if (freq[i]) {
                result.push(...freq[i])
            }
            i--
        }
        return result
    }
}
