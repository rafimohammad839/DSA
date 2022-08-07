// Leetcode 51: N-Queens
/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function (n) {
  let cols = new Set();
  let posDiag = new Set();
  let negDiag = new Set();
  let result = [];
  let board = Array(n)
    .fill(".")
    .map(() => Array(n).fill("."));

  function backtrack(r) {
    if (r === n) {
      let copy = JSON.parse(JSON.stringify(board));
      for (let i = 0; i < board.length; i++) {
        copy[i] = copy[i].join("");
      }
      result.push(copy);
      return;
    }

    for (let c = 0; c < n; c++) {
      if (cols.has(c) || posDiag.has(r + c) || negDiag.has(r - c)) {
        continue;
      }
      cols.add(c);
      posDiag.add(r + c);
      negDiag.add(r - c);
      board[r][c] = "Q";

      backtrack(r + 1);

      cols.delete(c);
      posDiag.delete(r + c);
      negDiag.delete(r - c);
      board[r][c] = ".";
    }
  }
  backtrack(0);
  return result;
};

console.log("Number of possible configurations are:", solveNQueens(4));
