class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        if (s.length === 1) return 1
        let uniqueElements = new Set()
        let result = 0
        let left = 0, right = 0

        while (right < s.length) {
            if (!uniqueElements.has(s[right])) {
                uniqueElements.add(s[right])
            } else {
                while (uniqueElements.has(s[right])) {
                    uniqueElements.delete(s[left])
                    left++
                }
                uniqueElements.add(s[right])
            }
            right++
            result = Math.max(result, right - left)
        }
        return result
    }
}
