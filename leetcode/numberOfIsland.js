// Leetcode 200: Number of Islands
/**
 * @param {character[][]} grid
 * @return {number}
*/
var numIslands = function (grid) {
  let count = 0;
  let row = grid.length;
  let cols = grid[0].length;
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < cols; j++) {
      if (grid[i][j] === "1") {
        count += 1;
        callBFS(grid, i, j);
      }
    }
  }
  return count;
};

function callBFS(arr, i, j) {
  if (
    i < 0 ||
    j < 0 ||
    i >= arr.length ||
    j >= arr[0].length ||
    arr[i][j] === "0"
  ) {
    return;
  }

  // Filling with 0's the visited 1's
  arr[i][j] = "0";

  // Breadth First Search for 1's on both vertical and horizontal directions
  callBFS(arr, i + 1, j);
  callBFS(arr, i - 1, j);
  callBFS(arr, i, j + 1);
  callBFS(arr, i, j - 1);
}

let grid = [
  ["1", "1", "0", "0", "0"],
  ["1", "1", "0", "0", "0"],
  ["0", "0", "1", "0", "0"],
  ["0", "0", "0", "1", "1"],
];
console.log(numIslands(grid));
