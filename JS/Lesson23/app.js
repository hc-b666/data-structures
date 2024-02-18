// February 17, 2024
// Review of JavaScript
"use strict";

window.addEventListener("DOMContentLoaded", () =>
{

});

// Intrepeter is a program that reads and executes code
// Compiler is a program that reads and translates code

let namee = "Elyor";
let age = 19;
let text = `My name is ${namee} and I am ${age} years old.`;

let number = "10";
let a = 4;
let result = +number + a;  // 14


// let userInput = prompt("Enter front end level language: ");
// userInput = userInput.trim().toLowerCase();
// switch (userInput)
// {
//     case "html":
//     case "css":
//         alert("first level");
//         break;
//     case "javascript":
//         alert("second level");
//         break;  
//     case "react":
//     case "angular":
//     case "vue":
//         alert("third level");
//         break;
//     default:
//         alert("this is not front end language");
//         break;
// }

let course = {
    title: "frontend", 
    duration: "8 months",
    learn(languages){
        let {title, duration} = this;
        let [lang1, lang2] = languages;
        console.log(`These are languages for ${title} course: ${lang1} and ${lang2}.`);
        console.log(`you are learning ${title} for ${duration}.`);
    }
};
course.learn(["html", "css"]);

let course1 = {
    title: "backend",
    duration: "10 months"
}

course.learn.bind(course1)(["nodejs", "express"]);

