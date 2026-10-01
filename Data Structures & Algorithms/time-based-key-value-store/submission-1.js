class TimeMap {
    constructor() {
        this.timeStore = new Map();
    }

    /**
     * @param {string} key
     * @param {string} value
     * @param {number} timestamp
     * @return {void}
     */
    set(key, value, timestamp) {
        if (!this.timeStore.has(key)) {
            this.timeStore.set(key, [])
        }
        this.timeStore.get(key).push([value, timestamp])
    }

    /**
     * @param {string} key
     * @param {number} timestamp
     * @return {string}
     */
    get(key, timestamp) {
        let res = ""
        let val = this.timeStore.get(key) || []
        let l = 0, r = val.length - 1

        while (l <= r) {
            let m = l + Math.floor((r - l) / 2)
            if (timestamp >= val[m][1]) {
                res = val[m][0]
                l = m + 1
            } else {
                r = m - 1
            }
        }
        return res
    }
}
