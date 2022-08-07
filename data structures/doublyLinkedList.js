/* We use Doubly Linked List to get O(1) time complexity in 
  deletion of last node
*/
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
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
    const newNode = new Node(value);
    if (this.isEmpty()) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head.prev = newNode;
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
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.size++;
  }

  // O(1)
  removeFromFront() {
    if (this.isEmpty()) {
      return null;
    }
    let value = this.head.value;
    if (this.size === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head.next;
    }
    return value;
  }

  // O(1)
  removeFromLast() {
    if (this.isEmpty()) {
      return null;
    }
    let value = this.tail.value;
    if (this.size === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = this.tail.prev;
      this.tail.next = null;
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
    let listValues = "";
    while (current !== null) {
      listValues += `${current.value} `;
      current = current.next;
    }
    console.log(listValues);
  }
  // Print all the nodes in reverse order
  printReverse() {
    if (this.isEmpty()) {
      console.log("List is Empty!");
      return;
    }
    let current = this.tail;
    let listValues = "";
    while (current !== null) {
      listValues += `${current.value} `;
      current = current.prev;
    }
    console.log(listValues);
  }
}

let list = new DoublyLinkedList();
console.log("List is empty?", list.isEmpty());

list.append(10);
list.append(20);
list.append(30);
list.append(40);
list.print();

console.log("Removing from last, ", list.removeFromLast());
list.print();

list.prepend(450);
list.print();
console.log("Printing in reverse order");
list.printReverse();
