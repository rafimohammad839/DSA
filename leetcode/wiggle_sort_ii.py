# Leetcode 324. Wiggle Sort II

def wiggleSort(nums):
  sorted_nums = sorted(nums)
  n = len(nums)

  j = n - 1

  # Filling the odd indices with the largest elements
  for i in range(1, n, 2):
    nums[i] = sorted_nums[j]
    j -= 1
  
  # Filling the even indices with the remaining elements
  for i in range(0, n, 2):
    nums[i] = sorted_nums[j]
    j -= 1

nums = [1, 5, 1, 1, 6, 4]
wiggleSort(nums)
print(nums)