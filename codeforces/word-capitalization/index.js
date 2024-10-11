const capitalize = (word) =>  {
  return word[0].toUpperCase() + word.slice(1);
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
  const res = capitalize(input);

  console.log(res);
});
