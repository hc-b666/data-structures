// day 1 part 2
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

function convertStringToNumber(str) {
    const stringNumbers = [
        "zero",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
    ];
    return stringNumbers.indexOf(str.toLowerCase());
}

const arr = [
    "51591twosix4dhsxvgghxq",
    "425nine",
    "llvmhjtr8nbbhrfone",
    "lpbjvpbtdfvtxtdvkpjs7qrvddkzmjtlqtg",
    "3sixnineseven",
];

function twoDigitNumber(str) {
    let number = 0;
    let digits = str.match(
        /\d|\b(?:zero|one|two|three|four|five|six|seven|eight|nine)\b/gi
    );

    if (digits) {
        digits = digits.map((digit) =>
            isNaN(parseInt(digit))
                ? convertStringToNumber(digit)
                : parseInt(digit)
        );

        if (digits.length === 1) {
            number = parseInt(`${digits[0]}${digits[0]}`);
        } else if (digits.length > 1) {
            number = parseInt(`${digits[0]}${digits[digits.length - 1]}`);
        }
    }

    return number;
}

function test(arr) {
    return arr.map((str) => twoDigitNumber(str));
}

console.log(test(arr));
// processLineByLine().then(console.log);
