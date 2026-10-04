class Solution {
    /**
     * @param {number} n
     * @param {number} k
     * @return {number[][]}
     */
    combine(n, k) {
        let res = []
        const dfs = (N, comb) => {
            if (N > n) {
                if (comb.length === k) {
                    res.push([...comb])
                }
                return
            }

            comb.push(N)
            dfs(N + 1, comb)
            comb.pop()
            dfs(N + 1, comb)
        }
        dfs(1, [])
        return res
    }
}
