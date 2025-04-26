// Given a string s, return the minimum number of moves required to transform s into a palindrome.
// In each move, you can swap any two adjacent characters in s.

// Note: The input string is guaranteed to be convertible into a palindrome.

function minMovesToMakePalindrome(s: string) {
	let moves = 0;
	let left = 0,
		right = s.length - 1;
	let a = s.split('');

	while (left < right) {
		// same character, do nothing
		if (a[left] == a[right]) {
			left++;
			right--;
		} else {
			// diff character, begin comparisons
			let j = right;
			while (j > left && a[left] != a[j]) {
				j--;
			}

			// no match found, move unique character towards center
			if (j == left) {
				[a[left], a[left + 1]] = [a[left + 1], a[left]];
				moves++;
			} else {
				// character found, move towards right (opposing position), need new pointer
				for (let k = j; k < right; k++) {
					[a[k], a[k + 1]] = [a[k + 1], a[k]];
					moves++;
				}
				left++;
				right--;
			}
		}
	}
	return moves;
}

// alt solution from provider...
/* function minMovesToMakePalindrome(s) {
    // Counter to keep track of the total number of swaps
    let moves = 0;

    // Loop to find a character from the right (s[j]) that
    // matches with a character from the left (s[i])
    for (let i = 0, j = s.length - 1; i < j; ++i) {
        let k = j;
        for (; k > i; --k) {
            // If a matching character is found
            if (s[i] === s[k]) {
                // Move the matching character to the correct position on the right
                for (; k < j; ++k) {
                    // Swap characters
                    let temp = s[k];
                    s = s.substring(0, k) + s[k + 1] + temp + s.substring(k + 2);
                    // Increment count of swaps
                    ++moves;
                }
                // Move the right pointer inwards
                --j;
                break;
            }
        }
        // If no matching character is found, it must be moved to the center of palindrome
        if (k === i) {
            moves += Math.floor(s.length / 2) - i;
        }
    }
    return moves;
}
 */

console.log(
	'🚀 ~ minMovesPalindrome.ts:9 ~ minMovesToMakePalindrome ~ minMovesToMakePalindrome:',
	minMovesToMakePalindrome('uwu'),
);
console.log(
	'🚀 ~ minMovesPalindrome.ts:9 ~ minMovesToMakePalindrome ~ minMovesToMakePalindrome:',
	minMovesToMakePalindrome('ccxx'),
);
console.log(
	'🚀 ~ minMovesPalindrome.ts:9 ~ minMovesToMakePalindrome ~ minMovesToMakePalindrome:',
	minMovesToMakePalindrome('arcacer'),
);

export { minMovesToMakePalindrome };
