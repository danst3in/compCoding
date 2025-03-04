// Optimized 2nd attempt
function isPalindrome(s: string) {
	let i = 0;
	let j = s.length - 1;

	while (i < j) {
		if (s[i] !== s[j]) {
			return false;
		}
		i++;
		j--;
	}
	return true;
}

console.log('🚀 ~ isPalindrome("racecar"):', isPalindrome('racecar'));
console.log('🚀 ~ isPalindrome("kaYak"):', isPalindrome('kaYak'));
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
