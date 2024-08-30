# Leetcode 1217. Minimum Cost to Move Chips to The Same Position

from typing import List
def minCostToMoveChips(position: List[int]) -> int:
  even, odd = 0, 0
  for p in position:
    if p % 2 == 0:
      even += 1
    else:
      odd += 1
  return min(even, odd)

# Test Cases
print(minCostToMoveChips(position=[1,2,3]))
print(minCostToMoveChips(position=[2,2,2,3,3]))