// Question: Find if there exist two numbers in the given array
// such that they add up to the given target

var twoSum = function (nums, target) {
  let map = new Map();
  let len = nums.length;
  for (let i = 0; i < len; i++) {
    let compliment = target - nums[i];
    if (map.has(compliment)) {
      return [map.get(compliment), i];
    } else {
      map.set(nums[i], i);
    }
  }
  return -1;
};

let nums = [2, 7, 11, 15];
console.log(twoSum(nums, 9));
