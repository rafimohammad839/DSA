// ---------------------------------------------------------------- Solution 1 | Space - O(N)
// function replacePI(strArr) {
//   if (!strArr.length) return "";
//   if (strArr[0] === "p" && strArr[1] === "i") {
//     return "3.14" + replacePI(strArr.slice(2));
//   } else {
//     return strArr[0] + replacePI(strArr.slice(1));
//   }
// }
// ---------------------------------------------------------------- Solution 2 - In-place | Space - O(1)
function replacePI(arr, start) {
  if (arr[start] === undefined) {
    return;
  }
  replacePI(arr, start + 1);
  if (arr[start] === 'p' && arr[start + 1] === 'i') {
    for (let i = arr.length - 1; i >= start + 1; i--) {
      arr[i + 2] = arr[i];
    }
    arr[start] = '3';
    arr[start + 1] = '.';
    arr[start + 2] = '1';
    arr[start + 3] = '4';
  }
}

let arr = ['p', 'i', 'p', 'p', 'p', 'i', 'p'];
replacePI(arr, 0);
console.log(arr);