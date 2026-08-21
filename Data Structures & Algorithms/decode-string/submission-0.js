class Solution {
    /**
     * @param {string} s
     * @return {string}
     */
    decodeString(s) {
        let open = 0, close = 0, stack = [], res = ""

        for (let i = 0; i < s.length; i++) {
            if (s[i] !== "]") {
                stack.push(s[i])
            } else {
                let temp = ""
                while (stack.at(-1) !== "[") {
                    if (stack.at(-1) !== "[") {
                        temp = stack.pop() + temp
                    }
                }
                stack.pop()
                let k = ""
                while (stack.length && !isNaN(stack.at(-1))) {
                    k = stack.pop() + k
                }
                stack.push(temp.repeat(parseInt(k, 10)))
            }
        }
        return stack.join("")
    }
}
