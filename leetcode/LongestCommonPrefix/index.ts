function longestCommonPrefix(strs: string[]): string {
  let commonprefix: string = "";

  for (let i = 0; i < strs[0].length; i++) {
    let curr: string = strs[0][i];
    let iscommon: boolean = true;

    for (let str of strs) {
      if (i >= str.length || str[i] !== curr) {
        iscommon = false;
        break;
      }
    }

    if (iscommon) {
      commonprefix += curr;
    } else {
      break;
    }
  }

  return commonprefix;
}
