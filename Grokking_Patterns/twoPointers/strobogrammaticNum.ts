// Given a string num representing an integer, determine whether it is a strobogrammatic number. Return TRUE if the number is strobogrammatic or FALSE if it is not.

// Note: A strobogrammatic number appears the same when rotated
// 180 degrees (viewed upside down). For example, “69” is strobogrammatic because it looks the same when flipped upside down, while “962” is not.

function isStrobogrammatic(num: string) {
	if (num == '0') return true;
	const numArr = num.split('');
	const strobDict = {
		'0': '0',
		'1': '1',
		'6': '9',
		'8': '8',
		'9': '6',
	};
	let left = 0,
		right = numArr.length - 1;

	while (left <= right) {
		if (
			!strobDict.hasOwnProperty(numArr[left]) ||
			strobDict[numArr[left] as keyof typeof strobDict] != numArr[right]
		) {
			return false;
		}
		left++;
		right--;
	}

	return true;
}

console.log(
	'🚀 ~ strobogrammaticNum.ts:33 ~  isStrobogrammatic("818"):',
	isStrobogrammatic('818'),
);
console.log(
	'🚀 ~ strobogrammaticNum.ts:37 ~  isStrobogrammatic("88"):',
	isStrobogrammatic('88'),
);
