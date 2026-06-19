class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        let countT = {}, countS = {}
        for (const c of t) {
            countT[c] = (countT[c] || 0) + 1
        }

        let windowSize = s.length + 1
        let res = [-1, -1]
        let l = 0
        let have = 0, need = Object.keys(countT).length

        for (let r = 0; r < s.length; r++) {
            let c = s[r]
            countS[s[r]] = (countS[s[r]] || 0) + 1

            if (c in countT && countS[c] === countT[c]) {
                have++
            }

            while (have === need) {
                if (r - l + 1 < windowSize) {
                    windowSize = r - l + 1
                    res = [l, r]
                }

                countS[s[l]]--
                if (s[l] in countT && countS[s[l]] < countT[s[l]]) {
                    have--
                }
                l++
            }
        }
        return s.slice(res[0], res[1] + 1)
    }
}
