//Leetcode 144: Binary Tree Preorder Traversal
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
 var preorderTraversal = function(root) {
  let list = [];
  preorder(root, list);
  return list;
}

function preorder(root, list) {
  if (root) {
      list.push(root.val);
      preorder(root.left, list);
      preorder(root.right, list);
  }
}