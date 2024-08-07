function strStr(haystack: string, needle: string): number {
  const neeedle: number = needle.split("").length;

  for (let i = 0; i < haystack.length; i++) {
    let haaaystack: string = haystack.slice(i, i + neeedle);
    if (haaaystack === needle) {
      return i;
    }
  }

  return -1;
};
