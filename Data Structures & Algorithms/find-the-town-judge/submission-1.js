class Solution {
    /**
     * @param {number} n
     * @param {number[][]} trust
     * @return {number}
     */
    findJudge(n, trust) {
        let trustFactor = new Array(n + 1).fill(0)
        
        for (const [ai, bi] of trust) {
            trustFactor[ai]--
            trustFactor[bi]++
        }

        for (let i = 1; i <= n; i++) {
            if (trustFactor[i] === n - 1) {
                return i
            }
        }
        return -1
    }
}
