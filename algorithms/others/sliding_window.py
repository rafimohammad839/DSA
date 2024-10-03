# Sliding Window: Fixed Size (Most basic problem)

def maxSumOfAllSubArrays(arr, k):
  n = len(arr)
  sum = 0
  maxi = float('-inf')

  start, end = 0, 0
  while end < n:
    sum += arr[end]
    
    if (end - start + 1) == k:
      maxi = max(maxi, sum)
      sum -= arr[start]
      start += 1
      
    end += 1

  return maxi

arr = [1, 2, 3, 4, 5]
print(maxSumOfAllSubArrays(arr, 3))

