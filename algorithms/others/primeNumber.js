// Determine if a given number is prime
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