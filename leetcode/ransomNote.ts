/* 383. Ransom Note
Solved
Easy

Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine and false otherwise.

Each letter in magazine can only be used once in ransomNote.

 

Example 1:

Input: ransomNote = "a", magazine = "b"
Output: false
Example 2:

Input: ransomNote = "aa", magazine = "ab"
Output: false
Example 3:

Input: ransomNote = "aa", magazine = "aab"
Output: true
 

Constraints:

1 <= ransomNote.length, magazine.length <= 105
ransomNote and magazine consist of lowercase English letters. */

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
