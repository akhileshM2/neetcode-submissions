class Solution {
    /**
     * @param {number[]} arr
     * @param {number} k
     * @param {number} x
     * @return {number[]}
     */
    findClosestElements(arr, k, x) {
        const diff = new PriorityQueue((x, y) => {
            if (x[1] !== y[1]) {
                return x[1] - y[1]
            }
            return x[0] - y[0]
        })
        let res = []
        for (const num of arr) {
            diff.enqueue([num, Math.abs(num - x)])
        }

        for (let i = 0; i < k; i++) {
            res.push(diff.dequeue()[0])
        }
        return res.sort((a, b) => a - b)
    }
}
