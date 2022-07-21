/* Binary Search Tree using Recursion */
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
    } else {
      this.insertNode(this.root, newNode);
    }
  }

  insertNode(root, newNode) {
    if (newNode.value < root.value) {
      if (root.left === null) {
        root.left = newNode;
      } else {
        this.insertNode(root.left, newNode);
      }
    } else {
      if (root.right === null) {
        root.right = newNode;
      } else {
        this.insertNode(root.right, newNode);
      }
    }
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
console.log(bst.find(4)) // Finds the value & returns true if found