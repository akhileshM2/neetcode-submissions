class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let leftMin = prices[0]
        let result = 0

        for (let i = 1; i < prices.length; i++) {
            if (prices[i] > leftMin) {
                result = Math.max(result, prices[i] - leftMin)
            }
            leftMin = Math.min(leftMin, prices[i])
        }

        return result
    }
}
