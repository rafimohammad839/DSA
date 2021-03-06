/* Binary Search Tree for searching a value faster 
as compared to an array data structure */
class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  isEmpty() {
    return this.root === null;
  }

  insert(value) {
    let newNode = new Node(value);
    if (this.isEmpty()) {
      this.root = newNode;
      return this;
    }
    let current = this.root;
    while (current) {
      if (value === current.value) return undefined;
      if (value < current.value) {
        if (current.left === null) {
          current.left = newNode;
          return this;
        }
        current = current.left;
      } else {
        if (current.right === null) {
          current.right = newNode;
          return this;
        }
        current = current.right;
      }
    }
    return this;
  }
  find(value) {
    if (this.isEmpty()) {
      return false;
    }
    if (value == this.root.value) {
      return true;
    }
    let found = false;
    let current = this.root;
    while (current) {
      if (value < current.value) {
        if (current.left !== null && value === current.left.value) {
          return true;
        }
        current = current.left;
      } else {
        if (current.right !== null && value === current.right.value) {
          return true;
        }
        current = current.right;
      }
    }
    return found;
  }
}

const bst = new BinarySearchTree();
bst.insert(4)
bst.insert(5)
bst.insert(8)
bst.insert(2)
bst.insert(1)
bst.insert(10)
console.log(bst) // Final BST
console.log(bst.find(8)) // Finds the value & returns true if found