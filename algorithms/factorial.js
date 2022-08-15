// Find the factorial of a given number
function factorial(x) {
  if (x === 1 || x === 0) {
    return 1;
  } else if (x < 0) {
    return -1;
  }
  return x * factorial(x - 1);
}

console.log(factorial(4));