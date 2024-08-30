# Leetcode 860. Lemonade Change

from typing import List
def lemonadeChange(bills: List[int]) -> bool:
  five, ten = 0, 0
  
  for b in bills:
    if b == 5:
      five += 1
    if b == 10:
      ten += 1
    
    change = b - 5
    if change == 5:
      if five > 0:
        five -= 1
      else:
        return False
    elif change == 15:
      if ten > 0 and five > 0:
        five, ten = five - 1, ten - 1
      elif five >= 3:
        five -= 3
      else:
        return False
    
  return True

# Test Cases
print(lemonadeChange(bills=[5,5,5,10,20]))
print(lemonadeChange(bills=[5,5,10,10,20]))