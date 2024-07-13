def insertion_sort(arr):
  for i in range(1, len(arr)):
    j = i - 1
    key = arr[i]
    while j >= 0 and arr[j] > key:
      arr[j + 1] = arr[j]
      j -= 1
    arr[j + 1] = key

# an unsorted array
arr = [10, 20, 15, 12, 11, 5, 8]
insertion_sort(arr)
# sorted array
print(arr)