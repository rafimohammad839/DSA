// Leetcode 102: Binary Tree Level Order Traversal
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
 * @return {number[][]}
 */
var levelOrder = function(root) {
  let res = [];
  if (!root) return res;
  let myQueue = [];
  myQueue.push(root);
  while(myQueue.length) {
    let temp = [];
    let size = myQueue.length;
    for (let i = 0; i < size; i++) {
      let current = myQueue.shift();
      if (current.left) {
        myQueue.push(current.left);
      }
      if (current.right) {
        myQueue.push(current.right);
      }
      temp.push(current.val);
    }
    res.push(temp);
  }
  return res;
};
