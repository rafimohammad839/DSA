// --------------------------------------------------------------------- Solution 1 | Backtracking | DIY
// function possibleDecodings(str) {
//   let output = [];
//   let res = [];
//   function decode(str, i) {
//     if (str.length === 0) {
//       let copy = JSON.parse(JSON.stringify(output));
//       for (let j = 0; j < copy.length; j++) {
//         let code = 96 + (parseInt(copy[j]));
//         let character = String.fromCharCode(code);
//         copy[j] = character;
//       }
//       res.push(copy.join(''));
//       return;
//     }

//     output.push(str[0]);
//     decode(str.slice(1), i + 1);
//     if (str.length <= 2) {
//       output.pop();
//     } else {
//       output.pop();
//       output.pop();
//     }
//     if (str.length >= 2) {
//       output.push(str[0] + str[1]);
//       decode(str.slice(2), i + 2);
//     }
//   }
//   decode(str, 0);
//   return res;
// }

// --------------------------------------------------------------------- Solution 2 | Non-backtracking 
// Problem on Geeksforgeeks: https://www.geeksforgeeks.org/print-all-possible-decodings-of-a-given-digit-sequence/
function possibleDecodings(str) {
  let result = [];
  let output = "";
  function decode(str, output) {
    if (str.length === 0) {
      console.log(output);
      return;
    }
    let code1 = parseInt(str[0]) + 96;
    let char1 = String.fromCharCode(code1);
    let b = parseInt(str.substring(0, 2))
    let code2 = b + 96;
    let char2 = String.fromCharCode(code2);
    decode(str.substring(1), output + char1);
    if (b >= 10 && b <= 26) {
      decode(str.substring(2), output + char2);
    }
  }
  decode(str, output);
}

let str = "1123";
possibleDecodings(str)

