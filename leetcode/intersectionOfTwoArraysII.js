// Leetcode 350: Intersection of Two Arrays II
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
  let map = new Map();
  let result = [];
  // Setting each value and its count in the map
  for (let i = 0; i < nums2.length; i++) {
    if (map.has(nums2[i])) {
      map.set(nums2[i], map.get(nums2[i]) + 1);
    } else {
      map.set(nums2[i], 1);
    }
  }

  // Looping over another array, decreasing the count in the map if the key exists
  for (let i = 0; i < nums1.length; i++) {
    if (map.has(nums1[i]) && map.get(nums1[i]) >= 1) {
      result.push(nums1[i]);
      map.set(nums1[i], map.get(nums1[i]) - 1);
    }
  }

  return result;
};

let nums1 = [1, 2, 2, 1], nums2 = [2, 2];
console.log(intersect(nums1, nums2));
