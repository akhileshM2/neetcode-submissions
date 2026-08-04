class ListNode {
    constructor(key = -1, value = -1, next = null) {
        this.key = key
        this.value = value
        this.next = next
    }
}

class MyHashMap {
    constructor() {
        this.hash = Array.from({ length: 1000 }, () => new ListNode())
    }

    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    put(key, value) {
        let pos = key % this.hash.length
        let curr = this.hash[pos]

        while (curr.next) {
            if (curr.next.key === key) {
                curr.next.value = value
                return
            }
            curr = curr.next
        }
        curr.next = new ListNode(key, value)
    }

    /**
     * @param {number} key
     * @return {number}
     */
    get(key) {
        let pos = key % this.hash.length
        let curr = this.hash[pos]

        while (curr.next) {
            if (curr.next.key === key) {
                return curr.next.value
            }
            curr = curr.next
        }
        return -1
    }

    /**
     * @param {number} key
     * @return {void}
     */
    remove(key) {
        let pos = key % this.hash.length
        let curr = this.hash[pos]

        while (curr.next) {
            if (curr.next.key === key) {
                curr.next = curr.next.next
                return
            }
            curr = curr.next
        }
    }
}

/**
 * Your MyHashMap object will be instantiated and called as such:
 * var obj = new MyHashMap()
 * obj.put(key,value)
 * var param_2 = obj.get(key)
 * obj.remove(key)
 */
