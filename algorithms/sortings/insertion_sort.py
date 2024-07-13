class Sorter:
  def insertion_sort(self, arr):
    for i in range(1, len(arr)):
      j = i - 1
      key = arr[i]
      while j >=0 and arr[j] > key:
        arr[j + 1] = arr[j]
        j -= 1
      arr[j + 1] = key

sorted = Sorter()
# an unsorted array
arr = [8, 5, 3, 2, 1]
sorted.insertion_sort(arr)
# sorted array
print(arr)
