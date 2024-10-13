function beautifulyearfinder(line) {
  let year = parseInt(line) + 1;
  
  while (!hasDistinctDigits(year)) {
    year++;
  }

  return year;
}

function hasDistinctDigits(year) {
  const digits = year.toString().split('');
  const uniqueDigits = new Set(digits);
  return uniqueDigits.size === digits.length;
}

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input;

rl.on("line", (line) => (input = line));

rl.on("close", () => {
  let res = beautifulyearfinder(input);
  console.log(res);
});
