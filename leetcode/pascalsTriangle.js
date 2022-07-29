// Leetcode 118: Pascal's Triangle
/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
  let triangle = [];
  let firstRow = [1];
  triangle.push(firstRow);
  for (let i = 1; i < numRows; i++) {
    let prevRow = triangle[i - 1];
    let currentRow = [1];
    for (let j = 1; j < i; j++) {
      currentRow.push(prevRow[j - 1] + prevRow[j]);
    }
    currentRow.push(1);
    triangle.push(currentRow);
  }
  return triangle;
};

console.log(generate(5));