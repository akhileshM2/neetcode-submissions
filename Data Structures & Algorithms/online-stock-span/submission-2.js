class StockSpanner {
    constructor() {
        this.stock = []
        this.min = Infinity
    }

    /**
     * @param {number} price
     * @return {number}
     */
    next(price) {
        let res = 0
        this.stock.push(price)
        if (price >= this.min) {
            let i = this.stock.length - 1
            while (i >= 0 && price >= this.stock[i]) {
                res += 1
                i--
            }
        } else {
            res += 1
        }
        this.min = Math.min(this.min, price)
        return res
    }
}

/**
 * Your StockSpanner object will be instantiated and called as such:
 * var obj = new StockSpanner()
 * var param_1 = obj.next(price)
 */
