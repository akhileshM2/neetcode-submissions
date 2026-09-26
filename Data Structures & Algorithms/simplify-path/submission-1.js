class Solution {
    /**
     * @param {string} path
     * @return {string}
     */
    simplifyPath(path) {
        let paths = path.split("/")
        let stack = []

        for (let s of paths) {
            if (s === "..") {
                if (stack.length) {
                    stack.pop()
                }
            } else if (s !== "" && s !== ".") {
                stack.push(s)
            }
        }
        return "/" + stack.join("/")
    }
}
