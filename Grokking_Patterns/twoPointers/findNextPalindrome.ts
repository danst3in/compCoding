// Given a string num_str representing a palindrome, the string only contains digits.
// Your task is to return the next possible palindrome using the same digits.
// The returned palindrome would be the next largest palindrome,
// meaning there can be more than one way to rearrange the digits to make a larger palindrome.
// Return an empty string if no greater palindrome can be made.

// Consider the following example to understand the expected output for a given numeric string:

// input string = "123321"

// possible palindromes = "213312", "231132", "312213", "132231", "321123"

// We should return the palindrome "132231" as it is greater than "123321" yet the smallest palindrome excluding the original palindrome.

function findNextPalindrome(numStr: string) {
	if (numStr.length <= 3) {
		return '';
	}
	let tempArr: string[] = [];

	let palArr: Set<number> = new Set<number>();

	if (numStr.length % 2 == 0) {
		tempArr = Array.from(numStr).splice(0, numStr.length / 2);
		// console.log(
		// '🚀 ~ findNextPalindrome.ts:23 ~ findNextPalindrome ~ leftArr:',
		// leftArr,
		// );
		for (let i = 0; i < tempArr.length; i++) {
			let right = tempArr.length - 1;
			while (right > 0) {
				if (tempArr[right] > tempArr[right - 1]) {
					[tempArr[right], tempArr[right - 1]] = [
						tempArr[right - 1],
						tempArr[right],
					];
					palArr.add(+tempArr.join(''));
				}
				right--;
			}
		}
		// return tempArr.concat(tempArr.reverse()).join('');
		let result = Math.min(+numStr, ...palArr).toString();
		return `${result + result.split('').reverse().join('')}`;
	} else {
		let middle: string = numStr[Math.floor(numStr.length / 2)];
		// console.log(
		// '🚀 ~ findNextPalindrome.ts:32 ~ findNextPalindrome ~ middle:',
		// middle,
		// );
		tempArr = Array.from(numStr).splice(0, numStr.length / 2);
		// console.log(
		// '🚀 ~ findNextPalindrome.ts:23 ~ findNextPalindrome ~ leftArr:',
		// leftArr,
		// );
		// let right = tempArr.length - 1;
		for (let i = 0; i < tempArr.length; i++) {
			let right = tempArr.length - 1;
			while (right > 0) {
				if (tempArr[right] > tempArr[right - 1]) {
					[tempArr[right], tempArr[right - 1]] = [
						tempArr[right - 1],
						tempArr[right],
					];
					palArr.add(+tempArr.join(''));
				}
				right--;
			}
		}
		// return tempArr.concat([middle]).concat(rightArr).join('');
		let result = Math.min(+numStr, ...palArr).toString();
		return `${result + middle + result.split('').reverse().join('')}`;
	}
}

// console.log(
// '🚀 ~ findNextPalindrome.ts:26 ~ findNextPalindrome("23143034132):',
// findNextPalindrome('23143034132'),
// );
// console.log(
// '🚀 ~ findNextPalindrome.ts:26 ~ findNextPalindrome("1001):',
// findNextPalindrome('1001'),
// );
export { findNextPalindrome };
