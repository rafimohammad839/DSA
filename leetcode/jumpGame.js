// Leetcode 55: Jump Game

var canJump = function(nums) {
  let len = nums.length;
  let lastGoodIndex = len - 1;
  for (let i = len - 2; i >= 0; i--) {
      if (i + nums[i] >= lastGoodIndex) {
          lastGoodIndex = i;
      }
  }
  return lastGoodIndex === 0;
};

console.log(canJump([3,2,1,0,4]))