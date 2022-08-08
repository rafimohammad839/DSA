class CircularQueue {
  constructor(size) {
    this.items = new Array(size);
    this.capacity = size;
    this.currentQuantity = 0;
    this.front = -1;
    this.rear = -1;
  }
  isEmpty() {
    return this.currentQuantity === 0;
  }
  isFull() {
    return this.currentQuantity === this.capacity;
  }
  enqueue(element) {
    if (!this.isFull()) {
      this.rear = (this.rear + 1) % this.capacity;
      this.items[this.rear] = element;
      this.currentQuantity += 1;
      if (this.front === -1) {
        this.front += 1;
      }
    }
  }
  dequeue() {
    if (this.isEmpty()) {
      return null;
    }
    const element = this.items[this.front];
    this.items[this.front] = null;
    this.front = (this.front + 1) % this.capacity;
    this.currentQuantity -= 1;
    if (this.isEmpty()) {
      this.front = -1;
      this.rear = -1;
    }
  }
  peek() {
    if (!this.isEmpty()) {
      return this.items[this.front];
    }
    return null;
  }
  print() {
    if (this.isEmpty()) {
      console.log("Queue is empty!");
    } else {
      let strVal = "";
      let i;
      for (i = this.front; i !== this.rear; i = (i+1)%this.capacity) {
        strVal += this.items[i] + " ";
      }
      strVal += this.items[i];
      console.log(strVal);
    }
  }
}

let cq = new CircularQueue(5);
cq.enqueue(10)
cq.enqueue(20)
cq.enqueue(30)

cq.dequeue();
cq.print();