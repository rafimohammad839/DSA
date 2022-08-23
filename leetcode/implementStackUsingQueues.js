// Leetcode 225: Implement Stack using Queues
var Queue = function() {
  this.items = [];
}
Queue.prototype.enqueue = function(val) {
  this.items.push(val);
}
Queue.prototype.dequeue = function() {
  return this.items.shift();
}
Queue.prototype.getSize = function() {
  return this.items.length;
}
Queue.prototype.isEmpty = function() {
  return this.items.length === 0;
}


var MyStack = function() {
  this.queue = new Queue();
};

/** 
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function(x) {
  this.queue.enqueue(x);
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function() {
  for (let i = 0; i < this.queue.getSize() - 1; i++) {
    this.queue.enqueue(this.queue.dequeue());
  }
  return this.queue.dequeue();
};

/**
 * @return {number}
 */
MyStack.prototype.top = function() {
  return this.queue.items[this.queue.getSize() - 1];
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function() {
  return this.queue.isEmpty();
};

let myStack = new MyStack();
myStack.push(10)
myStack.push(20)
myStack.push(30)

console.log(myStack.pop());