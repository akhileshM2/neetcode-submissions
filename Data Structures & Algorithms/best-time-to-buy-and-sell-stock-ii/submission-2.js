class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let res = 0
        for (let i = 0; i < prices.length; i++) {
            let profit = prices[i] - prices[i - 1]
            if (profit > 0) {
                res += profit
            }
        }
        return res
    }
}
