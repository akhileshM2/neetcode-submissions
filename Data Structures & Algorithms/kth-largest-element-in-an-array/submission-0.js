class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    findKthLargest(nums, k) {
        let maxHeap = new MaxPriorityQueue()
        let res = 0

        for (const n of nums) {
            maxHeap.enqueue(n)
        }

        for (let i = 0; i < k; i++) {
            res = maxHeap.dequeue()
        }
        return res
    }
}
