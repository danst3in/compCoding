// Definition of a binary tree node
// class TreeNode {
//   constructor(data) {
//     this.data = data;
//     this.left = null;
//     this.right = null;
//   }
// }

function mirrorBinaryTree(root) {
  if (!root) return null;
  if (root.left) {
    mirrorBinaryTree(root.left);
  }
  if (root.right) {
    mirrorBinaryTree(root.right);
  }
  let temp = root.left;
  root.left = root.right;
  root.right = temp;
  return root;
}
