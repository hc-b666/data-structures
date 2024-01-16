// 13 january 2024 
// DOM - Document Object Model

// document - this is the object that contains all the elements of the page 
// dom tree - this is the structure of the document html



// Select element by tag name - document.querySelector("tagName");
const heading1 = document.querySelector("h1");
heading1.style.textAlign = "center";
heading1.style.color = "royalblue";

// Select element by .class name - document.querySelector(.className);
const heading2 = document.querySelector(".heading2");
heading2.style.textAlign = "right";
heading2.style.padding = "20px";

// Select element by #id name - document.querySelector(#idName);
const heading3 = document.querySelector("#heading3");
heading3.style.textAlign = "center";
heading3.style.fontSize = "32px";
heading3.style.fontWeight = "100";
heading3.style.color = "green";

// Select element by using - document.getElementById("idName");
const heading4 = document.getElementById("heading4");
heading4.style.fontSize = "12px";
heading4.style.marginLeft = "100px";
heading4.style.color = "red";

// Select element by parent -> child - document.querySelector(".parentName .childName");



// When you selecting some element from html and if it cannot find it then it returns null to the variable



// textContent - this is the property that allows you to get the text of the element
// style - this is the property that allows you to get the style of the element