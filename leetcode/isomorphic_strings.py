# Leetcode 205. Isomorphic Strings

def isIsomorphic(s: str, t: str) -> bool:
  d = {}
  n = len(s)

  for i in range(n):
    if s[i] not in d:
      for v in d.values():
        if v == t[i]:
          return False
      d[s[i]] = t[i]
    elif d[s[i]] != t[i]:
      return False
  
  return True

print(isIsomorphic("egg", "add"))