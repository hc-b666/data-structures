const sort = (equation) =>  {
  let snums = equation.split("+");
  let nums = snums.map(sn => +sn);
  let sorted = nums.sort((a, b) => a - b);

  return sorted.join("+");
}

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input;

rl.on('line', (line) => {
  input = line;
});

rl.on('close', () => {
  const res = sort(input);

  console.log(res);
});
