class Solution {
    /**
     * @param {string} word1
     * @param {string} word2
     * @return {string}
     */
    mergeAlternately(word1, word2) {
        let f = 0, s = 0
        let res = ""
        while (f < word1.length && s < word2.length) {
            res += word1[f]
            res += word2[s]
            f++
            s++
        }

        if (f === word1.length && s !== word2.length) {
            res += word2.slice(s, word2.length)
        }
        if (s === word2.length && f !== word1.length) {
            res += word1.slice(f, word1.length)
        }
        return res
    }
}
