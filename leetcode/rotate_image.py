def rotate(matrix):

  N = len(matrix)
  
  # Step 1: Transpose the matrix

  for i in range(len(matrix)):
    for j in range(i, len(matrix[0])):
      matrix[i][j], matrix[j][i] = matrix[j][i], matrix[i][j]

  # Step #2: Swap elements using two pointer approach

  for i in range(N):
    for j in range(0, (N // 2)):
      matrix[i][j], matrix[i][N - 1 - j] = matrix[i][N - 1 - j], matrix[i][j]
  
matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]

rotate(matrix)
print(matrix)