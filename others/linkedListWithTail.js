class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }
  isEmpty() {
    return this.size === 0;
  }
  getSize() {
    return this.size;
  }

  // O(1)
  prepend(value) {
    const newNode = new Node(value)
    if (this.isEmpty()) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.size++;
  }

  // O(1)
  append(value) {
    const newNode = new Node(value);
    if (this.isEmpty()) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.size++;
  }
  
  // O(1)
  removeFromFront() {
    if (this.isEmpty()) {
      return null;
    } 
    const value = this.head.value;
    this.head = this.head.next;
    this.size--;
    return value;
  }
  
  // O(n)
  removeFromLast() {
    if (this.isEmpty()) {
      return null;
    }
    let value = this.tail.value;
    if (this.size === 1) {
      this.head = null;
      this.tail = null;
    } else {
      let current = this.head;
      while (current.next !== this.tail) {
        current = current.next;
      }
      current.next = null;
      this.tail = current;
    }
    this.size--;
    return value;
  }
  
  // Print all the nodes in sequence
  print() {
    if (this.isEmpty()) {
      console.log("List is Empty!");
      return;
    }
    let current = this.head;
    let listValues = '';
    while (current !== null) {
      listValues += `${current.value} `;
      current = current.next;
    }
    console.log(listValues);
  }
}

export default LinkedList;

// let list = new LinkedList();
// console.log("List is empty?", list.isEmpty());

// list.append(1)
// list.append(2)
// list.append(3)
// list.prepend(0)
// list.print();

// console.log(list.removeFromFront())
// console.log(list.removeFromLast())

// console.log("List size:", list.size);