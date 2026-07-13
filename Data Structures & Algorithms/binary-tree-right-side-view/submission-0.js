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
     * @return {number[]}
     */
    rightSideView(root) {
        let levelNodes = []
        let res = []

        if (!root) {
            return levelNodes
        }

        const q = new Queue()
        q. push(root)
        while (!q.isEmpty()) {
            let level = []
            for (let i = q.size(); i > 0; i--) {
                let node = q.pop()
                if (node !== null) {
                    level.push(node.val)
                    q.push(node.left)
                    q.push(node.right)
                }
            }
            if (level.length > 0) {
                levelNodes.push(level)
            }
        }
        
        for (let i = 0; i < levelNodes.length; i++) {
            res.push(levelNodes[i][levelNodes[i].length - 1])
        }
        return res
    }
}
