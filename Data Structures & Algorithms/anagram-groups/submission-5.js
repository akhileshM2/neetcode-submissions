class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let result = new Map()

        for (const s of strs) {
            let chars = Array(26).fill(0)
            for (const c of s) {
                chars[c.charCodeAt(0) - "a".charCodeAt(0)] += 1
            }
            let key = chars.join(",")
            if (!result.has(key)) {
                result.set(key, [])
            }
            result.get(key).push(s)
        }
        return Array.from(result.values())
    }
}
