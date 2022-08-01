// Leetcode 73: Set Matrix Zeroes
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
// ------------------------------------ Solution 1 | Space - O(MN)
// var setZeroes = function (matrix) {
//   let dummy = JSON.parse(JSON.stringify(matrix));
//   for (let i = 0; i < dummy.length; i++) {
//     for (let j = 0; j < dummy[i].length; j++) {
//       if (dummy[i][j] === 0) {
//         insertZeroes(matrix, i, j);
//       }
//     }
//   }
// };

// function insertZeroes(matrix, row, col) {
//   for (let i = 0; i < matrix.length; i++) {
//     for (let j = 0; j < matrix[i].length; j++) {
//       if (row === i) {
//         matrix[i][j] = 0;
//       }
//       if (col === j) {
//         matrix[i][j] = 0;
//       }
//     }
//   }
// }
/*
let matrix = 
[
  [0, 1, 2, 0],
  [3, 0, 5, 2],
  [2, 8, 1, 0],
]
*/
// -------------------------------- Solution 2 | Optimal Solution | Space - O(1)
var setZeroes = function (matrix) {
  let rows = matrix.length;
  let cols = matrix[0].length;
  let rowZero = false;

  // Setting first row and column as markup for which column
  // and which row to be zeroed out
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (matrix[i][j] === 0) {
        matrix[0][j] = 0;
        if (i > 0) {
          matrix[i][0] = 0;
        } else {
          rowZero = true;
        }
      }
    }
  }

  // Zeroing out all rows and zeroes depending on the markup
  // Except first row and first column
  for (let i = 1; i < rows; i++) {
    for (let j = 1; j < cols; j++) {
      if (matrix[0][j] === 0) {
        matrix[i][j] = 0;
      }
      if (matrix[i][0] === 0) {
        matrix[i][j] = 0;
      }
    }
  }

  // Zeroing out first column
  if (matrix[0][0] === 0) {
    for (let i = 0; i < rows; i++) {
      matrix[i][0] = 0;
    }
  }

  // Zeroing out first row
  if (rowZero) {
    for (let i = 0; i < cols; i++) {
      matrix[0][i] = 0;
    }
  }
};

let matrix = [
  [1, 1, 1],
  [1, 0, 1],
  [1, 1, 1],
];
/* Output: 
   [[1,0,1],[0,0,0],[1,0,1]]
*/
setZeroes(matrix);
console.log(matrix);
