class Solution {
    /**
     * @param {string} s
     * @return {string[][]}
     */
    isPal(s, i, j) {
        while (i < j) {
            if (s[i] !== s[j]) {
                return false
            }
            i++
            j--
        }
        return true
    }
    partition(s) {
        let res = []
        let part = []

        const dfs = (i) => {
            if (i >= s.length) {
                res.push([...part])
                return
            }

            for (let j = i; j < s.length; j++) {
                if (this.isPal(s, i, j)) {
                    part.push(s.slice(i, j + 1))
                    dfs(j + 1)
                    part.pop()
                }
            }
        }

        dfs(0)
        return res
    }
}
