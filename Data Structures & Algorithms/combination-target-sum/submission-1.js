class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */
    combinationSum(nums, target) {
        let res = []
        function dfs(i, comb, sum) {
            if (sum === target) {
                res.push([...comb])
                return
            }

            if (i >= nums.length || sum > target) {
                return
            }

            if (sum < target) {
                comb.push(nums[i])
                sum += nums[i]
            }

            dfs(i, comb, sum)
            comb.pop()
            sum -= nums[i]
            dfs(i + 1, comb, sum)
        }

        dfs(0, [], 0)
        return res
    }
}
