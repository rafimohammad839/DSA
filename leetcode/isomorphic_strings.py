# Leetcode 205. Isomorphic Strings

# Bruteforce Approach
# def isIsomorphic(s: str, t: str) -> bool:
#   d = {}
#   n = len(s)

#   for i in range(n):
#     if s[i] not in d:
#       for v in d.values():
#         if v == t[i]:
#           return False
#       d[s[i]] = t[i]
#     elif d[s[i]] != t[i]:
#       return False
  
#   return True

# print(isIsomorphic("egg", "add"))

# Optimal Approach
def isIsomorphic(s: str, t: str):
  s_map = [0 for _ in range(128)]
  t_map = [0 for _ in range(128)]
  n = len(s)

  for i in range(n):
    if s_map[ord(s[i])] != t_map[ord(t[i])]: return False
    s_map[ord(s[i])] = i + 1
    t_map[ord(t[i])] = i + 1
  
  return True

print(isIsomorphic("add", "egg"))