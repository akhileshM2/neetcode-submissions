class Solution {
    /**
     * @param {number[]} arr
     * @param {number} k
     * @param {number} x
     * @return {number[]}
     */
    findClosestElements(arr, k, x) {
        let res = [], diff = [], closest = []
        for (const num of arr) {
            diff.push(Math.abs(num - x))
        }

        for (let i = 0; i < arr.length; i++) {
            closest.push([arr[i], diff[i]])
        }
        closest.sort((a, b) => {
            if (a[1] !== b[1]) {
                return a[1] - b[1]
            }
            return a[0] - b[0]
        })
        
        for (let i = 0; i < k; i++) {
            res.push(closest[i][0])
        }
        res.sort((a, b) => a - b)
        return res
    }
}
