# Leetcode 268. Missing Number

from typing import List
def missingNumber(nums: List[int]) -> int:
  n = len(nums)
  res = n
  for i in range(n + 1):
    if i == n:
      break 
    res ^= nums[i]
    res ^= i
  
  return res

print(missingNumber([2, 0, 1]))