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
     * @param {ListNode} list1
     * @param {ListNode} list2
     * @return {ListNode}
     */
    mergeTwoLists(list1, list2) {
        let h1 = list1, h2 = list2
        let newHead = {
            val: 0,
            next: null
        }
        let curr = newHead

        while (h1 && h2) {
            if (h1.val < h2.val) {
                curr.next = h1
                h1 = h1.next
            } else {
                curr.next = h2
                h2 = h2.next
            }
            curr = curr.next
        }
        if (h1) {
            curr.next = h1
        } else {
            curr.next = h2
        }
        return newHead.next
    }
}
