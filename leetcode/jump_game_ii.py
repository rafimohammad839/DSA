# Leetcode 45. Jump Game II
from typing import List

class Solution:
  def jump(self, nums: List[int]) -> int:
    n = len(nums)
    end, far = 0, 0
    jumps = 0
    
    for i in range(n - 1):
      far = max(far, i + nums[i])
      if i == end:
        jumps += 1
        end = far
    
    return jumps
  
if __name__ == "__main__":
  sol = Solution()
  print(sol.jump([2, 3, 1, 1, 4, 2, 1, 5, 2, 1, 1, 4]))