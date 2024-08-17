# Leetcode 78. Subsets
from typing import List

class Solution:
  def subsets(self, nums: List[int]) -> int:
    n = len(nums)
    res, sol = [], []

    def backtrack(i):
      if i == n:
        res.append(sol[:])
        return
      
      sol.append(nums[i])
      backtrack(i + 1)
      sol.pop()

      backtrack(i + 1)
    
    backtrack(0)
    return res


if __name__ == "__main__":
  sol = Solution()
  print(sol.subsets([1, 2, 3]))

