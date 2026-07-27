class Solution {
    /**
     * @param {number} n
     * @return {string[]}
     */
    generateParenthesis(n) {
        let stack = []
        let res = []
        
        function dfs(openN, closedN) {
            if ((openN === closedN) && (closedN === n)) {
                res.push(stack.join(""))
                return
            }

            if (openN < n){
                stack.push("(")
                dfs(openN + 1, closedN)
                stack.pop()
            }
            if (closedN < openN) {
                stack.push(")")
                dfs(openN, closedN + 1)
                stack.pop()
            }
        }

        dfs(0, 0)
        return res
    }
}
