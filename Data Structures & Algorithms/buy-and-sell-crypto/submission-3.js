class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let leftMin = prices[0]
        let res = 0

        for (let i = 0; i < prices.length; i++) {
            if (prices[i] > leftMin) {
                res = Math.max(res, prices[i] - leftMin)
            }
            leftMin = Math.min(leftMin, prices[i])
        }
        return res
    }
}
