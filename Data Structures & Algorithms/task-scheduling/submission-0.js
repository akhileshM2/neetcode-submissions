class Solution {
    /**
     * @param {character[]} tasks
     * @param {number} n
     * @return {number}
     */
    leastInterval(tasks, n) {
        const count = new Map()

        for (const task of tasks) {
            if (task)
            count.set(task, 1 + (count.get(task) || 0))
        }
        
        let maxHeap = new MaxPriorityQueue()

        for (let val of [...count.values()]) {
            maxHeap.enqueue(val)
        }

        let time = 0
        let q = new Queue()

        while (maxHeap.size() > 0 || q.size() > 0) {
            time++

            if (maxHeap.size() > 0) {
                let cnt = maxHeap.dequeue() - 1
                if (cnt !== 0) {
                    q.push([cnt, time + n])
                }
            }
            if (q.size() > 0 && q.front()[1] === time) {
                maxHeap.enqueue(q.pop()[0])
            }
        }
        return time
    }
}
