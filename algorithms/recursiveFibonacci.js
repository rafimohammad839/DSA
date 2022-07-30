/* Recursive function to find the nth term in the fibonacci sequence, e.g., 6th --> 8
since 0 1 1 2 3 5 8 13 21....
*/

function fib(n) {
  return n <= 1 ? n : fib(n - 1) + fib(n - 2);
}

console.log(fib(6)) 