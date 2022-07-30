function reverse(str) {
  if (str.length === 1) return str;
  return str.charAt(str.length - 1) + reverse(str.slice(0, -1));
}

let strToReverse = "hello";
console.log(reverse(strToReverse));