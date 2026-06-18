class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        let count = {}

        for (let i = 0; i < s1.length; i++) {
            count[s1[i]] = (count[s1[i]] || 0) + 1
        }

        let countKeys = Object.keys(count).length
        for (let i = 0; i < s2.length; i++) {
            let curr = 0
            let tempCount = {}
            for (let j = i; j < s2.length; j++) {
                tempCount[s2[j]] = (tempCount[s2[j]] || 0) + 1

                if ((count[s2[j]] || 0) < tempCount[s2[j]]) break
                if ((count[s2[j]]) === tempCount[s2[j]]) curr++
                if (curr === countKeys) return true
            }
        }
        return false
    }
}
