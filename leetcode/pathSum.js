// Leetcode 112: Path Sum
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 */

// ------------------------------------------------------------------- Solution 1 | Stack
// Creating a regular stack class
// class Stack {
//   constructor() {
//     this.items = [];
//   }
//   push(val) {
//     this.items.push(val);
//   }
//   pop() {
//     return this.items.pop();
//   }
//   peek() {
//     return this.items[this.items.length - 1];
//   }
//   isEmpty() {
//     return this.items.length === 0;
//   }
// }


// var hasPathSum = function(root, targetSum) {
//     if (root === null) {
//         return false;
//     }
//     let curr_stack = new Stack();
//     let sum_stack = new Stack();
    
//     curr_stack.push(root);
//     sum_stack.push(targetSum - root.val);
    
//     while (!curr_stack.isEmpty()) {
        
//         let current_node = curr_stack.pop();
//         let sum = sum_stack.pop();
        
//         if (current_node.left === null && current_node.right === null && sum === 0) {
//             return true;
//         }
        
//         if (current_node.left !== null) {
//             curr_stack.push(current_node.left);
//             sum_stack.push(sum - current_node.left.val);
//         }
//         if (current_node.right !== null) {
//             curr_stack.push(current_node.right);
//             sum_stack.push(sum - current_node.right.val);
//         }
//     }
//     return false;
// };

// ------------------------------------------------------------------- Solution 2 | Depth First Search
var hasPathSum = function(root, targetSum) {
  function callDFS(currentNode, sum) {
      if (currentNode === null) {
          return false;
      }
      sum += currentNode.val;
      if (!currentNode.left && !currentNode.right) {
          return sum === targetSum;
      }
      return callDFS(currentNode.left, sum) || callDFS(currentNode.right, sum);
  }
  return callDFS(root, 0);
  
};

