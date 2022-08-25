// Leetcode 29: Divide Two Integers
/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
 var divide = function (dividend, divisor) {
  
  if (dividend === -1 * Math.pow(2, 31)) {
    if (divisor === 1) {
      return -1 * Math.pow(2, 31);
    } else if (divisor === -1) {
      return Math.pow(2, 31) - 1;
    }
  } else if (dividend === Math.pow(2, 31) - 1) {
    if (divisor === 1) {
      return Math.pow(2, 31) - 1;
    } else if (divisor === -1) {
      return -1 * Math.pow(2, 31);
    }
  }
  
  let copy1 = dividend;
  let copy2 = divisor;
  dividend = Math.abs(dividend);
  divisor = Math.abs(divisor);

  let count = 0;
  while (dividend >= divisor) {
    count++;
    dividend = dividend - divisor;
  }

  if ((copy1 > 0 && copy2 > 0) && count >= Math.pow(2, 31) - 1) {
    return Math.pow(2, 31) - 1;
  } else if ((copy1 < 0 && copy2 < 0) && count >= Math.pow(2, 31) - 1) {
    return Math.pow(2, 31) - 1;
  } else if ((copy1 < 0 || copy2 < 0) && count >= Math.pow(2, 31)) {
    return -1 * (Math.pow(2, 31));
  }

  if (copy1 < 0 && copy2 < 0) {
    return count;
  } else if (copy1 < 0 || copy2 < 0) {
    return count * -1;
  } else {
    return count;
  }
};