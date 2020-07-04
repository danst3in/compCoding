/**
 * algodaily - Lowest common  ancestor
 * You're given a binary search tree and two of its child nodes as parameters. Can you write a method lowestCommonAncestor(root: Node, node1: Node, node2: Node) to identify the lowest common ancestor of the two nodes? The lowest common ancestor is the deepest node that has both of the two nodes as descendants.


 */

function lowestCommonAncestor(root, node1, node2) {
  // Fill in this method
  //   console.log(root.val, node1,node2)
  if (root === null) return null;
  if (node1 === root.val || node2 === root.val) {
    return root.val;
  }

  if (root.val > node2 && root.val > node1) {
    return lowestCommonAncestor(root.left, node1, node2);
  } else if (root.val < node1 && root.val < node2) {
    return lowestCommonAncestor(root.right, node1, node2);
  } else {
    //       console.log(root.val)
    return root.val;
  }

  return root.val;
}
