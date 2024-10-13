const readline = require("readline");

function findfreeaccomodation(tss) {
  let res = 0;

  for (let ts of tss) {
    if (!ts) continue;
    let [a, b] = ts.split(" ").map(Number);
    
    if (b - a >= 2) res++;
  }

  return res;
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", (line) => input.push(line));

rl.on("close", () => {
  const testcases = input.slice(1);
  let result = findfreeaccomodation(testcases);

  console.log(result);
});
