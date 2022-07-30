// Leetcode 88: Merge Sorted Array
var merge = function (nums1, m, nums2, n) {
  let first = m - 1;
  let second = n - 1;
  let last = m + n - 1;
  while (first >= 0 && second >= 0) {
    if (first < 0 || second < 0) {
      break;
    }
    if (nums1[first] > nums2[second]) {
      nums1[last] = nums1[first];
      first--;
    } else {
      nums1[last] = nums2[second];
      second--;
    }
    last--;
  }

  while (first >= 0) {
    nums1[last] = nums1[first];
    first--;
    last--;
  }

  while (second >= 0) {
    nums1[last] = nums2[second];
    second--;
    last--;
  }
};

let nums1 = [1, 2, 3, 0, 0, 0];
let nums2 = [2, 5, 6];
let m = 3;
let n = 3;

console.log("Nums1 is", nums1);
console.log("Nums2 is", nums2)
merge(nums1, m, nums2, n);
console.log("Merged array is", nums1);
