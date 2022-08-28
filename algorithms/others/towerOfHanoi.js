// ----------------------------------------------------------------- Tower Of Hanoi | Recursion | Time - O(2^N)
function towerOfHanoi(n, source, auxiliary, destination) {
  if (n === 0) return;
  towerOfHanoi(n - 1, source, destination, auxiliary);
  console.log(source, "-->", destination);
  towerOfHanoi(n - 1, auxiliary, source, destination);
}

const n = 3;
const source = "source";
const auxiliary = "auxiliary";
const destination = "destination";
towerOfHanoi(n, source, auxiliary, destination);