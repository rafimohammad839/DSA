//Leetcode 145: Binary Tree Postorder Traversal
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
 var postorderTraversal = function(root) {
  let list = [];
  postorder(root, list);
  return list;
};

function postorder(root, list) {
  if (root) {
      postorder(root.left, list);
      postorder(root.right, list);
      list.push(root.val);
  }
}