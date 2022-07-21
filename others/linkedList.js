class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }
  isEmpty() {
    return this.size === 0;
  }
  getSize() {
    return this.size;
  }
  prepend(value) {
    const newNode = new Node(value);
    if (this.isEmpty()) {
      this.head = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.size++;
  }
  append(value) {
    const newNode = new Node(value);
    if (this.isEmpty()) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }
    this.size++;
  }
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

let linkedList = new LinkedList();
console.log(linkedList.isEmpty());

linkedList.prepend(5); 
linkedList.prepend(2); 
linkedList.prepend(6); 
linkedList.print();
linkedList.prepend(8); 
linkedList.prepend(12); 
linkedList.print();
linkedList.append(25);
linkedList.append(40);
linkedList.append(50);
linkedList.print();

console.log(linkedList.getSize());