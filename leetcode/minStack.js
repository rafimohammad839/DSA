// Leetcode 155: Min Stack

// Creating a regular stack class
var Stack = function() {
  this.items = [];
}
Stack.prototype.push = function(val) {
  this.items.push(val);
}
Stack.prototype.pop = function() {
  return this.items.pop();
}
Stack.prototype.peek = function() {
  return this.items[this.items.length - 1];
}

Stack.prototype.isEmpty = function () {
  return this.items.length === 0;
}

// Modified Stack class to get the minimum element in constant time
var MinStack = function () {
  this.stack = new Stack();
  this.min_vals = new Stack();
};

/**
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function (val) {
  if (this.min_vals.isEmpty() || val <= this.min_vals.peek()) {
    this.min_vals.push(val);
  }
  this.stack.push(val);
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  if (this.stack.peek() === this.min_vals.peek()) {
    this.min_vals.pop();
  }
  this.stack.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  return this.stack.peek();
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
  return this.min_vals.peek();
};

/**
 * @return {void}
 */
MinStack.prototype.display = function () {
  let items = this.stack.items;
  console.log(items);
}

// Your MinStack object will be instantiated and called as such:
let minStack = new MinStack();
minStack.push(10);
minStack.push(12);
minStack.push(7);
minStack.push(5);
minStack.push(3);

minStack.display();

console.log('Minimum element ', minStack.getMin());