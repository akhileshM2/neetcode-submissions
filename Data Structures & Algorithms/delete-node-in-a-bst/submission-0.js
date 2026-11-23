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
     * @param {TreeNode} root
     * @param {number} key
     * @return {TreeNode}
     */
    deleteNode(root, key) {
        if (!root) {
            return root
        }

        if (key > root.val) {
            root.right = this.deleteNode(root.right, key)
        } else if (key < root.val) {
            root.left = this.deleteNode(root.left, key)
        } else {
            if (!root.right) return root.left
            if (!root.left) return root.right

            let curr = root.right
            while (curr.left) {
                curr = curr.left
            }
            curr.left = root.left
            let res = root.right
            root = null
            return res
        }
        return root
    }
}
