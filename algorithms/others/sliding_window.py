# Sliding Window: Fixed Size (Most basic problem)

def sumOfAllSubArrays(arr, k):
  n = len(arr)
  result = []
  sum = 0

  start, end = 0, 0
  while end < n:
    sum += arr[end]
    if (end - start + 1) < k:
      end += 1
    else:
      result.append(sum)
      sum -= arr[start]
      start += 1
      end += 1

  return result

arr = [1, 2, 3, 4, 5, 6]
print(sumOfAllSubArrays(arr, 3))

