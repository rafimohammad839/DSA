// Function to find the fibonacci series upto nth term

function printFibonacciSeries(n) {
  let fibList = [];
  for (let i = 0; i <= n; i++) {
    fibList.push(fib(i));
  }
  return fibList;
}

function fib(n) {
  return n <= 1 ? n : fib(n - 1) + fib(n - 2);
}
console.time()
console.log(printFibonacciSeries(8))
console.timeEnd();