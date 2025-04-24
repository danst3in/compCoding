// Given a sentence, reverse the order of its words without affecting the order of letters within the given word.

function reverseWords(sentence: string) {
	let temp = sentence.trim().split(/\s+/);
	let left = 0,
		right = temp.length - 1;
	while (left < right) {
		[temp[left], temp[right]] = [temp[right], temp[left]];
		left++;
		right--;
	}
	return temp.concat().toString().replaceAll(',', ' '); // also works --> // return temp.join(" ");
}

console.log(
	'🚀 ~ reverseWord.ts:4 ~ reverseWords ~ reverseWords("We love JavaScript "):',
	reverseWords('We love JavaScript '),
);
console.log(
	'🚀 ~ reverseWord.ts:4 ~ reverseWords ~ reverseWords("Hello     World"):',
	reverseWords('Hello     World'),
);
