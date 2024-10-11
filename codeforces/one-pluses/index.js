function maxBananas(t, testCases) {
	const results = [];

	for (let i = 0; i < t; i++) {
			let [a, b, c] = testCases[i].sort((x, y) => x - y);
			let increments = 5;

			while (increments > 0) {
					if (a <= b && a <= c) {
							a++;
					} else if (b <= a && b <= c) {
							b++;
					} else {
							c++;
					}
					increments--;
			}

			results.push(a * b * c);
	}

	return results;
}

const readline = require('readline');

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

let input = [];

rl.on('line', (line) => {
	input.push(line);
});

rl.on('close', () => {
	const t = parseInt(input[0], 10);
	const testCases = input.slice(1).map(line => line.split(' ').map(Number));

	const results = maxBananas(t, testCases);
	results.forEach(result => console.log(result));
});
