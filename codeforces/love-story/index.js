function compare(tss) {
  let res = [];
  let word = "codeforces";

  for (let ts of tss) {
    if (!ts) continue;
    let indices = 0;
    for (let i = 0; i < ts.length; i++) {
      if (ts[i] !== word[i]) indices++;
    }
    res.push(indices);
  }

  return res;
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
  const tss = input.slice(1);
  const res = compare(tss);

  res.forEach((r) => console.log(r));
});
