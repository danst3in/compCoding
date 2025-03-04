// Definition of a binary tree node
// class TreeNode {
//   constructor(data) {
//     this.data = data;
//     this.left = null;
//     this.right = null;
//   }
// }

// Morris Traversal Solution - helpful explanation: https://dev.to/seanpgallivan/solution-flatten-binary-tree-to-linked-list-599p
export function flattenTree(root) {
  if (root == null) return;

  let curr = root;
  while (curr != null) {
    if (curr.left != null) {
      let runner = curr.left;
      while (runner.right != null) {
        runner = runner.right;
      }
      runner.right = curr.right;
      curr.right = curr.left;
      curr.left = null;
    }
    curr = curr.right;
  }
  return root;
}
