  // Leetcode 867: Transpose Matrix
  /**
   * @param {number[][]} matrix
   * @return {number[][]}
   */
  const transpose = function (matrix) {
    let result = [];
    for (let i = 0; i < matrix[0].length; i++) {
    let inner = [];
      for (let j = 0; j < matrix.length; j++) {
        inner.push(matrix[j][i]);
      }
      result.push(inner);
    }
    return result;
  };

  let matrix = [
    [1, 2, 3],
    [4, 5, 6]
  ];
  /* Output:
    [
      [1, 4]
      [2, 5]
      [3, 6]
    ]
  */
  console.log(transpose(matrix));