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
     * @param {number} left
     * @param {number} right
     * @return {ListNode}
     */
    reverseBetween(head, left, right) {
        if (left === right) return head

        let prev = null
        let tempPrev = null
        let curr = head
        let pl = 1, pr = left - 1
        let t = head

        while (pl < left) {
            prev = curr
            curr = curr.next
            pl++
            t = prev.next
        }

        while (curr && pr < right) {
            let temp = curr.next
            curr.next = tempPrev
            tempPrev = curr
            curr = temp
            pr++
        }

        if (left !== 1) {
            prev.next = tempPrev
            t.next = curr
            return head
        }
        t.next = curr
        return tempPrev
    }
}
