import LinkedList from "./linkedListWithTail";

class LinkedListStack {
  constructor() {
    this.list = new LinkedList();
  }

  push(value) {
    this.list.prepend(value);
  }

  pop() {
    return this.list.removeFromFront();
  }

  peek() {
    return this.list.head.value;
  }

  isEmpty() {
    return this.list.isEmpty();
  }

  getSize() {
    return this.list.size;
  }

  print() {
    this.list.print();
  }
}

const stack = new LinkedListStack();
console.log(stack.isEmpty());

stack.push(20)
stack.push(30)
stack.push(40)
stack.push(50)

console.log(stack.pop());
console.log(stack.getSize())

stack.print();