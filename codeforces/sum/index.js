function isSumOfThird(testCases) {
  const results = [];

  for (let ts of testCases) {
    let [a, b, c] = ts.split(" ").map(Number);
    let res = (a + b === c) || (a + c === b) || (b + c === a) ? "YES" : "NO";
    results.push(res);
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
  const results = isSumOfThird(testCases);

  results.forEach(res => console.log(res));
});
