// Leetcode 283: Move Zeroes
var moveZeroes = function (nums) {
  if (nums.every((val) => val === 0)) {
    return;
  }
  let i = 0;
  let count = 0;
  while (i < nums.length) {
    if (nums[i] === 0) {
      nums.splice(i, 1);
      i = 0;
      count++;
    } else {
      i++;
    }
  }
  for (let i = 0; i < count; i++) {
    nums.push(0);
  }
};

let nums = [0, 1, 0, 3, 12];
// output = [1, 3, 12, 0, 0]
moveZeroes(nums);
console.log(nums);
