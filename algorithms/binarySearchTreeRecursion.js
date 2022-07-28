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
    const newNode = new Node(value);
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
  search(root, value) {
    if (!root) {
      return false;
    }
    if (root.value === value) {
      return true;
    } else if (value < root.value) {
      return this.search(root.left, value);
    } else {
      return this.search(root.right, value);
    }
  }

  // DFS Traversals - preorder, inorder and postorder
  preOrder(root) {
    if (root) {
      console.log(root.value);
      this.preOrder(root.left);
      this.preOrder(root.right);
    }
  }
  inOrder(root) {
    if (root) {
      this.inOrder(root.left);
      console.log(root.value);
      this.inOrder(root.right);
    }
  }
  postOrder(root) {
    if (root) {
      this.inOrder(root.left);
      this.inOrder(root.right);
      console.log(root.value);
    }
  }

  //BFS Traversal
  levelOrder() {
    let queue = [];
    queue.push(this.root);
    while (queue.length) {
      const current = queue.shift();
      console.log(current.value);
      if (current.left) {
        queue.push(current.left);
      }
      if (current.right) {
        queue.push(current.right);
      }
    }
  }

  // Finding min value
  min(root) {
    if (!root.left) {
      return root.value;
    }
    return this.min(root.left);
  }

  // Finding max value
  max(root) {
    if (!root.right) {
      return root.value;
    }
    return this.max(root.right);
  }
}

const bst = new BinarySearchTree()
bst.insert(10)
bst.insert(5)
bst.insert(15)
bst.insert(3)
bst.insert(7)

console.log('DFS Traversal: In-Order Traversal')
bst.inOrder(bst.root);

console.log('BFS Traversal: Level-Order Traversal')
bst.levelOrder(bst.root);
// Finding the min value
console.log("Min value: ", bst.min(bst.root))
// Finding the max value
console.log("Max value: ", bst.max(bst.root))