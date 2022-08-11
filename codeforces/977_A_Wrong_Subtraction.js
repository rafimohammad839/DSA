// Problem Code: 977
function main() {
  let n = 512;
  let t = 4;
  let result = wrongSubtraction(n, t);
  console.log(result);
}
main();
function wrongSubtraction(n, t) {
  let i = 0;
  while (i < t) {
    if (n % 10 === 0) {
      n = Math.floor(n / 10);
    } else {
      n = n - 1;
    }
    i++;
  }
  return n;
}