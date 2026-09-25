class Solution {
    /**
     * @param {number[]} asteroids
     * @return {number[]}
     */
    asteroidCollision(asteroids) {
        let stack = []

        for (let a of asteroids) {
            while (stack.length && a < 0 && stack.at(-1) > 0) {
                let diff = a + stack.at(-1)
                if (diff < 0) {
                    stack.pop()
                } else if (diff === 0) {
                    a = 0
                    stack.pop()
                } else {
                    a = 0
                }
            }
            if (a !== 0) {
                stack.push(a)
            }
        }
        return stack
    }
}
