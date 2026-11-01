class Solution {
    /**
     * @param {string[]} operations
     * @return {number}
     */
    calPoints(operations) {
        let stack = []

        for (let i = 0; i < operations.length; i++) {
            if (operations[i] === "+") {
                let sum = stack.at(-1) + stack.at(-2)
                stack.push(sum)
            } else if (operations[i] === "D") {
                let top = stack.at(-1)
                stack.push(top * 2)
            } else if (operations[i] === "C") {
                stack.pop()
            } else {
                stack.push(parseInt(operations[i]))
            }
        }
        return stack.reduce((sum, num) => sum + num, 0)
    }
}
