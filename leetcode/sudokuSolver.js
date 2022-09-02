// Leetcode 37: Sudoku Solver
/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */

// ---------------------------------------------------------------------- Solution 1
// var solveSudoku = function(board) {
//   solve(board);
// };

// function solve(board) {
//   for (let i = 0; i < board.length; i++) {
//     for (let j = 0; j < board[0].length; j++) {
//       if (board[i][j] === '.') {
//         for (let c = 1; c <= 9; c++) {
//           if (isValid(board, i, j, c.toString())) {
//             board[i][j] = c + "";
//             if (solve(board) === true) {
//               return true;
//             } else {
//               board[i][j] = ".";
//             }
//           }
//         }
//         return false;
//       }
//     }
//   }
//   return true;
// }

// function isValid(board, row, col, c) {
//   for (let i = 0; i < 9; i++) {

//     // Checking for the current row
//     if (board[row][i] === c) {
//       return false;
//     }
//     // Checking for the current column
//     if (board[i][col] === c) {
//       return false;
//     }

//     // Checking for the current 3 x 3 box
//     let firstRow = 3 * Math.floor(row / 3);
//     let firstCol = 3 * Math.floor(col / 3);
//     if (board[firstRow + Math.floor(i / 3)][firstCol + i % 3] === c) {
//       return false;
//     }
//   }
//   return true;
// }



// ---------------------------------------------------------------------- Solution 2
var solveSudoku = function(board) {
  solve(board, 0, 0);
};

function solve(board, row, col) {
  if (row === board.length) {
    return true;
  }

  let nRow = 0;
  let nCol = 0;
  if (col !== board.length - 1) {
    nCol = col + 1;
    nRow = row;
  } else {
    nRow = row + 1;
    nCol = 0;
  }

  if (board[row][col] !== '.') {
    if (solve(board, nRow, nCol)) {
      return true;
    } 
  } else {
    for (let c = 1; c <= 9; c++) {
      if (isValid(board, row, col, c.toString())) {
        board[row][col] = c + "";
        if (solve(board, nRow, nCol)) {
          return true;
        } else {
          board[row][col] = ".";
        }
      }
    }
    return false;
  }
}

function isValid(board, row, col, c) {
  for (let i = 0; i < 9; i++) {
    // Checking for the same row
    if (board[row][i] === c) {
      return false;
    }

    // Checking for the same column
    if (board[i][col] === c) {
      return false;
    }
  }

  // Checking for the same 3 x 3 grid
  let firstRow = 3 * Math.floor(row / 3);
  let firstCol = 3 * Math.floor(col / 3);

  for (let i = firstRow; i < firstRow + 3; i++) {
    for (let j = firstCol; j < firstCol + 3; j++) {
      if (board[i][j] === c) {
        return false;
      }
    }
  }
  return true;
}


let input = [["5", "3", ".", ".", "7", ".", ".", ".", "."], ["6", ".", ".", "1", "9", "5", ".", ".", "."], [".", "9", "8", ".", ".", ".", ".", "6", "."], ["8", ".", ".", ".", "6", ".", ".", ".", "3"], ["4", ".", ".", "8", ".", "3", ".", ".", "1"], ["7", ".", ".", ".", "2", ".", ".", ".", "6"], [".", "6", ".", ".", ".", ".", "2", "8", "."], [".", ".", ".", "4", "1", "9", ".", ".", "5"], [".", ".", ".", ".", "8", ".", ".", "7", "9"]];

solveSudoku(input);

console.log(input);