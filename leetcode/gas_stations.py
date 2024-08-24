# Leetcode 134. Gas Station

def canCompleteCircuit(gas, cost):
  if sum(gas) < sum(cost): return False

  total = 0
  start = 0
  for i in range(len(gas)):
    total += gas[i] - cost[i]

    if total < 0:
      start = i + 1
      total = 0
    
  return start
  
print(canCompleteCircuit(gas = [2,3,4,5], cost = [3,4,3,1]))



    
