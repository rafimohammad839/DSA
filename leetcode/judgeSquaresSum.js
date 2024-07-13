function judgeSquaresSum(c) {
  let low = 0;
  let high = Math.floor(Math.sqrt(c));

  while (low <= high) {
    if (low * low + high * high === c) {
      return true;
    } else if (low * low + high * high < c) {
      low++;
    } else {
      high--;
    }
  }
  return false;
}

console.log(judgeSquaresSum(5)); // true

console.log(judgeSquaresSum(3)); // false

console.log(judgeSquaresSum(4)); // true