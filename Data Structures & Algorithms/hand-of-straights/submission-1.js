class Solution {
    /**
     * @param {number[]} hand
     * @param {number} groupSize
     * @return {boolean}
     */
    isNStraightHand(hand, groupSize) {
        if (hand.length % groupSize !== 0) return false;
        let count = new Map()
        for (const h of hand) {
            count.set(h, (count.get(h) || 0) + 1)
        }

        for (const n of hand) {
            let start = n
            while (count.get(start - 1) > 0) start--;
            while (start <= n) {
                while (count.get(start) > 0) {
                    for (let i = start; i < start + groupSize; i++) {
                        if (!count.get(i)) return false;
                        count.set(i, count.get(i) - 1)
                    }
                }
                start++
            }
        }
        return true
    }
}
