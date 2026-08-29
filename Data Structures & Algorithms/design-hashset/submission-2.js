class ListNode {
    constructor(key) {
        this.key = key
        this.next = null
    }
}

class MyHashSet {
    constructor() {
        this.hash = Array.from({ length: 10001 }, () => new ListNode(0))
    }

    /**
     * @param {number} key
     * @return {void}
     */
    add(key) {
        let pos = key % this.hash.length
        let curr = this.hash[pos]

        while (curr.next !== null) {
            if (curr.next.key === key) return
            curr = curr.next
        }
        curr.next = new ListNode(key)
    }

    /**
     * @param {number} key
     * @return {void}
     */
    remove(key) {
        let pos = key % this.hash.length
        let curr = this.hash[pos]

        while (curr.next !== null) {
            if (curr.next.key === key) {
                curr.next = null
                return
            }
            curr = curr.next
        }
    }

    /**
     * @param {number} key
     * @return {boolean}
     */
    contains(key) {
        let pos = key % this.hash.length
        let curr = this.hash[pos]

        while (curr.next !== null) {
            if (curr.next.key === key) {
                return true
            }
            curr = curr.next
        }
        return false
    }
}

/**
 * Your MyHashSet object will be instantiated and called as such:
 * var obj = new MyHashSet()
 * obj.add(key)
 * obj.remove(key)
 * var param_3 = obj.contains(key)
 */
