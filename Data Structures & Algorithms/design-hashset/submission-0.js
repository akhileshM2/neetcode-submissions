class ListNode {
    constructor(key) {
        this.key = key
        this.next = null
    }
}

class MyHashSet {
    constructor() {
        this.hash = Array.from({ length: 10000 }, () => new ListNode(0))
    }

    /**
     * @param {number} key
     * @return {void}
     */
    add(key) {
        let index = key % this.hash.length
        let curr = this.hash[index]

        while (curr.next) {
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
        let index = key % this.hash.length
        let curr = this.hash[index]

        while (curr.next) {
            if (curr.next.key === key) {
                let temp = curr.next
                curr.next = temp.next
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
        let index = key % this.hash.length
        let curr = this.hash[index]

        while (curr.next) {
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
