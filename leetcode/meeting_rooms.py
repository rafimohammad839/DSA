def canAttend(intervals):
  intervals.sort(key=lambda x: x[0])
  print(intervals)

  for i in range(len(intervals) - 1):
    if intervals[i][1] > intervals[i + 1][0]:
      return False
  
  return True

print(canAttend([(9,15),(5,8)]))