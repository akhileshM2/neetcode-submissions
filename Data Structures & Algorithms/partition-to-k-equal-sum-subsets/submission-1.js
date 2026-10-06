class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {boolean}
     */
    canPartitionKSubsets(nums, k) {
        let sumArr = nums.reduce((num, acc) => num + acc, 0)
        if (sumArr % k !== 0) return false
        let total = sumArr / k
        let used = Array(nums.length).fill(false)
        
        const dfs = (i, k, sum) => {
            if (sum === total) {
                return dfs(0, k - 1, 0)
            }
            if (k === 0) return true

            for (let j = i; j < nums.length; j++) {
                if (used[j] || nums[j] + sum > total) continue;
                used[j] = true
                if (dfs(j + 1, k, sum + nums[j])) return true;
                used[j] = false
                if (sum === 0) return false;
            }
            return false
        }
        return dfs(0, k, 0)
    }
}
