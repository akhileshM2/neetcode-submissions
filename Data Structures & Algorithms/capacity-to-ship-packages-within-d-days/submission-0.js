class Solution {
    /**
     * @param {number[]} weights
     * @param {number} days
     * @return {number}
     */
    shipWithinDays(weights, days) {
        let l = Math.max(...weights), r = weights.reduce((sum, num) => sum + num, 0)
        let res = r

        const canShip = (cap) => {
            let ships = 1, currCap = cap
            for (const w of weights) {
                if (currCap - w < 0) {
                    ships++
                    if (ships > days) return false
                    currCap = cap
                }
                currCap -= w
            }
            return true
        }

        while (l <= r) {
            let m = Math.floor((l + r) / 2)
            if (canShip(m)) {
                res = Math.min(res, m)
                r = m - 1
            } else {
                l = m + 1
            }
        }
        return res
    }
}
