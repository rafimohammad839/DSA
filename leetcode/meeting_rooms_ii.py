def minMeetingRooms(intervals):
  start = sorted([interval[0] for interval in intervals])
  end = sorted([interval[1] for interval in intervals])

  s, e = 0, 0
  res, count = 0, 0

  while s < len(intervals):
    if start[s] < end[e]:
      count += 1
      s += 1
    else:
      count -= 1
      e += 1
    res = max(res, count)
  
  return res

print(minMeetingRooms([[0,30],[5,10],[15,20]]))