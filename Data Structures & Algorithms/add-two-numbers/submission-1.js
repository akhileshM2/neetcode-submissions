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
     * @param {ListNode} l1
     * @param {ListNode} l2
     * @return {ListNode}
     */
    addTwoNumbers(l1, l2) {
        let f = l1
        let s = l2
        let newHead = new ListNode(0)
        let pointer = newHead
        let sum  = 0
        let carry = 0

        while (f !== null || s !== null || carry) {
            if (f !== null && s !== null) sum = f.val + s.val + carry
            else if (f === null && s !== null) sum = s.val + carry
            else if (f !== null && s === null) sum = f.val + carry
            else sum = carry

            pointer.next = new ListNode(sum % 10)
            carry = Math.floor(sum / 10)
            pointer = pointer.next

            if (f !== null) f = f.next
            if (s !== null) s = s.next
        }
        return newHead.next
    }
}
