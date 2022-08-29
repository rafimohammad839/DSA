// ----------------------------------------------------------------- Tower Of Hanoi | Recursion | Time - O(2^N)
// function towerOfHanoi(n, source, auxiliary, destination) {
//   if (n === 0) return;
//   towerOfHanoi(n - 1, source, destination, auxiliary);
//   console.log(source, "-->", destination);
//   towerOfHanoi(n - 1, auxiliary, source, destination);
// }

// const n = 30;
// const source = "source";
// const auxiliary = "auxiliary";
// const destination = "destination";
// towerOfHanoi(n, source, auxiliary, destination);

// Problem on GeeksforGeeeks. Link: https://practice.geeksforgeeks.org/problems/tower-of-hanoi-1587115621/1
class Solution {
  constructor() {
      this.moves = 0;
  }

  toh(N, from, to, aux)
  {
      if (N === 0) {
          return;
      }
      this.toh(N - 1, from, aux, to);
      console.log(`move disk ${N} from rod ${from} to rod ${to}`);
      this.moves += 1;
      this.toh(N - 1, aux, to, from);
      return this.moves;
  }
}

let solution = new Solution();
let moves = solution.toh(2, 1, 3, 2);
console.log(moves);