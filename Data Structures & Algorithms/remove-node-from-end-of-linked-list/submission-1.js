/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @param {number} n
     * @return {ListNode}
     */
    removeNthFromEnd(head, n) {
        let prev = null
        let curr = head
        let totalNodes = 0

        while (curr !== null) {
            totalNodes++
            curr = curr.next
        }

        if (n === 1 && totalNodes === 1) {
            head = null
            return head
        }

        curr = head
        let i = totalNodes - n
        while (i) {
            prev = curr
            curr = curr.next
            i--
        }
        if (prev !== null && curr !== null) prev.next = curr.next
        else {
            head = head.next
            curr.next = null
        }
        return head
    }
}
