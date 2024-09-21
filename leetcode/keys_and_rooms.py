# Leetcode 841. Keys And Rooms

from typing import List
def canVisitAllRooms(rooms: List[List[int]]) -> bool:
  seen = [False for _ in range(len(rooms))]
  seen[0] = True

  keys_stack = [0]
  while len(keys_stack) > 0:
    key = keys_stack.pop()
    for k in rooms[key]:
      if not seen[k]:
        seen[k] = True
        keys_stack.append(k)
  
  print(f"Rooms Visited are : {seen}")
  for visited in seen:
    if not visited:
      return False
  
  return True

print(canVisitAllRooms([[1],[2],[3],[]]))