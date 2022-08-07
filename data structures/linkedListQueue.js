const LinkedList = require('./linked-list');

class LinkedListQueue {
  constructor() {
    this.list = new LinkedList();
  }
  enqueue(value) {
    this.list.append(value);
  }
  dequeue() {
    return this.list.removeFromFront();
  }
  isEmpty() {
    return this.list.isEmpty();
  }
  getSize() {
    return this.list.getSize();
  }
  peek() {
    return this.list.head.value;
  }
  print() {
    this.list.print();
  }
}

const queue = new LinkedListQueue();
console.log("Queue is empty?", queue.isEmpty())

queue.enqueue(10)
queue.enqueue(20)
queue.enqueue(30)
queue.enqueue(40)

console.log(queue.dequeue());
console.log(queue.getSize())

queue.print();

console.log("Queue is empty?", queue.isEmpty())