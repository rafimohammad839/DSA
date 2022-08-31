// Possible Words From Phone Digits
function printKeyPadHelper(num, output, options) {
  if (num === 0) {
    console.log(output);
    return;
  }
  let n1 = num % 10;
  let s = options[n1];
  for (let i = 0; i < s.length; i++) {
    printKeyPadHelper(Math.floor(num / 10), s[i] + output, options);
  }
}

function printKeyPad(num) {
  let options = ["", "", "ABC", "DEF", "GHI", "JKL", "MNO", "PQRS", "TUV", "WXYZ"];
  printKeyPadHelper(num, "", options);
}

let num = 234;
printKeyPad(num);