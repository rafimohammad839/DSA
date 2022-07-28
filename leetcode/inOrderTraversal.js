// Leetcode 94: Binary Tree Inorder Traversal
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
 * @return {number[]}
 */
 var inorderTraversal = function(root) {
  let list = [];
  let stack = [];
  let current = root;
  while (current || !isEmpty(stack)) {
    while (current) {
      stack.push(current);
      current = current.left;
    }
    current = stack.pop();
    list.push(current.val);
    current = current.right;
  }
  return list;
};

function isEmpty(stack) {
  return stack.length === 0;
}













