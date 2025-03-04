function threeSum(nums: number[]): number[][] {
	let sortedArr = nums.sort((a, b) => a - b);
	let result: number[][] = [];
	// can we assume sorted array will have valid entries?
	if (sortedArr[0] > 0) {
		return result; // If the smallest number is greater than 0, no triplet can sum to 0
	}

	for (let curr = 0; curr < sortedArr.length - 2 && sortedArr[curr] <= 0; curr++) {
		if (sortedArr[curr] > 0) {
			break; // If the smallest number is greater than 0, no triplet can sum to 0
		}
		if (curr > 0 && sortedArr[curr] === sortedArr[curr - 1]) {
			continue; // Skip duplicate elements
		}
		let left = curr + 1;
		let right = sortedArr.length - 1;

		while (left < right) {
			let currSum = sortedArr[curr] + sortedArr[left] + sortedArr[right];
			if (currSum === 0) {
				result.push([sortedArr[curr], sortedArr[left], sortedArr[right]]);
				left++;
				right--;
				while (left < right && sortedArr[left] === sortedArr[left + 1]) left++; // Skip duplicates
				while (left < right && sortedArr[right] === sortedArr[right - 1])
					right--; // Skip duplicates
			} else if (currSum < 0) {
				left++;
			} else {
				right--;
			}
		}
	}
	return result;
}

console.log('🚀 ~ threeSum ~ threeSum:', threeSum([-1, 0, 1, 2, -1, -4]));

export { threeSum };
