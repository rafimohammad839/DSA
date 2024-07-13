def judge_square_sum(c):
  l = 0
  r = int(c ** 0.5)
  while l <= r:
    if l * l + r * r == c:
      return True
    elif l * l + r * r < c:
      l += 1
    else:
      r -= 1
  return False

# Test cases

print(judge_square_sum(5))  # True

print(judge_square_sum(3))  # False

print(judge_square_sum(4))  # True