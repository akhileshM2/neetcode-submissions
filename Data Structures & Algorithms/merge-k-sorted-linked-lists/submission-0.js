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
     * @param {ListNode[]} lists
     * @return {ListNode}
     */
    mergeLists(l1, l2) {
        let newHead = new ListNode()
        let curr = newHead

        while (l1 && l2) {
            if (l1.val < l2.val) {
                curr.next = l1
                l1 = l1.next
            } else {
                curr.next = l2
                l2 = l2.next
            }
            curr = curr.next
        }
        if (l1) {
            curr.next = l1
        } 
        if (l2) {
            curr.next = l2
        }
        return newHead.next
    }

    mergeKLists(lists) {
        if (lists.length === 0) {
            return null
        }

        for (let i = 1; i < lists.length; i++) {
            lists[i] = this.mergeLists(lists[i - 1], lists[i])
        }
        return lists[lists.length - 1]
    }
}
