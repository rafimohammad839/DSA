// Reverse a portion of an array without mutating it
let arr = [2, 6, 5, 8, 3, 5, 2, 6, 7];
let start = 3, end = 7;

function reverse(arr) {
  const { length: l } = arr;
  for (let i = 0; i < Math.floor(l / 2); i++) {
    const temp = arr[i];
    arr[i] = arr[l - i - 1];
    arr[l - i - 1] = temp;
  }
  return arr;
}

function reverseBetween(arr, start, end) {
  let { length: l } = arr;
  let numCount = Math.min(end - start, l - start);
  arr.splice(start, 0, ...reverse(arr.splice(start, numCount)));
}

reverseBetween(arr, start, end);
console.log(arr);
