class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        let countT = {}
        for (const c of t) {
            countT[c] = (countT[c] || 0) + 1
        }

        let windowSize = s.length + 1
        let res = ""
        for (let i = 0; i < s.length; i++) {
            let countS = {}
            for (let j = i; j < s.length; j++) {
                countS[s[j]] = (countS[s[j]] || 0) + 1
                let flag = true

                for (const c in countT) {
                    if ((countS[c] || 0) < countT[c]) {
                        flag = false
                        break
                    }
                }

                if (flag && j - i + 1 < windowSize) {
                    windowSize = j - i + 1
                    res = s.slice(i, j + 1)
                }
            }
        }
        return res
    }
}
