class Solution {
    /**
     * @param {number[][]} points
     * @param {number} k
     * @return {number[][]}
     */
    kClosest(points, k) {
        let minHeap = new MinPriorityQueue((point) => point[0])
        let res = []

        for (const nums of points) {
            minHeap.enqueue([nums[0] ** 2 + nums[1] ** 2, nums[0], nums[1]])
        }

        for (let i = 0; i < k; i++) {
            let [_, x, y] = minHeap.dequeue()
            res.push([x, y])
        }
        return res
    }
}
