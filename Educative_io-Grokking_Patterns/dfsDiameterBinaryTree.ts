function diameterOfBinaryTree(root) {
  if (root == null) return 0;
  let diameter = 0;
  function dfs(node) {
    if (node == null) return 0;
    const left = dfs(node.left);
    const right = dfs(node.right);
    diameter = Math.max(diameter, left + right);
    return Math.max(left, right) + 1;
  }
  dfs(root);
  return diameter;
}

// Redo with cached heights

// function diameterOfBinaryTree(root) {
//   if (root == null) return 0;
//   let diameter = 0;
//   function dfs(node, cache = new Map()) {
//     if (node == null) return 0;
//     if (cache.has(node)) return cache.get(node);

//     const left = dfs(node.left, cache);
//     const right = dfs(node.right, cache);
//     diameter = Math.max(diameter, left + right);
//     const height = Math.max(left, right) + 1;
//     cache.set(node, height);
//     return height;
//   }
//   dfs(root);
//   return diameter;
// }
