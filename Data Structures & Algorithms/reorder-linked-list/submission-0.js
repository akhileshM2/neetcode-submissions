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
     * @return {void}
     */
    reorderList(head) {
        let slow = head
        let first = head
        let fast = head.next

        while (fast !== null && fast.next !== null) {
            slow = slow.next
            fast = fast.next.next
        }

        let second = slow.next
        let curr = second
        let prev = (slow.next = null)

        while (curr) {
            let temp = curr.next
            curr.next = prev
            prev = curr
            curr = temp
        }

        while (prev !== null) {
            let temp = first.next
            first.next = prev
            let temp2 = prev.next
            prev.next = temp
            first = temp
            prev = temp2
        }
    }
}
