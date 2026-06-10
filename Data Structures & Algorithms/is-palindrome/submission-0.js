class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let left = 0, right = s.length - 1

        while (left <= right) {
            if (!this.isAlphaNumeric(s[left])) {
                left++
            }
            else if (!this.isAlphaNumeric(s[right])) {
                right--
            }
            else if (s[left].toLowerCase() !== s[right].toLowerCase()) {
                return false
            }
            else {
                left++
                right--
            }
        }
        return true
    }

    isAlphaNumeric(c) {
        return (
            (c >= "a" && c <= "z") || (c >= "A" && c <= "Z") || (c >= "0" && c <= "9")
        )
    }
}
