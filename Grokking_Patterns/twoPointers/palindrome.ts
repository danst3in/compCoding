// Optimized 3rd attempt
function isPalindrome(s: string) {
	if (s.length == 0) {
		return true;
	}

	let i = 0;
	let j = s.length - 1;

	while (i < j) {
		while (i < j && !/[a-zA-Z0-9]/.test(s[i])) {
			i++;
		}
		while (i < j && !/[a-zA-Z0-9]/.test(s[j])) {
			j--;
		}
		if (s[i].toLocaleLowerCase() !== s[j].toLowerCase()) {
			return false;
		}
		i++;
		j--;
	}
	return true;
}
// // Optimized 2nd attempt
// function isPalindrome(s: string) {
// 	let tempText = s.replace(/[\W_]/g, '').toLocaleLowerCase();
// 	if (tempText.length == 0) {
// 		return true;
// 	}

// 	let i = 0;
// 	let j = tempText.length - 1;

// 	while (i < j) {
// 		if (tempText[i] !== tempText[j]) {
// 			return false;
// 		}
// 		i++;
// 		j--;
// 	}
// 	return true;
// }

console.log('🚀 ~ isPalindrome("racecar"):', isPalindrome('racecar'));
console.log('🚀 ~ isPalindrome("kaYak"):', isPalindrome('kaYak'));
console.log(
	'🚀 ~ isPalindrome("Madam, in Eden, Im Adam"):',
	isPalindrome('Madam, in Eden, Im Adam'),
);
// function isPalindrome(s: string) {
//   const workingArr = s.split("");

//   while (workingArr.length > 1) {
//     let char1 = workingArr.shift();
//     let char2 = workingArr.pop();
//     if (char1 !== char2) {
//       return false;
//     }
//   }
//   return true;
// }

export { isPalindrome };
