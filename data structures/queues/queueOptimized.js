class Queue {
  constructor() {
    this.items = {};
    this.front = 0;
    this.rear = 0;
  }
  // O(1)
  enqueue(value) {
    this.items[this.rear] = value;
    this.rear++;
  }
  // O(1)
  dequeue() {
    const item = this.items[this.front];
    delete this.items[this.front];
    this.front++;
    return item;
  }
  isEmpty() {
    return this.front - this.rear === 0;
  }
  peek() {
    return this.items[this.front]
  }
  size() {
    return this.rear - this.front;
  }
  print() {
    console.log(this.items);
  }
}

const queue = new Queue();
console.log(queue.isEmpty())

queue.enqueue(10)
queue.enqueue(20)
queue.enqueue(30)
console.log("Size of queue", queue.size())

queue.dequeue();
console.log(queue.peek())
queue.print();
console.log("Size of queue", queue.size())
