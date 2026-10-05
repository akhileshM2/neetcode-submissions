class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    permuteUnique(nums) {
        let res = []
        let count = new Map()
        let perm = []

        for (let n of nums) {
            count.set(n, (count.get(n) || 0) + 1)
        }

        const dfs = () => {
            if (perm.length === nums.length) {
                res.push([...perm])
                return
            }

            for (const num of count.keys()) {
                if (count.get(num) > 0) {
                    perm.push(num)
                    count.set(num, count.get(num) - 1)
                    dfs()
                    count.set(num, count.get(num) + 1)
                    perm.pop()
                }
            }
        }

        dfs()
        return res
    }
}
