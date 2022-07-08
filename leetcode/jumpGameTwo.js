// Leetcode 45: Jump Game II

function jump(nums) {
  let len = nums.length;
  let steps = 0;
  let nextJumpIndex = 0;
  let currentJumpIndex = nextJumpIndex;
  for (let i = 0; i < len - 1; i++) {
    nextJumpIndex = Math.max(nextJumpIndex, i + nums[i]);
    if (currentJumpIndex === i) {
      steps++;
      currentJumpIndex = nextJumpIndex;
    }
  }
  return steps;
}

//          0  1  2  3  4  5  6  7  8  9
let nums = [2, 3, 1, 1, 4, 0, 3, 2, 1, 7];
console.log("Minimum number of jumps:", jump(nums));
