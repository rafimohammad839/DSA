# Leetcode 1071. Greatest Common Divisor of Strings

def gcdOfStrings(str1: str, str2: str) -> str:
  l1, l2 = len(str1), len(str2)

  def divisor(l):
    if l1 % l or l2 % l:
      return False
    f1, f2 = l1 // l, l2 // l
    return str1[:l] * f1 == str1 and str1[:l] * f2 == str2

  for l in range(min(l1, l2), 0, -1):
    if divisor(l):
      return str1[:l]
  return ""

# Test Cases
print(gcdOfStrings(str1="ABCABC", str2="ABC"))
print(gcdOfStrings(str1="ABABAB", str2="ABAB"))
print(gcdOfStrings(str1="LEET", str2="CODE"))