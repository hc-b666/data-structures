function toolongwords(testCases) {
  const results = [];

  for (let ts of testCases) {
    if (ts.length <= 10) {
      results.push(ts);
    } else {
      let firstChar = ts[0];
      let lastChar = ts[ts.length - 1];
      let numofletters = ts.length - 2;
      results.push(firstChar + numofletters + lastChar);
    }
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
  const testCases = input.slice(1).map((line) => line);
  const results = toolongwords(testCases);

  results.forEach((res) => console.log(res));
});
