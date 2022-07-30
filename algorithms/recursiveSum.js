/* Recursive function to find the sum upto n numbers
 e.g., Find the sum upto 5, output: 15
*/

function sum(n) {
  if (n === 1) {
    return 1;
  }
  return n + sum(n - 1);
}

console.log(sum(5));