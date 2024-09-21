# Leetcode 5. Longest Palindromic Substring

# Length of longest palindrome
def longestPalindrome(s: str) -> int:
  
  def expandFromMiddle(s, left, right):

    while left >= 0 and right < len(s) and s[left] == s[right]:
      left -= 1
      right += 1
    
    return (left + 1, right - 1)

  def findPalindromes(s: str) -> int:
    
    longest = ""

    for i in range(len(s)):

      left1, right1 = expandFromMiddle(s, i, i)
      cur_str1 = s[left1: right1+1]

      left2, right2 = expandFromMiddle(s, i, i + 1)
      cur_str2 = s[left2: right2+1]

      if len(cur_str1) > len(longest):
        longest = cur_str1
      
      if len(cur_str2) > len(longest):
        longest = cur_str2
    
    return longest

  return findPalindromes(s)

print(longestPalindrome("babad"))