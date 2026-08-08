class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    majorityElement(nums) {
        let count = new Map()
        let res = []
        for (const n of nums) {
            count.set(n, (count.get(n) || 0) + 1)

            if (count.size <= 2) continue
            let newCount = new Map()
            for (const [key, value] of count) {
                if (value > 1) {
                    newCount.set(key, value - 1)
                }
            }
            count = newCount
        }

        for (const n of count.keys()) {
            if (nums.filter(x => x === n).length > Math.floor(nums.length / 3)) {
                res.push(n)
            }
        }
        return res
    }
}
