class LRUCache {
    /**
     * @param {number} capacity
     */
    constructor(capacity) {
        this.capacity = capacity
        this.lru = new Map()
    }

    /**
     * @param {number} key
     * @return {number}
     */
    get(key) {
        if (this.lru.has(key)) {
            const value = this.lru.get(key)
            this.lru.delete(key)
            this.lru.set(key, value)
            return value
        }
        return -1
    }

    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    put(key, value) {
        if (this.lru.has(key)) this.lru.delete(key)
        else if (this.lru.size === this.capacity) {
            const firstKey = this.lru.keys().next().value
            this.lru.delete(firstKey)
        }
        this.lru.set(key, value)
    }
}
