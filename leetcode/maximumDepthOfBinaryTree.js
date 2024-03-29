// Leetcode 104: Maximum Depth of Binary Tree
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
 * @return {number}
 */
var maxDepth = function(root) {
  let count = 0;
  let min = 0;
  function findDepth(root) {
    if (root === null) {
      return;
    }
    count += 1;
    min = Math.min(count, min);
    findDepth(root.left);
    findDepth(root.right);
    count -= 1;
  }
  findDepth(root);
  return min;
};