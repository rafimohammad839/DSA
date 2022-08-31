// Count number of ways you can reach nth stair from 0th stair
function countWays(n) {
  let count = 0;
  function stairCase(n) {
    if (n === 0 || n === 1) {
      return 1;
    }
    if (n === 2) {
      return 2;
    }
    return stairCase(n - 1) + stairCase(n - 2);
  }
  return stairCase(n);
}

let n = 3;
console.log(countWays(n));