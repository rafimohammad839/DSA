//Leetcode 4: Median of Two Sorted Arrays
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  let totalLen = nums1.length + nums2.length;
  let joinedArr = new Array(totalLen).fill(0);
  let i = 0;
  let j = 0;
  let k = 0;
  while (i < nums1.length && j < nums2.length) {
    if (nums1[i] <= nums2[j]) {
      joinedArr[k++] = nums1[i];
      i++;
    } else {
      joinedArr[k++] = nums2[j];
      j++;
    }
  }
  
  while (i < nums1.length) {
    joinedArr[k++] = nums1[i];
    i++;
  }
  
  while (j < nums2.length) {
    joinedArr[k++] = nums2[j];
    j++;
  }

  let median;

  if (joinedArr.length % 2 !== 0) {
    let mid = Math.floor((joinedArr.length-1) / 2);
    median = parseFloat(joinedArr[mid]);
  } else {
    let mid1 = Math.floor((joinedArr.length-1) / 2);
    let mid2 = mid1 + 1;
    median = (joinedArr[mid1] + joinedArr[mid2]) / 2;
  }
  
  return median
};

let nums1 = [1, 3], nums2 = [2];
console.log(findMedianSortedArrays(nums1, nums2));