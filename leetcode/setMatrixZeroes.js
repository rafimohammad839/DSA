// Leetcode 73: Set Matrix Zeroes
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
// ----------------------- Solution 1 | Space - O(MN)
var setZeroes = function (matrix) {
  let dummy = JSON.parse(JSON.stringify(matrix));
  for (let i = 0; i < dummy.length; i++) {
    for (let j = 0; j < dummy[i].length; j++) {
      if (dummy[i][j] === 0) {
        insertZeroes(matrix, i, j);
      }
    }
  }
};

function insertZeroes(matrix, row, col) {
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (row === i) {
        matrix[i][j] = 0;
      }
      if (col === j) {
        matrix[i][j] = 0;
      }
    }
  }
}

let matrix = [
  [0, 1, 2, 0],
  [3, 4, 5, 2],
  [1, 3, 1, 5],
];
/* Output: 
   [
    [0, 0, 0, 0],
    [0, 4, 5, 0],
    [0, 3, 1, 0]
   ]
*/
setZeroes(matrix);
console.log(matrix);
