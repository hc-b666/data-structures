function goodprefix(tss) {
  let results = [];

  for (let i = 0; i < tss.length; i++) {
    if (i % 2 === 0) continue;

    let ts = tss[i];
    let nums = ts.split(" ").map(Number);
    let goods = 0;
    
    if (nums.length === 1 && nums[0] === 0) {
      results.push(1);
      continue;
    }

    if (nums.length === 1 && nums[0] === 1) {
      results.push(0);
      continue;
    }

    for (let i = 0; i < nums.length; i++) {
      
    }

    results.push(goods);
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
  const results = goodprefix(testCases);

  results.forEach((res) => console.log(res));
});
