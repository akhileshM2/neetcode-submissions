class Solution {
    /**
     * @param {number[]} candidates
     * @param {number} target
     * @return {number[][]}
     */
    combinationSum2(candidates, target) {
        let res = []
        let count = new Map()
        let A = []

        for (const num of candidates) {
            if (!count.has(num)) {
                A.push(num);
            }
            count.set(num, (count.get(num) || 0) + 1)
        }

        function dfs(i, comb, sum) {
            if (sum === 0) {
                res.push([...comb])
                return
            }

            if (i >= A.length || sum < 0) {
                return
            }

            if (count.get(A[i]) > 0) {
                comb.push(A[i])
                count.set(A[i], count.get(A[i]) - 1)
                dfs(i, comb, sum - A[i])
                count.set(A[i], count.get(A[i]) + 1)
                comb.pop()
            }

            dfs(i + 1, comb, sum)
        }

        dfs(0, [], target)
        return res
    }
}
