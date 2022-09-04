/* Questions: Find if the set of parentheses are valid or not
  Approach: 
  push if inverse of top element isn't at the top in stack
  pop if the top element is the inverse of the incoming element
  return true if stack is
  e.g., {[}] --> output : false
  {([])} --> output : true
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
function isValid(str) {
  let stack = new Stack();
  let len = str.length;
  for (let i = 0; i < len; i++) {
    if (str[i] === "(" 
        || str[i] === "{" 
        || str[i] === "["
    ) {
      stack.push(str[i]);
    } else if (!stack.isEmpty()) {
      if (str[i] === ")" && stack.peek() === "(") {
        stack.pop();
      } else if (str[i] === "}" && stack.peek() === "{") {
        stack.pop();
      } else if (str[i] === "]" && stack.peek() === "[") {
        stack.pop();
      } else {
        stack.push(str[i]);
      }
    } else {
      stack.push(str[i]);
    }
  }
  return stack.isEmpty();
}

const inputStr = "[{({()})}]";
console.log(isValid(inputStr));
