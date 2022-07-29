// Leetcode 56: Merge Intervals
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  intervals = intervals.sort((a, b) => a[0] - b[0])
  let result = [];
  let innerList = [intervals[0][0], intervals[0][1]]
  result.push(innerList);
  for (let i = 1; i < intervals.length; i++) {
    let prev = result[result.length - 1][1];
    let curr = intervals[i][0];
    if (curr <= prev) {
      if (intervals[i][1] >= prev) {
        result[result.length - 1][1] = intervals[i][1];
      }
    } else {
      let innerList = [intervals[i][0], intervals[i][1]];
      result.push(innerList)
    }
  }
  return result;
};

let intervals =[[1,3],[2,6],[8,10],[15,18]]
console.log(merge(intervals));
