# n = 8, 
# g  g  g  g  b  b  b  b  b
# 0, 1, 2, 3, 4, 5, 6, 7, 8

def isBadVersion(version: int) -> bool:
  return version >= 4

def firstBadVersion(n: int) -> int:
  left = 0
  right = n

  while left < right:
    mid = left + (right - left) // 2
    if isBadVersion(mid):
      right = mid
    else:
      left = mid + 1
  if left == right and isBadVersion(left):
    return left
  return -1  # No bad version found

print(firstBadVersion(5))  # Output: 4