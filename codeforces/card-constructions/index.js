function construct(tss) {
  let results = [];

  for (let ts of tss) {
    if (!ts) continue;
    let totalcards = ts;
    let pyramids = 0;

    while (totalcards >= 2) {
      let cards = 0;
      let h = 0;

      while ( (cards + (3*h + 2)) <= totalcards ) {
        cards += 3*h+2;
        h++;
      }

      totalcards -= cards;
      pyramids++;
    }

    results.push(pyramids);
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
  const testCases = input.slice(1).map(Number);
  const results = construct(testCases);

  results.forEach((res) => console.log(res));
});

// pyramid cards needed 2 7 15 26 40
// increaseing -> 5 8 11 14