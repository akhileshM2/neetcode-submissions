class Solution {
    /**
     * @param {string} digits
     * @return {string[]}
     */
    letterCombinations(digits) {
        let res = []
        
        if (digits.length === 0) {
            return res
        }

        const chars = {
            2: "abc",
            3: "def",
            4: "ghi",
            5: "jkl",
            6: "mno",
            7: "pqrs",
            8: "tuv",
            9: "wxyz"
        }

        const dfs = (s, i) => {
            if (s.length === digits.length) {
                res.push(s.join(""))
                return
            }
            
            for (const c of chars[digits[i]]) {
                s.push(c)
                dfs(s, i + 1)
                s.pop()
            }
        }

        dfs([], 0)
        return res
    }
}
