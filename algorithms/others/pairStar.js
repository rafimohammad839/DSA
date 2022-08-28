// Question: Given a string with repeated characters, insert a star i.e.” * “ between pair of adjacent identical characters using recursion.

// ------------------------ Method 1 | Bottom Up
// function replaceWithStar(str) {
//   function helperFun(str, start) {
//     if (!str[start]) return;
//     helperFun(str, start + 1);
//     if (str[start] === str[start + 1]) {
//       for (let i = str.length - 1; i >= start + 1; i--) {
//         str[i + 1] = str[i];
//       }
//       str[start + 1] = "*";
//     }
//   }
//   helperFun(str, 0);
// }
// ------------------------ Method 2 | Top Down
function replaceWithStar(input, i = 0) {
  output = output + input[i];
  if (i === input.length - 1) {
    return;
  }
  if (input[i] === input[i + 1]) {
    output = output + "*";
  }
  replaceWithStar(input, i + 1);
}

// Method 1
// let str = "xxxy";
// let strArr = str.split("");
// replaceWithStar(strArr);
// console.log(strArr.join(""));

// Method 2
let str = "xxxy";
let output = "";
replaceWithStar(str);
console.log(output);
