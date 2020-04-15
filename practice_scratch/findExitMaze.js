// posted by Bahram on discord

const findExit = (maze, sR, sC, dR, dC) => {
  const xlen = maze[0].length;
  const ylen = maze.length;

  if (maze[sR][sC] === 1) return false;

  const move = (y, x) => {
    if (y < 0 || y >= ylen) return;
    if (x < 0 || x >= xlen) return;
    if (maze[y][x] === 1 || maze[y][x] === "*") return;

    if (maze[y][x] === 0) {
      maze[y][x] = "*";
      move(y + 1, x);
      move(y - 1, x);
      move(y, x + 1);
      move(y, x - 1);
    }
  };
  move(sR, sC);
  if (maze[dR][dC] === "*") return true;
  return false;
};

const maze = [
  [1, 0, 0, 1],
  [1, 1, 0, 1],
  [0, 1, 0, 1],
];
console.log(findExit(maze, 0, 0, 2, 2));

const maze2 = [
  [0, 0],
  [1, 0],
];
console.log(findExit(maze2, 0, 0, 1, 1));

const maze3 = [
  [0, 1],
  [1, 0],
];
console.log(findExit(maze3, 0, 0, 1, 1));

const maze4 = [
  [1, 0, 0, 1, 1],
  [1, 1, 0, 1, 1],
  [1, 0, 0, 1, 1],
  [1, 0, 1, 1, 0],
  [1, 0, 0, 0, 0],
];
console.log(findExit(maze4, 0, 1, 3, 4));

const maze5 = [
  [1, 0, 0, 1, 1],
  [1, 1, 0, 1, 1],
  [1, 0, 0, 1, 1],
  [1, 0, 1, 1, 0],
  [1, 0, 0, 0, 1],
];
console.log(findExit(maze5, 0, 1, 3, 4));
