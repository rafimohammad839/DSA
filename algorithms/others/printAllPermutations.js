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

// let str = "abc";
// permutation(str);

// Geeksforgeeks solution
class Solution {
  constructor() {
    this.result = [];
  }
  find_permutation(S){
      let n = S.length;
      let myArr = S.split('');
      myArr.sort();
      let newStr = myArr.join('');
      this.permute(newStr, 0, n - 1);
      return this.result;
  }
  permute(str, l, r) {
    if (l === r) {
      this.result.push(str);
      return;
    }
    for (let i = l; i <= r; i++) {
      if (str[i] === str[l] && i !== l) continue;
      str = this.swap(str, i, l);
      this.permute(str, l + 1, r);
    }
  }
  swap(str, i, j) {
    let strArr = str.split('');
    let temp = strArr[i];
    strArr[i] = strArr[j];
    strArr[j] = temp;
    return strArr.join('');
  }
}


let sol = new Solution();
let resultArr = sol.find_permutation('LRJ');
console.log(resultArr.join(' '));