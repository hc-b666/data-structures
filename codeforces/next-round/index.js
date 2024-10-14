const readline = require('readline');
const { Z_TEXT } = require('zlib');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function nextround(n, k, scores) {
  let passed = 0;
  let lp = scores[k - 1];

  for (let score of scores) {
    if (score > 0 && score >= lp) passed++; 
  }

  return passed;
}

let input = [];

rl.on('line', (line) => input.push(line));

rl.on('close', () => {
  const [n, k] = input[0].split(" ").map(Number);
  const scores = input[1].split(" ").map(Number); 
  const res = nextround(n, k, scores);

  console.log(res);
});
