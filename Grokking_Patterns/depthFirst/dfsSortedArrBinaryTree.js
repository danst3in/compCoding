// Definition of a binary tree node
// class TreeNode {
//   constructor(data) {
//     this.data = data;
//     this.left = null;
//     this.right = null;
//   }
// }

function sortedArrayToBST(nums) {
  if (nums.length === 0) return null;

  function findIdxBuild(sortedArr, idxLow, idxHigh) {
    if (idxLow > idxHigh) return null;

    let idxMid = Math.floor((idxLow + idxHigh) / 2);
    let node = new TreeNode(sortedArr[idxMid]);

    node.left = findIdxBuild(sortedArr, idxLow, idxMid - 1);
    node.right = findIdxBuild(sortedArr, idxMid + 1, idxHigh);
    return node;
  }

  return findIdxBuild(nums, 0, nums.length - 1);
}

export { sortedArrayToBST };
