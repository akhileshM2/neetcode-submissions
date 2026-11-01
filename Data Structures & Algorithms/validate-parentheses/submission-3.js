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
                if ((c === ")" && stack.at(-1) === "(") || 
                (c === "]" && stack.at(-1) === "[") || 
                (c === "}" && stack.at(-1) === "{")) stack.pop()
                else return false
            }
            else stack.push(c)
        }
        if (!stack.length) return true
        return false
    }
}
