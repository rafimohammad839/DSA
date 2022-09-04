// Geeksforgeeks: Largest number in K swaps
// Problem Link: https://practice.geeksforgeeks.org/problems/largest-number-in-k-swaps-1587115620/1

// --------------------------------------------------------------- Optimal Solution | Time Complexity - O(n^k)
class Solution {
  //Function to find the largest number after k swaps.
  max = BigInt(0)
  findMaximumNum(str, k) {   
    // str: "12345", max = 12345
    // let max = [BigInt(str)];
    this.findMaximum(str, k, 0);
    return this.max.toString();
  }

   findMaximum(str, k, l) {
    if (k === 0) {
      return;
    }

    // let strArr = str.split('').map((val) => parseInt(val));
    let maxi = str[l];
    for (let i = l + 1; i < str.length; i++) {
      if (maxi < str[i]) {
        maxi = str[i];
      }
    }

    if (str[l] != maxi) {
      k -= 1;
    }

    for (let i = l; i < str.length; i++) {
      if (maxi == str[i]) {
        str = this.swap(str, i, l);
        if (BigInt(str) > this.max) {
          this.max = BigInt(str);
        }
        this.findMaximum(str, k, l + 1);
        str = this.swap(str, i, l);
      }
    }

  }

  swap(str, i, j) {
    let strArr = str.split('');
    let temp = strArr[i];
    strArr[i] = strArr[j];
    strArr[j] = temp;
    return strArr.join('');
  }
}

let sol = new Solution();
let res = sol.findMaximumNum("4867504573120052493", 3);
// Output: 9877604553120052443
console.log(res);