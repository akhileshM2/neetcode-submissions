class Solution {
    /**
     * @param {number[][]} trips
     * @param {number} capacity
     * @return {boolean}
     */
    carPooling(trips, capacity) {
        trips.sort((a, b) => a[1] - b[1])
        const minHeap = new MinPriorityQueue((x) => x[0])
        let curPass = 0

        for (const [numPass, start, end] of trips) {
            while (!minHeap.isEmpty() && minHeap.front()[0] <= start) {
                curPass -= minHeap.dequeue()[1]
            }
            curPass += numPass
            if (curPass > capacity) return false
            minHeap.enqueue([end, numPass])
        }
        return true
    }
}
