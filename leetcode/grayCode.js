// Leetcode 89: Gray Code
/**
 * @param {number} n
 * @return {number[]}
 */
function grayCode(n) {
  let res = generate(n);
  res = res.map((val) => {
    return Number.parseInt(val, 2);
  })
  return res;
}

function generate(n) {
  if (n === 1) {
    return ['0', '1'];
  }
  let temp = generate(n - 1);
  let ans = [];
  for (let i = 0; i < temp.length; i++) {
    ans.push('0' + temp[i]);
  }
  for (let i = temp.length - 1; i >= 0; i--) {
    ans.push('1' + temp[i]);
  }
  return ans;
}