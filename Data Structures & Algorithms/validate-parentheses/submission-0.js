class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        let stack = []
        let close = ")}]"

        for (const c of s) {
            if (stack.length && close.includes(c)) {
                console.log(stack.at(-1))
                if (c === ")" && stack.at(-1) === "(") stack.pop()
                else if (c === "]" && stack.at(-1) === "[") stack.pop()
                else if (c === "}" && stack.at(-1) === "{") stack.pop()
                else return false
            }
            else stack.push(c)
        }
        if (!stack.length) return true
        return false
    }
}
