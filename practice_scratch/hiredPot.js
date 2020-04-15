// posted by karandeep on discord
const solution = (pot) => {
  currIndex = 0;
  let queue = [];
  for (let i = 0; i < pot[0].length; i++) {
    if (pot[0][i] === 0) {
      queue.push([0, i]);
    }
  }
  while (currIndex < queue.length) {
    temp = addToQueue(pot, currIndex, queue);
    currIndex++;
    if (temp) return temp;
  }
  return false;
};

function addToQueue(pot, index, queue) {
  let currNode = queue[index];
  let value = pot[currNode[0]];
  if (value === undefined) return false;
  value = value[currNode[1]];
  if (value === undefined || value === 1) return false;
  if (currNode[0] === pot.length - 1 && value === 0) {
    return true;
  }
  let row = currNode[0];
  let col = currNode[1];
  pot[row][col] = 1;
  queue.push([row - 1, col], [row + 1, col], [row, col - 1], [row, col - 1]);
  return false;
}
