function isPalindrome(s: string) {
  const workingArr = s.split("");

  while (workingArr.length > 1) {
    let char1 = workingArr.shift();
    let char2 = workingArr.pop();
    if (char1 !== char2) {
      return false;
    }
  }
  return true;
}

export { isPalindrome };
