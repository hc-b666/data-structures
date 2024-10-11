function team(testCases) {
  let result = 0;

  for (let ts of testCases) {
    let nums = ts.split(" ").map(Number);
    let sum = nums.reduce((a, b) => a + b, 0);
    if (sum >= 2) result++; 
  }

  return result;
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
  const result = team(testCases);

  console.log(result);
});
