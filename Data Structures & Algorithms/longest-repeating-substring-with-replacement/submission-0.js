class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let count = new Map()
        let res = 0
        let l = 0

        for (let r = 0; r < s.length; r++) {
            if (!count.has(s[r])) {
                count.set(s[r], 1)
            } else {
                count.set(s[r], 1 + count.get(s[r]))
            }

            while ((r - l + 1) - Math.max(...Array.from(count.values())) > k) {
                count.set(s[l], count.get(s[l]) - 1)
                l++
            }

            res = Math.max(res, r - l + 1)
        }
        return res
    }
}
