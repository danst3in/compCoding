// Definition of a binary tree node
class TreeNode {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

// Function to serialize tree into list of integers.
export function serialize(root) {
  const list = [];
  function dfsSerialize(node) {
    if (node == null || node.data == null) return;
    list.push(node.data);
    dfsSerialize(node.left);
    dfsSerialize(node.right);
    return;
  }
  dfsSerialize(root);
  return list;
}

// Function to deserialize integer list into a binary tree.
export function deserialize(stream) {
  function dfsCreate(list) {
    if (list.length === 0) return null;
    const node = new TreeNode(list.shift());
    const left = list.findIndex((value) => value > node.data);
    node.left = dfsCreate(list.slice(0, left));
    node.right = dfsCreate(list.slice(left));
    return node;
  }

  return dfsCreate(stream);
}

//  still failing on lists that are not in order
