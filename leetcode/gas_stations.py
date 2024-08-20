# Leetcode 134. Gas Station

def canCompleteCircuit(gas, cost):
  if sum(gas) < sum(cost): return -1

  n = len(gas)
  start = 0
  total = 0
  for i in range(n):
    total += gas[i] - cost[i]

    if total < 0:
      total = 0
      start = i + 1
  
  return start
  
print(canCompleteCircuit(gas = [2,3,4], cost = [3,4,3]))



    
