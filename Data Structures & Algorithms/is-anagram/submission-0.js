class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        const s1 = s.split("")
        const t1 = t.split("")
        return s1.sort().join("") === t1.sort().join("")
    }
}
