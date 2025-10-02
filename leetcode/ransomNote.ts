function canConstruct(ransomNote: string, magazine: string): boolean {
	let finalResult: boolean = true;

	const magCharMap: { [key: string]: number } = magazine.split('').reduce(
		(acc, curr, i) => {
			acc[curr] = (acc[curr] || 0) + 1;
			return acc;
		},
		{} as { [key: string]: number },
	);

	for (const char of ransomNote.split('')) {
		if (!magCharMap[char]) {
			finalResult = false;
			break;
		} else {
			magCharMap[char]--;
		}
	}

	return finalResult;
}
