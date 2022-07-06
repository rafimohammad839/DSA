// Leetcode 45: Jump Game II

var jump = function (nums) {
  let steps = 0;
  let nextJumpIndex = 0;
  let currentJumpIndex = nextJumpIndex;

  for (let i = 0; i < nums.length - 1; i++) {
    nextJumpIndex = Math.max(nextJumpIndex, i + nums[i]);
    if (currentJumpIndex === i) {
      steps++;
      currentJumpIndex = nextJumpIndex;
    }
  }
  return steps;
}

console.log(jump([2, 1, 3, 0, 2, 4]))