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
        // if (this.stack.length === 0) {
        //     this.stack.push(0)
        //     this.minValue = val
        // } else {
        //     this.stack.push(val - this.minValue)
        //     if (val < this.minValue) this.minValue = val
        // }
        if (this.stack.length === 0) {
            this.minValue = Infinity 
        }
        this.minValue = Math.min(this.minValue, val)
        this.stack.push([val, this.minValue])
    }

    /**
     * @return {void}
     */
    pop() {
        const top = this.stack.pop()[0]
        if (this.stack.length > 0) this.minValue = this.stack.at(-1)[1]
        else this.minValue = top[1]
    }

    /**
     * @return {number}
     */
    top() {
        return this.stack[this.stack.length - 1][0]
    }

    /**
     * @return {number}
     */
    getMin() {
        return this.stack[this.stack.length - 1][1]
    }
}
