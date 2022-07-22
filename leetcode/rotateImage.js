// Leetcode 48: Rotate Image
var rotate = function (matrix) {
  let rows = matrix.length;
  let cols = matrix[0].length;
  // Step #1 : Transposing the matrix
  for (let i = 0; i < rows; i++) {
    for (let j = i; j < cols; j++) {
      let temp = matrix[i][j];
      matrix[i][j] = matrix[j][i];
      matrix[j][i] = temp;
    }
  }
  // Step #2 : Swapping first column values with last column values
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols / 2; j++) {
      let temp = matrix[i][j];
      matrix[i][j] = matrix[i][cols - 1 - j];
      matrix[i][cols - 1 - j] = temp;
    }
  }
};

let matrix = [
  [5, 1, 9, 11],
  [2, 4, 8, 10],
  [13, 3, 6, 7],
  [15, 14, 12, 16],
];

rotate(matrix);
console.log("After transposing...", matrix);
