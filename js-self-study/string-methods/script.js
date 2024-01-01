// String Methods

// .charAt() - returns the character at the specified index
// For example:
let str1 = "Hello";
console.log(str1.charAt(4)); // 0

// .indexOf() - returns the index of the first occurrence of the specified value in a string
// For example:
let str2 = "Helloo";
console.log(str2.indexOf("o")); // 4

// .lastIndexOf() - returns the index of the last occurrence of the specified value in a string
// For example:
let str3 = "Hellllo";
console.log(str3.lastIndexOf("l")); // 5

// .length - returns the length of a string
// For example:
let str4 = "The amount of characters";
console.log(str4.length); // 24

// .trim() - removes whitespace from both sides of a string
// For example:
let str5 = " Removes whitespaces from left and right ";
console.log(str5.trim()); // "Removes whitespaces from left and right"

// .toUpperCase() - converts a string to uppercase letters
// For example:
let str6 = "uppercase";
console.log(str6.toUpperCase()); // "UPPERCASE"

// .toLowerCase() - converts a string to lowercase letters
// For example:
let str7 = "lowercase";
console.log(str7.toLowerCase()); // "lowercase"

// .repeat() - returns a new string with a specified number of copies of an existing string
// For example:
let str8 = "Hello";
console.log(str8.repeat(3)); // "HelloHelloHello"

// .startsWith() - checks whether a string begins with specified characters
// For example:
let str9 = "startsWith";
console.log(str9.startsWith("start")); // true

// .endsWith() - checks whether a string ends with specified characters
// For example:
let str10 = "Hello";
console.log(str10.endsWith("lo")); // true

// .includes() - checks whether a string contains the specified characters
// For example:
let str11 = "Hello";
console.log(str11.includes("a")); // false

// .replace() - replaces a specified value with another value in a string
// For example:
let str12 = "Hello";
console.log(str12.replace("l", "L")); // "HeLlo"

// .replaceAll() - replaces all occurrences of a specified value in a string
// For example:
let str13 = "Hello";
console.log(str13.replaceAll("l", "L")); // "HeLLo"

// .padStart() - pads the current string with another string until the resulting string reaches the given length
// For example:
let str14 = "Hello";
console.log(str14.padStart(11, "hey")); // "heyheyHello"

// .padEnd() - pads the current string with another string until the resulting string reaches the given length
// For example:
let str15 = "Hello";
console.log(str15.padEnd(11, "hey")); // "Helloheyhey"





// String Slicing 
// variable.slice(start, end)
// For example:
let fullName = "Muhammadbobur Abdukarimov";
let firstName = fullName.slice(0, 13);
let lastName = fullName.slice(14, 25);
let firstChar = fullName.slice(0, 1);
let lastChar = fullName.slice(-1);

// Dynamic and optimized version 
let firstNameD = fullName.slice(0, fullName.indexOf(" "));
let lastNameD = fullName.slice(fullName.indexOf(" ") + 1);

console.log(`First name: ${firstName}`);
console.log(`First name Dynamic version: ${firstNameD}`);
console.log(`Last name: ${lastName}`);
console.log(`Last name Dynamic version: ${lastNameD}`)
console.log(`First Char: ${firstChar}`);
console.log(`Last Char: ${lastChar}`);





// Method Chainning
let userName = "bobur0218programmer"; 

// Withoud method Chaining
userName = userName.trim();
let letter = userName.charAt(0);
letter = letter.toUpperCase();
let extraLetters = userName.slice(1);
extraLetters = extraLetters.toLowerCase();
userName = letter + extraLetters;

console.log(`Without Method Chaining ${userName}`);

// With method Chaining
userName = userName.trim().charAt(0).toUpperCase() + userName.trim().slice(1).toLowerCase();

console.log(`With Method Chaining ${userName}`);

