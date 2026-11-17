class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let encode = ""
        for (let i = 0; i < strs.length; i++) {
            encode += JSON.stringify(strs[i].length) + "#" + strs[i]
        }
        return encode
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let res = [], i = 0
        while (i < str.length) {
            let j = i
            while (str[j] !== "#") {
                j++
            }
            let size = parseInt(str.slice(i, j))
            res.push(str.slice(j + 1, j + 1 + size))
            i = j + 1 + size
        }
        return res
    }
}
