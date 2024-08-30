# Leetcode 496. Next Greater Element I

from typing import List
def nextGreaterElement(nums1: List[int], nums2: List[int]) -> List[int]:
  nums1Idx = {n:i for i, n in enumerate(nums1)}
  res = [-1] * len(nums1)

  stack = []
  for i in range(len(nums2)):
    cur = nums2[i]
    while stack and cur > stack[-1]:
      val = stack.pop()
      idx = nums1Idx[val]
      res[idx] = cur
    if cur in nums1Idx:
      stack.append(cur)
            
  return res

print(nextGreaterElement(nums1 = [4,1,2], nums2 = [1,3,4,2]))
  