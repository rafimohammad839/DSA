// Solution 1: Recursive | Time - O(N) | Space - O(N)
// function reverse(str) {
//   if (str.length === 1) return str;
//   return str.charAt(str.length - 1) + reverse(str.slice(0, -1));
// }

// Solution 2: in-built methods | Time - O(N+K) | Space - O(N)
// function reverse(str) {
//   return str.split('').reverse().join('');
// }

// Solution 3: Using for-loop | Time - O(N) | Space - O(N)
// function reverse(str) {
//   let rev = '';
//   let len = str.length;
//   for (let i = len - 1; i >= 0; i--) {
//     rev += str[i];
//   }
//   return rev;
// }

// Solution 4: Most efficient way | In-place | Time - O(N/2) | Space - O(1)
// Requires a character array instead of string
function reverse(str) {
  let len = str.length;
  let halfLength = Math.trunc(len / 2);
  for (let i = 0; i < halfLength; i++) {
    let temp = str[i];
    str[i] = str[len - 1 - i];
    str[len - 1 - i] = temp
  }
}


let str = "hello";
let strToReverse = str.split('');
reverse(strToReverse);
console.log("Reversed String is:", strToReverse);