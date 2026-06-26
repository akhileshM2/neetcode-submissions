class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        let l = 1, r = Math.max(...piles)
        let res = r

        while (l <= r) {
            let m = l + Math.floor((r - l) / 2)
            let count = 0
            let currMin = m
            for (const n of piles) {
                if (n <= m) {
                    count++
                } else if (n > m) {
                    count += Math.ceil(n / m)
                }
            }
            if (count <= h) {
                currMin = Math.min(currMin, m)
                res = Math.min(res, currMin)
                r = m - 1
            } else {
                l = m + 1
            }
        }
        return res
    }
}
