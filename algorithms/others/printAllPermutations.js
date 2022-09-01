// Question: Write a program to print all permutations of a string
// Geeksforgeeks Link: https://www.geeksforgeeks.org/write-a-c-program-to-print-all-permutations-of-a-given-string/
// --------------------------------------------------------- Solution 1 | DIY
function permutation(str) {
  let output = "";
  function permute(str, output) {
    if (str.length === 0) {
      console.log(output);
      return;
    }
    for (let i = 0; i < str.length; i++) {
      let strArr = str.split('');
      strArr.splice(i, 1);
      let strNew = strArr.join('');
      permute(strNew, output + str[i]);
    }
  }
  permute(str, output);
}

let str = "abc";
permutation(str);