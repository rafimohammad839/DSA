// Question: Find if the number is the same when its digits reversed
var isPalindrome = function (x) {
  let sum = 0;
  let mod;
  let copy = x;
  while (x !== 0) {
      mod = x % 10;
      sum = sum * 10 + mod;
      x = Math.trunc(x / 10);
  }
  if (copy == sum && sum >= 0) {
      return true;
  }
  return false;
};

console.log(isPalindrome(121));