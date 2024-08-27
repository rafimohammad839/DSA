# Leetcode 435. Non-overlapping Intervals

def eraseOverlapIntervals(intervals):
  intervals.sort()
  count = 0

  prev_end = intervals[0][1]
  for start, end in intervals[1:]:
    if start >= prev_end:
      prev_end = end
    else:
      count += 1
      prev_end = min(prev_end, end)
  
  return count

print(eraseOverlapIntervals(intervals=[[1,2],[1,2],[1,2]]))