// Leetcode 728: Self Dividing Numbers
var selfDividingNumbers = function (left, right) {
  const selfDivisibles = [];
  for (let i = left; i <= right; i++) {
    let current = i.toString().split("");
    if (current.every((val) => i % val === 0)) {
      selfDivisibles.push(i);
    }
  }
  return selfDivisibles;
};

console.log(selfDividingNumbers(48, 85));

