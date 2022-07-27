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
      } else {
        map.set(nums[i], i);
      }
    } else {
      map.set(nums[i], i);
    }
  } 
  return false;
};

let nums = [1,2,3,1,2,3], k = 2
console.log(containsNearbyDuplicate(nums, k))


