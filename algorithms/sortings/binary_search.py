# Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

# Method #1: Recursive | Time Complexity - O(log(n))
# def binary_search(arr, low, high, k):
#   if low > high:
#     return "Element should be inserted in the position " + str(low)
#   mid = (low + high) // 2

#   if arr[mid] == k:
#     return mid
#   elif arr[mid] > k:
#     return binary_search(arr, low, mid-1, k)
#   else:
#     return binary_search(arr, mid+1, high, k)
  
# Method #2: Iterative | Time Complexity - O(log(n))
def binary_search(arr, k):
  low = 0
  high = len(arr) - 1

  while low <= high:
    mid = (low + high) // 2
    if arr[mid] == k:
      return mid
    elif arr[mid] > k:
      high = mid - 1
    else:
      low = mid + 1
  return "Element should be inserted in the position " + str(low)

  
# Test the binary search function

arr = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19]
k = 11

result = binary_search(arr, k)
if type(result) is not str:
  print("Element is present at index", str(result))
else:
  print(result)