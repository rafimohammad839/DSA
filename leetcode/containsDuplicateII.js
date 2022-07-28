// Leetcode 219: Contains Duplicate II
/*
           0  1  2  3  4  5  6   7
  nums = [1, 25, 2, 3, 1, 6, 10, 1, 80], k = 3
*/

var containsNearbyDuplicate = function (nums, k) {
  let map = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (map.has(nums[i])) {
      let distance = i - map.get(nums[i])
      if (distance <= k) {
        return true;
      } 
      map.set(nums[i], i);
    } else {
      map.set(nums[i], i);
    }
  } 
  return false;
};

let nums1 = [1, 3, 1, 2, 3], k1 = 2 // Output: true
let nums2 = [1, 8, 7, 5, 10, 8], k2 = 3 // Output: false
console.log(containsNearbyDuplicate(nums1, k1))
console.log(containsNearbyDuplicate(nums2, k2))


