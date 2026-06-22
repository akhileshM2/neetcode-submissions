class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        let stack = []

        for (const c of tokens) {
            if (c === "*" || c === "+" || c === "-" || c === "/") {
                let a = parseInt(stack.pop())
                let b = parseInt(stack.pop())
                if (c === "*") stack.push(a * b)
                else if (c === "/") stack.push(b / a)
                else if (c === "+") stack.push(a + b)
                else if (c === "-") stack.push(b - a)
            } 
            else stack.push(c)
        }
        return parseInt(stack[0])
    }
}
