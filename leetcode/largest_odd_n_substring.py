# Leetcode 1903. Largest Odd Number in String

def largestOddNumber(num: str) -> str:
  res = ""
  n = len(num)
  for i in range(n - 1, -1, -1):
    if int(num[i]) % 2 != 0:
      res = num[:i+1]
      break
  
  return res

print(largestOddNumber("35427"))