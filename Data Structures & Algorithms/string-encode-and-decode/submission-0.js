class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let res = ""
        for (const s of strs) {
            res += JSON.stringify(s.length) + "#" + s
        }
        return res
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let res = []
        let i = 0
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
