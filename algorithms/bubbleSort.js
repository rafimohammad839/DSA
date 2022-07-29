// Geeksforgeeks problem - https://practice.geeksforgeeks.org/problems/punish-the-students5726/1
function shouldPunish(nums, avg) {
  // swapCount to count how many swaps are required
  let swapCount = 0;
  let status = true;
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = 1; j < nums.length; j++) {
      if (nums[j] < nums[j-1]) {
        swapCount += 1;
        let temp = nums[j];
        nums[j] = nums[j-1];
        nums[j-1] = temp;
      }
    }
  }
  // Deciding if deducting the marks causes
  // the avg marks to go below avg given
  let marksAvg = nums.reduce((acc, curr) => {
    return acc + curr;
  }, 0)
  if (((marksAvg - swapCount) / nums.length) < avg) {
    status = false;
  }
  return status;
}

let array = [50, 67, 89, 79, 58]
console.log("Unsorted:", JSON.stringify(array));
console.log("Should Punish?", shouldPunish(array, 68));
console.log("Sorted:", JSON.stringify(array));
