// Given an array, colors, which contains a combination of the following three elements:
// 0(representing red), 1(representing white), 2(representing blue)
// Sort the array in place so that the elements of the same color are adjacent,
// with the colors in the order of red, white, and blue.To improve your problem - solving skills, do not utilize the built -in sort function.

// Optimized (?) second attempt with multiple pointers
// .10ms

function sortColors(colors: number[]) {
	let i = 0,
		red = 0,
		blue = colors.length - 1;
	while (i <= blue) {
		if (colors[i] == 0) {
			[colors[i], colors[red]] = [colors[red], colors[i]];
			red++;
			i++;
		} else if (colors[i] == 1) {
			i++;
		} else {
			[colors[i], colors[blue]] = [colors[blue], colors[i]];
			blue--;
		}
	}

	return colors;
}

// .09ms
// function sortColors(colors: number[]) {
// 	for (let i = 0; i < colors.length; i++) {
// 		if (colors[i] == 0) {
// 			let temp = colors.splice(i, 1);
// 			colors.unshift(temp[0]);
// 		} else if (colors[i] == 2) {
// 			let temp = colors.splice(i, 1);
// 			colors.push(temp[0]);
// 		}
// 	}

// 	return colors;
// }

console.log(
	'🚀 ~ sortColors.ts:7 ~ sortColors ~ sortColors([[0, 1, 0],[1, 1, 0, 2],[2, 1, 1, 0, 0],[2, 2, 2, 0, 1, 0],[2, 1, 1, 0, 1, 0, 2]]):',
	[
		[0, 1, 0],
		[1, 1, 0, 2],
		[2, 1, 1, 0, 0],
		[2, 2, 2, 0, 1, 0],
		[2, 1, 1, 0, 1, 0, 2],
	].forEach((arr) => {
		console.log(sortColors(arr));
	}),
);
