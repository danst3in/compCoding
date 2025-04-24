// Given a string word and an abbreviation abbr, return TRUE if
// the abbreviation matches the given string. Otherwise, return FALSE.
// A certain word "calendar" can be abbreviated as follows:
// "cal3ar" ("cal end ar" skipping three characters "end" from the word "calendar" still matches the provided abbreviation)
// "c6r" ("c alenda r" skipping six characters "alenda" from the word "calendar" still matches the provided abbreviation)
// The word "internationalization" can also be abbreviated as "i18n"
// (the abbreviation comes from skipping 18 characters in "internationalization", leaving the first and last letters "i" and "n").
// "physiotherapist" --> "3sio5pist"

// The following are not valid abbreviations:
// "c06r" (has leading zeroes)
// "cale0ndar" (replaces an empty string)
// "c24r" ("c al enda r" the replaced substrings are adjacent)

// 2nd attempt after viewing the suggested answer
function validWordAbbreviation(word: string, abbr: string) {
	let pWord = 0,
		pAbbr = 0;

	while (pAbbr < abbr.length) {
		// console.log(
		// 	'🚀 ~ validWordAbbrev.ts:20 ~ validWordAbbreviation ~ pWord, word[pWord]:',
		// 	pWord,
		// 	word[pWord],
		// );
		// console.log(
		// 	'🚀 ~ validWordAbbrev.ts:25 ~ validWordAbbreviation ~ pAbbr, abbr[pAbbr]:',
		// 	pAbbr,
		// 	abbr[pAbbr],
		// );
		if (Number.isFinite(Number(abbr[pAbbr]))) {
			if (abbr[pAbbr] == '0') return false;
			let numStr = 0;
			while (pAbbr < abbr.length && Number.isFinite(Number(abbr[pAbbr]))) {
				numStr = numStr * 10 + parseInt(abbr[pAbbr]);
				pAbbr++;
				console.log(
					'🚀 ~ validWordAbbrev.ts:38 ~ validWordAbbreviation ~ numStr:',
					numStr,
				);
			}
			pWord += numStr;
			console.log(
				'🚀 ~ validWordAbbrev.ts:42 ~ validWordAbbreviation ~ pWord, word[pWord]:',
				pWord,
				word[pWord],
			);

			console.log(
				'🚀 ~ validWordAbbrev.ts:48 ~ validWordAbbreviation ~ pAbbr, abbr[pAbbr]:',
				pAbbr,
				abbr[pAbbr],
			);
		} else {
			if (word[pWord] != abbr[pAbbr] || pWord >= word.length) {
				return false;
			}
			pWord++;
			pAbbr++;
		}
	}
	return pAbbr == abbr.length && pWord == word.length;
}

// First attempt failing some expanded test cases. Possibly due to not handling zeros properly and when the abbreviation skips to the end of the entire word
// function validWordAbbreviation(word: string, abbr: string) {
// 	let pWord = 0,
// 		pAbbr = 0;

// 	while (pAbbr < abbr.length && pWord < word.length) {
// 		// console.log(
// 		// 	'🚀 ~ validWordAbbrev.ts:20 ~ validWordAbbreviation ~ pWord, word[pWord]:',
// 		// 	pWord,
// 		// 	word[pWord],
// 		// );
// 		// console.log(
// 		// 	'🚀 ~ validWordAbbrev.ts:25 ~ validWordAbbreviation ~ pAbbr, abbr[pAbbr]:',
// 		// 	pAbbr,
// 		// 	abbr[pAbbr],
// 		// );
// 		if (
// 			Number.isFinite(Number(abbr[pAbbr])) &&
// 			Number.isFinite(Number(abbr[pAbbr + 1])) &&
// 			abbr[pAbbr] != '0'
// 		) {
// 			pWord += parseInt(`${abbr[pAbbr] + abbr[pAbbr + 1]}`, 10);
// 			pAbbr += 2;
// 		} else if (Number.isFinite(Number(abbr[pAbbr])) && abbr[pAbbr] != '0') {
// 			pWord += parseInt(abbr[pAbbr], 10);
// 			pAbbr++;
// 		}

// 		console.log(
// 			'🚀 ~ validWordAbbrev.ts:42 ~ validWordAbbreviation ~ pWord, word[pWord]:',
// 			pWord,
// 			word[pWord],
// 		);

// 		console.log(
// 			'🚀 ~ validWordAbbrev.ts:48 ~ validWordAbbreviation ~ pAbbr, abbr[pAbbr]:',
// 			pAbbr,
// 			abbr[pAbbr],
// 		);
// 		if (abbr[pAbbr] == '0' || word[pWord] != abbr[pAbbr]) {
// 			return false;
// 		} else {
// 			pWord++;
// 			pAbbr++;
// 		}
// 	}
// 	if (pAbbr != abbr.length && pWord != word.length) {
// 		return false;
// 	}

// 	return true;
// }

// expect true
console.log(
	'🚀 ~ validWordAbbrev.ts:64 ~ validWordAbbreviation("internationalization","13iz4n"):',
	validWordAbbreviation('internationalization', '13iz4n'),
);
// expect true
// console.log(
// 	'🚀 ~ validWordAbbrev.ts:68 ~ validWordAbbreviation("minimum","min2um"):',
// 	validWordAbbreviation('minimum', 'min2um'),
// );
// expect true
console.log(
	'🚀 ~ validWordAbbrev.ts:68 ~ validWordAbbreviation("kkusiyrkmr" , "10"):',
	validWordAbbreviation('kkusiyrkmr', '10'),
);
