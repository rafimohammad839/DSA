// Question: Write a program to print all permutations of a string
// Geeksforgeeks Link: https://www.geeksforgeeks.org/write-a-c-program-to-print-all-permutations-of-a-given-string/
// --------------------------------------------------------- Solution 1 | DIY
// function permutation(str) {
//   let output = "";
//   function permute(str, output) {
//     if (str.length === 0) {
//       console.log(output);
//       return;
//     }
//     for (let i = 0; i < str.length; i++) {
//       let strArr = str.split('');
//       strArr.splice(i, 1);
//       let strNew = strArr.join('');
//       permute(strNew, output + str[i]);
//     }
//   }
//   permute(str, output);
// }

// --------------------------------------------------------- Solution 2 
// function permutation(str) {
//   let output = "";
//   function permute(str, output) {
//     if (str.length === 0) {
//       console.log(output);
//       return;
//     }
//     for (let i = 0; i < str.length; i++) {
//       permute(str.substring(0, i) + str.substring(i + 1), output + str[i]);
//     }
//   }
//   permute(str, output);
// }

// --------------------------------------------------------- Solution 2 | Swapping 
function permutation(str) {
  let n = str.length;
  function permute(str, l, r) {
    if (l === r) {
      console.log(str);
      return;
    }
    for (let i = l; i <= r; i++) {
      str = swap(str, i, l);
      permute(str, l + 1, r);
    }
  }
  permute(str, 0, n - 1);
}

function swap(str, i, j) {
  let strArr = str.split('');
  let temp = strArr[i];
  strArr[i] = strArr[j];
  strArr[j] = temp;
  return strArr.join('');
}

let str = "abc";
permutation(str);