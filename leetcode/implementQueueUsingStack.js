// Leetcode 232: Implement Queue using Stacks

// Regular Stack class
var Stack = function () {
  this.items = [];
}

Stack.prototype.push = function (x) {
  this.items.push(x);
}

Stack.prototype.pop = function () {
  return this.items.pop();
}

Stack.prototype.peek = function () {
  return this.items[this.items.length - 1];
}

Stack.prototype.size = function () {
  return this.items.length;
}

Stack.prototype.isEmpty = function () {
  return this.items.length === 0;
}

// Modified Stack 'MyQueue' for Queue Operations
var MyQueue = function() {
  this.first = new Stack();
  this.second = new Stack();
};

/** 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
  while (!this.first.isEmpty()) {
    this.second.push(this.first.pop());
  }
  this.first.push(x);
  while (!this.second.isEmpty()) {
    this.first.push(this.second.pop());
  }
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function() {
  return this.first.pop();
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function() {
  return this.first.peek();
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
  return this.first.isEmpty();
};

MyQueue.prototype.display = function () {
  console.log(this.first);
}

let myQueue = new MyQueue();
myQueue.push(10)
myQueue.push(12)
myQueue.push(15)
myQueue.push(8)

// Displaying queue
myQueue.display();

console.log('Element that came first:', myQueue.pop());

// Displaying queue
myQueue.display()