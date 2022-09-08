// Determine if a given number is prime


// -------------------------------------------------------- Solution 1 | Bruteforce Solution | Time - O(N)
// function isPrime(x) {
//   let status = true;
//   for (let i = 2; i < x; i++) {
//     if (x % i === 0) {
//       status = false;
//       break;
//     }
//   }
//   return status;
// }

// -------------------------------------------------------- Solution 2 | Less Bruteforce | Time - O(N/2)
// function isPrime(x) {
//   let status = true;
//   for (let i = 2; i < x / 2; i++) {
//     if (x % i === 0) {
//       status = false;
//       break;
//     }
//   }
//   return status;
// }


// -------------------------------------------------------- Solution 3 | Optimal Solution | Time - O(√N)
function isPrime(x) {
  let status = true;
  for (let i = 2; i * i <= x; i++) {
    if (x % i === 0) {
      status = false;
      break;
    }
  }
  return status;
}

console.log(isPrime(50));