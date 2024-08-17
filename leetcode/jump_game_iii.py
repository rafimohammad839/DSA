# Leetcode 1306. Jump Game III
from typing import List
class Solution:
  def canJump(self, nums: List[int], start: int) -> int:
    n = len(nums)
    visited = set()

    def backtrack(i):
      if i < 0 or i >= n:
        return False
      if nums[i] in visited:
        return False
      if nums[i] == 0:
        return True
      
      visited.add(i)
      return backtrack(i + nums[i]) or backtrack(i - nums[i])
  
    return backtrack(start)

if __name__ == "__main__":
  sol = Solution()
  arr = [3,0,2,1,2]
  print(sol.canJump(arr, 5))