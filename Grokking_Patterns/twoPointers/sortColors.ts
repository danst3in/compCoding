// Given an array, colors, which contains a combination of the following three elements:
// 0(representing red), 1(representing white), 2(representing blue)
// Sort the array in place so that the elements of the same color are adjacent,
// with the colors in the order of red, white, and blue.To improve your problem - solving skills, do not utilize the built -in sort function.

function sortColors(colors: number[]) {
	for (let i = 0; i < colors.length; i++) {
		if (colors[i] == 0) {
			let temp = colors.splice(i, 1);
			colors.unshift(temp[0]);
		} else if (colors[i] == 2) {
			let temp = colors.splice(i, 1);
			colors.push(temp[0]);
		}
	}

	return colors;
}

console.log(
	'🚀 ~ sortColors.ts:7 ~ sortColors ~ sortColors([0,1,0]):',
	sortColors([0, 1, 0]),
);
