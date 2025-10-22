// 695. Max Area of Island
// Medium
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

// type Point = {
// 	x: number;
// 	y: number;
// };
// const dir = [
// 	[0, 1],
// 	[1, 0],
// 	[0, -1],
// 	[-1, 0],
// ];

// function walk(grid: number[][], curr: Point): number {
// 	// Base Cases
// 	// off grid
// 	if (curr.x < 0 || curr.x >= grid[0].length || curr.y < 0 || curr.y >= grid.length) {
// 		return 0;
// 	}

// 	// previously visted
// 	if (grid[curr.y][curr.x] === 0) {
// 		return 0;
// 	}
// 	// recursion section
// 	// pre
// 	grid[curr.y][curr.x] = 0;

// 	// start recurse
// 	// part of island
// 	let currArea = 1;

// 	// increment area
// 	for (let i = 0; i < dir.length; i++) {
// 		const [y, x] = dir[i];
// 		// increment area
// 		currArea += walk(grid, { x: curr.x + x, y: curr.y + y });
// 	}

// 	// post

// 	return currArea;
// }
// function maxAreaOfIsland(grid: number[][]): number {
// 	let maxArea = 0;

// 	// Base Cases
// 	// off grid
// 	// previously visted

// 	//  Need to accumulate current island area

// 	for (let i = 0; i < grid.length; i++) {
// 		for (let j = 0; j < grid[0].length; j++) {
// 			maxArea = Math.max(maxArea, walk(grid, { x: j, y: i }));
// 		}
// 	}

// 	// present results
// 	return maxArea;
// }

// practice repeat
const dir = [
	[0, 1],
	[0, -1],
	[1, 0],
	[-1, 0],
];
function walk(grid: number[][], m: number, n: number): number {
	// Base Cases
	// off the grid
	if (m < 0 || n < 0 || m >= grid.length || n >= grid[0].length) {
		return 0;
	}
	// prev seen
	if (grid[m][n] === 0) {
		return 0;
	}

	// mark seen
	grid[m][n] = 0;

	let currArea = 1;
	// recurse
	for (let i = 0; i < dir.length; i++) {
		const [x, y] = dir[i];
		currArea += walk(grid, m + x, n + y);
	}
	return currArea;
}
function maxAreaOfIsland(grid: number[][]): number {
	// find maximum
	let maxArea = 0;

	// iterate through all cells
	for (let i = 0; i < grid.length; i++) {
		for (let j = 0; j < grid[0].length; j++) {
			maxArea = Math.max(maxArea, walk(grid, i, j));
		}
	}
	return maxArea;
}
