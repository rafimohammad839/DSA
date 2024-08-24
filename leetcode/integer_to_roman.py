# Leetcode 12. Integer to Roman

def intToRoman(num):
  roman_to_int = [
    ['M', 1000],
    ['CM', 900],
    ['D', 500],
    ['CD', 400],
    ['C', 100],
    ['XC', 90],
    ['L', 50],
    ['XL', 40],
    ['X', 10],
    ['IX', 9],
    ['V', 5],
    ['IV', 4],
    ['I', 1]
  ]

  ret = ""
  for sym, val in roman_to_int:
    if num >= val:
      count = num // val
      ret += (sym * count)
      num %= val
    
  return ret

print(intToRoman(58))