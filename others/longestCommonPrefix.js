function longestCommonPrefix(arr) {
  let longestCommon = arr[0];
  for (let i = 1; i < arr.length; i++) {
    let current = arr[i];
    for (let i = 0; i < current.length; i++) {
      if (longestCommon.charAt(i) !== current.charAt(i)) {
        longestCommon = longestCommon.slice(0, i);
        break;
      }
    }
  }
  return longestCommon || -1;
}
const arr = ["friend", "fraud", "fraction", "freight"];
console.time();
console.log(longestCommonPrefix(arr));
console.timeEnd();