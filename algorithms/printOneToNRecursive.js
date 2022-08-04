// Print 1 to n numbers recursively without using any iteration loop
function printNumber(n, result) {
  result = result || "";
  if (n <= 1) return " " + 1;
  result = result + " " + n + printNumber(n - 1);
  return result;
}

// Print table of 3 recursively
// function printTable(n) {
//   if (n < 3) return;
//   printTable(n - 3);
//   console.log(n);
// }

console.log(printNumber(10));
