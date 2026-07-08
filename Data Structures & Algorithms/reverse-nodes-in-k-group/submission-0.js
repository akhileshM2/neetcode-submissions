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
     * @param {number} k
     * @return {ListNode}
     */
    reverseList(head, n) {
        let prev = null
        let curr = head

        while (n) {
            let temp = curr.next
            curr.next = prev
            prev = curr
            curr = temp
            n--
        }
        return [curr, prev]
    }

    reverseKGroup(head, k) {
        let n = 0
        let t = head
        while (t !== null) {
            n++
            t = t.next
        }

        let curr = head
        let dummy = new ListNode(0, head)
        let groupPrev = dummy
        let count = Math.floor(n / k)
        while (count) {
            let groupTail = curr
            let [nextGroupHead, groupHead] = this.reverseList(curr, k)
            groupPrev.next = groupHead
            groupTail.next = nextGroupHead
            groupPrev = groupTail
            curr = nextGroupHead
            count--
        }
        return dummy.next
    }
}
