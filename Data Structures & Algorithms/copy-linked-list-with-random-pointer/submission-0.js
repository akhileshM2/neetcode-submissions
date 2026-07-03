// class Node {
//   constructor(val, next = null, random = null) {
//       this.val = val;
//       this.next = next;
//       this.random = random;
//   }
// }

class Solution {
    /**
     * @param {Node} head
     * @return {Node}
     */
    copyRandomList(head) {
        let oldCopy = new Map()
        oldCopy.set(null, null)
        let curr = head

        while (curr !== null) {
            let copy = new Node(curr.val)
            oldCopy.set(curr, copy)
            curr = curr.next
        }

        curr = head
        while (curr !== null) {
            let copy = oldCopy.get(curr)
            copy.next = oldCopy.get(curr.next)
            copy.random = oldCopy.get(curr.random)
            curr = curr.next
        }
        return oldCopy.get(head)
    }
}
