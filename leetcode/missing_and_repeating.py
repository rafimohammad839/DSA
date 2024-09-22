# GeeksforGeeks: Missing and Repeating in an Array
# Problem Link: https://www.geeksforgeeks.org/find-a-repeating-and-a-missing-number/

# Method 1: With Space O(n)
# def findTwoElement(arr):
#   visited = [False for _ in range(len(arr) + 1)]
#   res = []

#   for n in arr:
#     if not visited[n]:
#       visited[n] = True
#     else:
#       res.append(n)
  
#   for i in range(1, len(visited)):
#     if not visited[i]:
#       res.append(i)
  
#   return res

# print(findTwoElement([2, 2]))

# Method 2. With Space O(1)
# def findTwoElement(arr):
#   n = len(arr)
#   missing = n * (n + 1) // 2

#   for i in range(n):
#     if arr[abs(arr[i]) - 1] > 0:
#       arr[abs(arr[i]) - 1] = -arr[abs(arr[i]) - 1]
#       missing -= abs(arr[i])
#     else:
#       repeating = abs(arr[i])
  
#   return [repeating, missing]

# print(findTwoElement([2, 2]))

# Method 3. Using XOR

def findTwoElements(arr):
    n = len(arr)
    xor1 = 0
    x = 0
    y = 0

    # Step 1: XOR all elements in the array and their indices
    for i in range(n):
        xor1 ^= arr[i]
        xor1 ^= (i + 1)

    # Step 2: Get the rightmost set bit in xor1
    set_bits = xor1 & -xor1

    # Step 3: Divide elements into two groups based on the set bit
    for i in range(n):
        if arr[i] & set_bits:
            x ^= arr[i]  # Group 1
        else:
            y ^= arr[i]  # Group 2

        if (i + 1) & set_bits:
            x ^= (i + 1)  # Group 1
        else:
            y ^= (i + 1)  # Group 2

    # Step 4: Identify which of x or y is the missing number
    # and which is the repeating number
    for i in range(n):
        if arr[i] == x:
            return [x, y]  # x is the repeating number
    return [y, x]  # y is the repeating number


print(findTwoElements([2, 2]))

  