class MedianFinder {
    constructor() {
        this.small = new MaxPriorityQueue()
        this.large = new MinPriorityQueue()
    }

    /**
     *
     * @param {number} num
     * @return {void}
     */
    addNum(num) {
        if (this.small.isEmpty() || num < this.small.front()) {
            this.small.enqueue(num)
        } else {
            this.large.enqueue(num)
        }

        if (this.small.size() > this.large.size() + 1) {
            this.large.enqueue(this.small.dequeue())
        } else if (this.large.size() > this.small.size() + 1) {
            this.small.enqueue(this.large.dequeue())
        }
    }

    /**
     * @return {number}
     */
    findMedian() {
        if (this.small.size() > this.large.size()) {
            return this.small.front()
        } else if (this.large.size() > this.small.size()) {
            return this.large.front()
        } else {
            return (this.small.front() + this.large.front()) / 2.0
        }
    }
}
