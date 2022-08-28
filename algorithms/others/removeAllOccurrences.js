// Question: Remove all occurrences of a character in a string/character array
function removeAllOcurrences(str, start, e) {
  if (!str[start]) return;
  console.log(str);
  removeAllOcurrences(str, start + 1, e);
  if (str[start] === e) {
    for (let i = 0; i < str.length - start - 1; i++) {
      str[start + i] = str[start + i + 1];
    }
    str.pop();
  }
}

let str = 'mohommadrafi';
let arr = str.split('');
removeAllOcurrences(arr, 0, 'o');
console.log(arr);