// Given a number of type string, convert it into number type
function strToInt(str, idx) {
  if (idx === 0) {
    return parseInt(str[0]);
  }
  let res = strToInt(str, idx - 1) * 10 + parseInt(str[idx]);
  return res;
}

let str = "53731";
let idx = str.length - 1;
console.log(strToInt(str, idx));