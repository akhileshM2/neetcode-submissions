class StockSpanner {
    constructor() {
        this.stock = []
    }

    /**
     * @param {number} price
     * @return {number}
     */
    next(price) {
        let span = 1
        while (this.stock.length && this.stock.at(-1)[0] <= price) {
            span += this.stock.pop()[1]
        }
        this.stock.push([price, span])
        return span
    }
}

/**
 * Your StockSpanner object will be instantiated and called as such:
 * var obj = new StockSpanner()
 * var param_1 = obj.next(price)
 */
