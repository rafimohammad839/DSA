# Leetcode 665. Non-decreasing Array

from typing import List
def checkPossibility(nums: List[int]) -> bool:
  changed = False
  for i in range(len(nums) - 1):
    if nums[i] <= nums[i + 1]:
      continue
    if changed:
      return False
    
    # Change at most one element
    if i == 0 or nums[i - 1] <= nums[i + 1]:
      nums[i] = nums[i + 1]
    else:
      nums[i + 1] = nums[i]
    changed = True

  return True

# Test Cases
print(checkPossibility([4,2,3]))
print(checkPossibility([4,2,1]))