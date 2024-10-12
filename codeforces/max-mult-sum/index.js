function swap(testcases) {
  let results = [];

  for (let ts of testcases) {
    if (!ts) continue;
    let n = +ts;
    let overallmax = 0;
    let overallmaxnum = 0;
    for (let i = 2; i <= n; i++) {
      let max = 0;
      let j = 1;
      while (j * i <= n) {
        max += j*i;
        j++
      }
      if (max > overallmax) {
        overallmax = max;
        overallmaxnum = i;
      }
    }     
    results.push(overallmaxnum);
  }

  return results;
}

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", (line) => {
  input.push(line);
});

rl.on("close", () => {
  const testCases = input.slice(1);
  const results = swap(testCases);

  results.forEach((res) => console.log(res));
});