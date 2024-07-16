def partition(array, low, high):
  pivot = array[high]
  i = low - 1
  for j in range(low, high):
    if array[j] <= pivot:
      i += 1
      array[i], array[j] = array[j], array[i]
  array[i + 1], array[high] = array[high], array[i + 1]
  return (i + 1)

def quick_sort(array, low, high):
  if low < high:
    pi = partition(array, low, high)
    quick_sort(array, 0, pi - 1)
    quick_sort(array, pi + 1, high)

if __name__ == '__main__':
  array = [6, 5, 4, 3, 2, 1]
  N = len(array)

  quick_sort(array, 0, N - 1)
  print("Sorted array")
  for x in array:
    print(x, end=" ")