// Leetcode 36: Valid Sudoku
/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      // Checking only if the current cell isn't empty
      if (board[i][j] !== ".") {
        if (!isValid(board, i, j, board[i][j])) {
          return false;
        }
      }
    }
  }
  return true;
};

function isValid(board, row, col, c) {
  for (let i = 0; i < 9; i++) {
    // Checking for the current row
    if (board[row][i] === c && i !== col) {
      return false;
    }

    // Checking for the current column
    if (board[i][col] === c && i !== row) {
      return false;
    }

    // Checking for the current 3 x 3 grid
    let nRow = 3 * Math.floor(row / 3) + Math.floor(i / 3);
    let nCol = 3 * Math.floor(col / 3) + (i % 3);
    if (board[nRow][nCol] === c && nRow !== row && nCol !== col) {
      return false;
    }
  }
  return true;
}

let board = [
  ["8", "3", ".", ".", "7", ".", ".", ".", "."],
  ["6", ".", ".", "1", "9", "5", ".", ".", "."],
  [".", "9", "8", ".", ".", ".", ".", "6", "."],
  ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
  ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
  ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
  [".", "6", ".", ".", ".", ".", "2", "8", "."],
  [".", ".", ".", "4", "1", "9", ".", ".", "5"],
  [".", ".", ".", ".", "8", ".", ".", "7", "9"],
];

console.log(isValidSudoku(board));
