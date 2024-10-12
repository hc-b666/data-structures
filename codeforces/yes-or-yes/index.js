function check(tss) {
  let res = [];

  for (let ts of tss) {
    if (!ts)continue;
    
    if (ts.toLowerCase() === "yes") res.push("YES");
    else res.push("NO");
  }

  return res;
}

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", (line) => input.push(line));

rl.on("close", () => {
  const tss = input.slice(1);
  const res = check(tss);

  res.forEach((r) => console.log(r));
});
