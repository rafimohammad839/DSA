# Leetcode 2678. Number of Senior Citizens

def countSeniors(details):
  num_seniors = 0

  for d in details:
    ten = ord(d[11]) - ord("0")
    one = ord(d[12]) - ord("0")
    age = ten*10 + one

    if age > 60:
      num_seniors += 1

  return num_seniors

details = ["7868190130M7522","5303914400F9211","9273338290F4010"]
print(countSeniors(details))