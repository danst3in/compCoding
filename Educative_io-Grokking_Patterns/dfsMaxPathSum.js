// Given the root of a binary tree, return the maximum sum of any non-empty path.

// Definition of a binary tree node
// class TreeNode {
//   constructor(data) {
//     this.data = data;
//     this.left = null;
//     this.right = null;
//   }
// }

function maxPathSum(root) {
  if (!root) return 0;
  let maxSum = -Infinity;

  function traverse(node) {
    if (!node) return 0;
    let leftSum = 0;
    if (node.left) {
      leftSum = Math.max(0, traverse(node.left));
    }
    let rightSum = 0;
    if (node.right) {
      rightSum = Math.max(traverse(node.right), 0);
    }
    maxSum = Math.max(maxSum, node.data + leftSum + rightSum);
    return node.data + Math.max(leftSum, rightSum);
  }

  traverse(root);
  return maxSum;
}
