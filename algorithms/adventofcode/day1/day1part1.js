// day 1 part 1
// i got 55712 as the result 

const fs = require("fs");
const readline = require("readline");

async function processLineByLine() {
    let result = 0;
    const fileStream = fs.createReadStream("input.txt");

    const rl = readline.createInterface({
        input: fileStream,
        crlfDelay: Infinity,
    });

    for await (const line of rl) {
        result += twoDigitNumber(line);
    }

    return result;
}

function twoDigitNumber(str) {
    let number = 0;
    let digits = str.match(/\d/g);

    if (digits.length === 1) {
        number = parseInt(`${digits[0]}${digits[0]}`);
    } else if (digits.length > 1) {
        number = parseInt(`${digits[0]}${digits[digits.length - 1]}`);
    } else {
        return number;
    }

    return number;
}

processLineByLine().then(console.log)