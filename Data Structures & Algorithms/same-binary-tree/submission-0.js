/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} p
     * @param {TreeNode} q
     * @return {boolean}
     */
    balanced(p, q) {
        if (!p && !q) {
            return true
        }

        if (p && q && p.val === q.val) {
            return (this.balanced(p.left, q.left) && this.balanced(p.right, q.right))
        } else {
            return false
        }
    }
    isSameTree(p, q) {
        return this.balanced(p, q)
    }
}
