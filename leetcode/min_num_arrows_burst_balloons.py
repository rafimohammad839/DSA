# Leetcode 452. Minimum Number of Arrows to Burst Balloons

def findMinArrowShots(points):
  n = len(points)
  points.sort()
  res = n

  prev = points[0]
  for i in range(1, n):
    cur = points[i]

    if cur[0] <= prev[1]:
      res -= 1
      prev = [cur[0], min(cur[1], prev[1])]
    else:
      prev = cur
    
  return res

print(findMinArrowShots([[10,16],[2,8],[1,6],[7,12]]))