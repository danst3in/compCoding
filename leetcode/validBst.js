/**
 * Leetcode
 * Validate Binary Search Tree
 * 
 * Given a binary tree, determine if it is a valid binary search tree (BST).

Assume a BST is defined as follows:

The left subtree of a node contains only nodes with keys less than the node's key.
The right subtree of a node contains only nodes with keys greater than the node's key.
Both the left and right subtrees must also be binary search trees.
 

Example 1:

    2
   / \
  1   3

Input: [2,1,3]
Output: true
Example 2:

    5
   / \
  1   4
     / \
    3   6

Input: [5,1,4,null,null,3,6]
Output: false
Explanation: The root node's value is 5 but its right child's value is 4.
 */

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
 * @return {boolean}
 */
// var isValidBST = function (root) {
//   const validHelp = (node, low = -Infinity, high = Infinity) => {
//     if (node === null) return true;

//     if (node.val <= low || node.val >= high) return false;

//     if (!validHelp(node.right, node.val, high)) return false;
//     if (!validHelp(node.left, low, node.val, high)) return false;

//     return true;
//   };
//   return validHelp(root);
// };

// console.log('isValidBST -> root.left', root.left)
//   console.log('isValidBST -> root.val', root.val)
//   console.log('isValidBST -> root.right', root.right)

// alternate solution, not working
// var isValidBST = function (root) {
//   if (!root) return true;
//   let val = root.val;

//   const validHelp = (node) => {
//     let stack = [[node, -Infinity, Infinity]];
//     while (stack.length) {
//       let [currentNode, lower, upper] = stack.pop();
//       if (!currentNode) continue;
//       val = currentNode.val;
//       if ((lower != null && val <= lower) || (upper != null && val >= upper))
//         return false;
//       stack.push([currentNode.right, val, upper]);
//       stack.push(currentNode.left, lower, val);
//     }
//     return true;
//   };
//   return validHelp(root);
// };

// DFS inorder solution
var isValidBST = function (root) {
  let arr = [];
  const traverse = (node) => {
    if (!node) return;
    traverse(node.left);
    arr.push(node.val);
    traverse(node.right);
  };

  traverse(root);

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] >= arr[i + 1]) return false;
  }
  return true;
};
