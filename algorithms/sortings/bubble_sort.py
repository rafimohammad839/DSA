# [10, 5, 2, 12, 8, 9]
# [5, 10, 2, 12, 8, 9]
def bubble_sort(arr):
  for i in range(0, len(arr) - 1):
    swapped = False
    for j in range(0, len(arr) - i - 1):
      if arr[j] > arr[j + 1]:
        arr[j], arr[j + 1] = arr[j + 1], arr[j]
        swapped = True
    if not swapped:
      break
  
# unsorted array
arr = [10, 5, 2, 12, 8, 9]
bubble_sort(arr)
# sorted array
print(arr)