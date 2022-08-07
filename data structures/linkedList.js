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
  // Insert a node at the beginning
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
  // Insert a node at the end
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
  // Insert a node at a particular position
  insertAt(position, value) {
    if (position > this.size + 1 || position <= 0) {
      console.log("Enter valid position");
    } else if (position === 1) {
      this.prepend(value);
    } else {
      let newNode = new Node(value);
      let counter = 1;
      let current = this.head;
      while (counter < position - 1) {
        current = current.next;
        counter++;
      }
      let tempNext = current.next;
      current.next = newNode;
      newNode.next = tempNext;
      this.size++;
    }
  }
  // Delete a node at the beginning
  deleteFirst() {
    this.head = this.head.next;
    this.size--;
  }

  // Deleting a node at the end
  deleteLast() {
    let current = this.head;
    while (current.next.next) {
      current = current.next;
    }
    current.next = null;
    this.size--;
  }

  // Deleting a node with specific value
  deleteAtPosition(position) {
    if (position > this.size || position <= 0) {
      console.log("Enter valid position");
    } else {
      let counter = 1;
      let current = this.head;
      while (counter < position - 1) {
        current = current.next;
        counter++;
      }
      current.next = current.next.next;
      this.size--;
    }
  }

  // Reversing the linkedlist
  reverseList() {
    if (this.isEmpty()) {
      console.log("LinkedList is empty");
      return;
    }
    let prev = null;
    let current = this.head;
    while (current) {
      let tempNext = current.next;
      current.next = prev;
      prev = current;
      current = tempNext;
    }
    this.head = prev;
  }

  // Only printing in reverse order
  printReverseLinkedList(head) {
    if (head === null) return;
    this.printReverseLinkedList(head.next);
    console.log(head.value);
  }

  // Search a value in LinkedList
  searchValue(value) {
    if (this.isEmpty()) {
      console.log("LinkedList is empty");
      return;
    }
    let counter = 1;
    let current = this.head;
    while (current) {
      if (current.value === value) {
        return counter;
      } else {
        counter++;
        current = current.next;
      }
    }
    return -1;
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

let linkedList = new LinkedList();

// Inserting at beginning

linkedList.prepend(5); 
linkedList.prepend(2); 
linkedList.prepend(6); 
linkedList.print();
linkedList.prepend(8); 
linkedList.prepend(12); 
linkedList.print();

// Inserting at end
linkedList.append(25);
linkedList.append(40);
linkedList.append(50);
linkedList.print();

// Inserting at position 4
linkedList.insertAt(4, 65);
linkedList.print();

// Inserting at position 10
linkedList.insertAt(10, 70);
linkedList.print();

// Deleting the first node
linkedList.deleteFirst();
linkedList.deleteFirst();
linkedList.deleteFirst();
linkedList.print()
// Deleting the last node
linkedList.deleteLast();
linkedList.print();

console.log();
// Deleting nodes at specific positions
linkedList.deleteAtPosition(4);
linkedList.print();
linkedList.deleteAtPosition(2);
linkedList.print();

// Printing in reverseOrder
linkedList.printReverseLinkedList(linkedList.head);

// Reversing the linkedlist
console.log("Reversing the linked list:");
linkedList.reverseList();
linkedList.print();

// Searching a value in linkedlist
console.log(linkedList.searchValue(5));

console.log("LinkedList size:", linkedList.getSize());