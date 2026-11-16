class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    merge(arr, l, m, r) {
        let left = arr.slice(l, m + 1), right = arr.slice(m + 1, r + 1)
        let i = l, j = 0, k = 0

        while (j < left.length && k < right.length) {
            if (left[j] <= right[k]) {
                arr[i] = left[j++]
            } else {
                arr[i] = right[k++]
            }
            i++
        }

        while (j < left.length) {
            arr[i] = left[j++]
            i++
        }
        while (k < right.length) {
            arr[i] = right[k++]
            i++
        }
    }

    mergeSort = (arr, l, r) => {
        if (l === r) {
            return arr
        }
        let m = Math.floor((l + r) / 2)
        this.mergeSort(arr, l, m)
        this.mergeSort(arr, m + 1, r)
        this.merge(arr, l, m, r)
        return arr
    }

    sortArray(nums) {
        return this.mergeSort(nums, 0, nums.length - 1)
    }
}
