/**
 * @param {string} s
 * @return {string[]}
 */
class Stack {
  constructor() {
    this.items = [];
  }
  push(value) {
    this.items.push(value);
  }
  pop() {
    return this.items.pop();
  }
  peek() {
    return this.items[this.items.length - 1];
  }
  isEmpty() {
    return this.items.length === 0;
  }
  size() {
    return this.items.length;
  }
  print() {
    console.log(this.items.toString());
  }
}

function removeInvalidParentheses(str) {
  let min = minRemove(str);
  let result = [];
  let map = new Map();

  function remove(str, min) {
    // If the string already is in map, then return out of the function
    if (map.get(str) >= 1) {
      return;
    } else {
      map.set(str, 1);
    }

    if (min === 0) {
      if (minRemove(str) === 0) {
        result.push(str);
      }
      return;
    }
    
    // Recursively trying to remove each different character
    for (let i = 0; i < str.length; i++) {
      // "(a)())()"
      if (str[i] === "(" || str[i] === ")") {
        remove(str.substring(0, i) + str.substring(i + 1), min - 1);
      }
    }
  }

  remove(str, min);
  return result;
}

function minRemove(str) {
  let stack = new Stack();
  let len = str.length;
  // "(a)())()"
  for (let i = 0; i < len; i++) {
    if (str[i] === "(") {
      stack.push(str[i]);
    } else if (!stack.isEmpty() && str[i] === ")" && stack.peek() === "(") {
      stack.pop();
    } else if (str[i] === ")") {
      stack.push(str[i]);
    } else {
      continue;
    }
  }
  return stack.size();
}

let str = "(a)())()";
// Output: ["(a())()","(a)()()"]
console.log(removeInvalidParentheses(str));