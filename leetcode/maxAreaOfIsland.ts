// You are given an m x n binary matrix grid. An island is a group of 1's (representing land) connected 4-directionally (horizontal or vertical.) You may assume all four edges of the grid are surrounded by water.

// The area of an island is the number of cells with a value 1 in the island.

// Return the maximum area of an island in grid. If there is no island, return 0.

/* Input: grid = [[0,0,1,0,0,0,0,1,0,0,0,0,0],[0,0,0,0,0,0,0,1,1,1,0,0,0],[0,1,1,0,1,0,0,0,0,0,0,0,0],[0,1,0,0,1,1,0,0,1,0,1,0,0],[0,1,0,0,1,1,0,0,1,1,1,0,0],[0,0,0,0,0,0,0,0,0,0,1,0,0],[0,0,0,0,0,0,0,1,1,1,0,0,0],[0,0,0,0,0,0,0,1,1,0,0,0,0]]
Output: 6
Explanation: The answer is not 11, because the island must be connected 4-directionally.
Example 2:

Input: grid = [[0,0,0,0,0,0,0,0]]
Output: 0

Constraints:

m == grid.length
n == grid[i].length
1 <= m, n <= 50
grid[i][j] is either 0 or 1.
*/

type Point = {
	x: number;
	y: number;
};
const dir = [
	[0, 1],
	[1, 0],
	[0, -1],
	[-1, 0],
];

function walk(
	grid: number[][],
	curr: Point,
	// seen: boolean[][],
	// currArea: number,
): boolean {
	// Base Cases
	// off grid
	if (curr.x < 0 || curr.x >= grid[0].length || curr.y < 0 || curr.y >= grid.length) {
		return false;
	}

	// previously visted
	if (seen[curr.y][curr.x]) {
		return false;
	}
	// recursion section
	// pre
	seen[curr.y][curr.x] = true;

	// start recurse
	// part of island
	if (grid[curr.y][curr.x] === 1) {
		// increment area
		for (let i = 0; i < dir.length; i++) {
			const [x, y] = dir[i];
			if (walk(grid, { x: curr.x + x, y: curr.y + y }, seen, currArea)) {
				// increment area
				currArea++;
				// return true;
			}
		}
		return true;
	}

	// post

	return false;
}
function maxAreaOfIsland(grid: number[][]): number {
	let max = 0;

	// Base Cases
	// off grid
	// previously visted

	const seen: boolean[][] = [];
	// manually all to false
	for (let i = 0; i < grid.length; i++) {
		seen.push(new Array(grid[0].length).fill(false));
	}

	//  Need to accumulate current island area
	let currArea = 0;
	for (let i = 0; i < grid[0].length; i++) {
		for (let j = 0; j < grid.length; j++) {
			currArea = Math.max(currArea, walk(grid, { x: i, y: j }, seen, currArea));
		}
	}

	// present results
	return currArea;
}
