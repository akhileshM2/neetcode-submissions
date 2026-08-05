class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    sortArray(nums) {
        let heap = new MinPriorityQueue()
        let res = []

        for (const n of nums) {
            heap.enqueue(n)
        }

        while (heap.size() > 0) {
            res.push(heap.dequeue())
        }

        return res
    }
}
