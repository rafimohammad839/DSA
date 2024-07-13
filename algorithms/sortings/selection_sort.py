# [4, 3, 2, 10, 5, 8]

def selection_sort(arr):
  for i in range(0, len(arr)):
    select = i
    for j in range(i + 1, len(arr)):
      if arr[j] < arr[select]:
        select = j
    arr[i], arr[select] = arr[select], arr[i]

# unsorted array
arr = [4, 3, 2, 10, 5, 8]
selection_sort(arr)
# sorted array
print(arr)