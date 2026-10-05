class Solution {
    /**
     * @param {number[]} matchsticks
     * @return {boolean}
     */
    makesquare(matchsticks) {
        let sumArr = matchsticks.reduce((num, acc) => num + acc, 0)
        if (sumArr % 4 !== 0) return false;
        let sides = Array(4).fill(0)
        const length = sumArr / 4
        matchsticks.sort((a, b) => b - a)

        const dfs = (i) => {
            if (i === matchsticks.length) {
                return true
            }

            for (let j = 0; j < 4; j++) {
                if (sides[j] + matchsticks[i] <= length) {
                    sides[j] += matchsticks[i]
                    if (dfs(i + 1)) return true
                    sides[j] -= matchsticks[i]
                }
                if (sides[j] === 0) break
            }
            return false
        }
        return dfs(0)
    }
}
