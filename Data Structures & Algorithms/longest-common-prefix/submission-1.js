class Solution {
    /**
     * @param {string[]} strs
     * @return {string}
     */
    longestCommonPrefix(strs) {
        let str = strs[0]
        let temp = ""
        let res = ""
        for (const c of str) {
            temp += c
            for (let i = 1; i < strs.length; i++) {
                if (!strs[i].startsWith(temp)) {
                    return res
                }
            }
            res = temp
        }
        return res
    }
}
