/* Questions: Find if the set of parentheses are valid or not
  Approach: 
  push if inverse of top element isn't at the top in stack
  pop if the top element is the inverse of the incoming element
  return true if stack is
  e.g., {[}] --> output : false
  {([])} --> output : true
*/
var isValid = function(input) {
  let inputArr = input.split("");
  let stack = [];
  for (let i = 0; i < inputArr.length; i++) {
    let char = inputArr[i];
    if (char === ")") {
      if (!stack.isEmpty && peek(stack) === "(") {
        stack.pop();
      } else {
        stack.push(char);
      }
    } else if (char === "}") {
      if (!stack.isEmpty && peek(stack) === "{") {
        stack.pop();
      } else {
        stack.push(char);
      }
    } else if (char === "]") {
      if (!stack.isEmpty && peek(stack) === "[") {
        stack.pop();
      } else {
        stack.push(char);
      }
    } else {
      stack.push(char);
    }

  }
  return isEmpty(stack);
}

function peek(arr) {
  let copyArr = [...arr];
  return copyArr.pop();
}

function isEmpty(arr) {
  return arr.length === 0 ? true : false;
}

const inputStr = "[{({()})}]";
console.log(isValid(inputStr));
