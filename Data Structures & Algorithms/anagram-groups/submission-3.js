class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const result = new Map()

        for (const s of strs) {
            const chars = Array(26).fill(0)
            const ch = "a"
            for (const c of s) {
                chars[c.charCodeAt(0) - ch.charCodeAt(0)] += 1
            }
            const key = chars.join(",")
            if (!result.has(key)) {
                result.set(key, [])
            }
            result.get(key).push(s)
        }
        return Array.from(result.values())
    }
}
