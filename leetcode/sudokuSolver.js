// Leetcode 37: Sudoku Solver
/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku = function(board) {
  solve(board);
};

function solve(board) {
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      if (board[i][j] === '.') {
        for (let c = 1; c <= 9; c++) {
          if (isValid(board, i, j, c.toString())) {
            board[i][j] = c + "";
            if (solve(board) === true) {
              return true;
            } else {
              board[i][j] = ".";
            }
          }
        }
        return false;
      }
    }
  }
  return true;
}

function isValid(board, row, col, c) {
  for (let i = 0; i < 9; i++) {

    // Checking for the current row
    if (board[row][i] === c) {
      return false;
    }
    // Checking for the current column
    if (board[i][col] === c) {
      return false;
    }

    // Checking for the current 3 x 3 box
    let firstRow = 3 * Math.floor(row / 3);
    let firstCol = 3 * Math.floor(col / 3);
    if (board[firstRow + Math.floor(i / 3)][firstCol + i % 3] === c) {
      return false;
    }
  }
  return true;
}

let input = [["5", "3", ".", ".", "7", ".", ".", ".", "."], ["6", ".", ".", "1", "9", "5", ".", ".", "."], [".", "9", "8", ".", ".", ".", ".", "6", "."], ["8", ".", ".", ".", "6", ".", ".", ".", "3"], ["4", ".", ".", "8", ".", "3", ".", ".", "1"], ["7", ".", ".", ".", "2", ".", ".", ".", "6"], [".", "6", ".", ".", ".", ".", "2", "8", "."], [".", ".", ".", "4", "1", "9", ".", ".", "5"], [".", ".", ".", ".", "8", ".", ".", "7", "9"]];

solveSudoku(input);

console.log(input);