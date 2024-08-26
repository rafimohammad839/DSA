# Leetcode 280. Wiggle Sort

def wiggleSort(nums):
  n = len(nums)

  for i in range(1, n):
    if (i % 2 == 0 and nums[i] > nums[i - 1]) or \
      (i % 2 != 0 and nums[i] < nums[i - 1]): 
      nums[i], nums[i - 1] = nums[i - 1], nums[i]
  
  return nums

print(wiggleSort([3, 5, 2, 1, 6, 4]))