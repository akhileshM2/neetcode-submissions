class MinStack {
    constructor() {
       this.stack = new Array()
       this.minValue = Infinity
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        if (this.stack.length === 0) {
            this.stack.push(0)
            this.minValue = val
        } else {
            this.stack.push(val - this.minValue)
            if (val < this.minValue) this.minValue = val
        }
    }

    /**
     * @return {void}
     */
    pop() {
        if (this.stack.length === 0) return
        const pop = this.stack.pop()
        if (pop < 0) this.minValue -= pop
    }

    /**
     * @return {number}
     */
    top() {
        const top = this.stack.at(-1)
        return top > 0 ? this.minValue + top : this.minValue
    }

    /**
     * @return {number}
     */
    getMin() {
        return this.minValue
    }
}
