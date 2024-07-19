# Use List Comprehension to transpose a matrix eg converting rows into columns and vice-versa

def transpose_matrix(matrix):
  # converting rows in columns and columns into rows
  # since zip returns tuples as individual elements, converting them to list
  return [list(row) for row in zip(*matrix)]

matrix = [
  [1, 2, 3],
  [4, 5, 6]
]

print(transpose_matrix(matrix))

