class Solution {
    /**
     * @param {number[]} people
     * @param {number} limit
     * @return {number}
     */
    numRescueBoats(people, limit) {
        people.sort((a, b) => a - b)
        let l = 0, r = people.length - 1, res = 0

        while (l <= r) {
            let remain = limit - people[r]
            r--
            res++
            if (l <= r && remain >= people[l]) {
                l++
            }
        }
        return res
    }
}
