class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        let res = Array(temperatures.length).fill(0)
        let stack = []

        for (let i = 0; i < temperatures.length; i++) {
            if (!stack.length) stack.push([temperatures[i], i])
            else {
                while (stack.length && temperatures[i] > stack[stack.length - 1][0]) {
                    let [temp, index] = stack.pop()
                    res[index] = i - index
                }
                stack.push([temperatures[i], i])
            }
        }
        return res
    }
}
