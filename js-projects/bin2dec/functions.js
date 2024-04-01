"use strict";

// BINARY 2 => DECIMAL 10
// OCTAL 8 => DECIMAL 10 its not working dunno why 
// HEX 16 => DECIMAL 10
export function baseToDecimalConverter(input, base) {
    let decimal = 0;
    let arr = input.split('').reverse();

    for (let i = 0; i < arr.length; i++) {
        let num = arr[i].toUpperCase();
        if (num >= 'A' && num <= 'F') {
            decimal += ((num.charCodeAt(0) - 55) * Math.pow(base, i));
        }
        else {
            decimal += (num * Math.pow(base, i));
        }
    }

    return decimal;
}

// DECIMAL 10 => BINARY 2
// DECIMAL 10 => OCTAL 8 
// DECIMAL 10 => HEX 16
export function decimalToBaseConverter(input, base) {
    let result = '';
    let inputValue = +input;

    while (inputValue) {
        let remainder = inputValue % base;
        if (remainder >= 10) {
            result += String.fromCharCode('A'.charCodeAt(0) + remainder - 10);
        }
        else {
            result += remainder;
        }
        inputValue = Math.floor(inputValue / base);
    }

    return result.split('').reverse().join('');
}
