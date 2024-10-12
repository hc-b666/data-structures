function swap(testcases) {
  let results = [];

  for (let ts of testcases) {
    let [a, b] = ts.split(" ");
    let firstchara = a[0];
    let firstcharb = b[0];
    let achars = a.split("");
    achars[0] = firstcharb;
    let bchars = b.split("");
    bchars[0] = firstchara;
    results.push(`${achars.join("")} ${bchars.join("")}`);
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