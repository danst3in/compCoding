class Solution {
  constructor() {
    this.ancestor = null;
  }
  lowestCommonAncestor(root, p, q) {
    this.traverseTree(root, p, q);
    return this.ancestor;
  }

  traverseTree(node, p, q) {
    if (!node) return false;

    let commonStatus = false,
      leftStatus = false,
      rightStatus = false;

    if (node === p || node === q) commonStatus = true;

    leftStatus = this.traverseTree(node.left, p, q);

    if (!this.ancestor) {
      rightStatus = this.traverseTree(node.right, p, q);
    }

    if (
      (leftStatus === rightStatus && leftStatus === true) ||
      (leftStatus === commonStatus && leftStatus === true) ||
      (commonStatus === rightStatus && commonStatus === true)
    ) {
      this.ancestor = node;
    }

    return commonStatus || leftStatus || rightStatus;
  }
}

export default Solution;
