class FreqStack {
    constructor() {
        this.count = new Map()
        this.stack = new Map()
        this.maxCnt = 0
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        let currCnt = (this.count.get(val) || 0) + 1
        this.count.set(val, currCnt)

        if (currCnt > this.maxCnt) {
            this.maxCnt = currCnt
            if (!this.stack.has(currCnt)) {
                this.stack.set(currCnt, [])
            }
        }
        this.stack.get(currCnt).push(val)
    }

    /**
     * @return {number}
     */
    pop() {
        let res = this.stack.get(this.maxCnt).pop()
        this.count.set(res, this.count.get(res) - 1)
        if (!this.stack.get(this.maxCnt).length) {
            this.maxCnt--
        }
        return res
    }
}

/**
 * Your FreqStack object will be instantiated and called as such:
 * var obj = new FreqStack()
 * obj.push(val)
 * var param_2 = obj.pop()
 */
