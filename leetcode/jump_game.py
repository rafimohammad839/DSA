# Leetcode 55. Jump Game

# Approach: Greedy | Time - O(n) | Space - O(1)
from typing import List
class Solution:
  def canJump(self, nums: List[int]) -> int:
    n = len(nums)
    goal = n - 1

    for i in range(n - 1, -1, -1):
      if nums[i] + i >= goal:
        goal = i
    
    return goal == 0
  

if __name__ == "__main__":
  sol = Solution()
  print(sol.canJump([3,2,1,0,4]))