class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let l = 0, r = s.length - 1

        while (l < r) {
            if (!this.isAlphaNumeric(s[l])) {
                l++
            } else if (!this.isAlphaNumeric(s[r])) {
                r--
            } else if (s[l].toLowerCase() !== s[r].toLowerCase()) {
                return false
            } else {
                l++
                r--
            }
        }
        return true
    }

    isAlphaNumeric(c) {
        return ((c >= "a" && c <= "z") || (c >= "A" && c <= "Z") || (c >= "0" && c <= "9"))
    }
}
