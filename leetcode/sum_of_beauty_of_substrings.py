# Leetcode 1781. Sum of Beauty of All Substrings

def beautySum(s: str) -> int:
  summ = 0

  for i in range(len(s)):
    freq = [0 for _ in range(26)]
    for j in range(i, len(s)):
      freq[ord(s[j]) - ord('a')] += 1

      maxi = float('-inf')
      mini = float('inf')

      for f in freq:
        if f > maxi and f != 0:
          maxi = f
        if f < mini and f != 0:
          mini = f
      
      beauty = maxi - mini
      summ += beauty

  return summ

my_str = "aabcb"
print(beautySum(my_str))