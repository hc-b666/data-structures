// How to accept user input



// 1. Window prompt
// let firstName;

// firstName = window.prompt("What is your first name?");

// console.log(`hi ${firstName}!`);



// 2. HTML input tag

let username;

document.getElementById("userSubmit").onclick = function() {
    username = document.getElementById("userFirstNameInput").value;
    document.getElementById("welcomeHeading").textContent = `Welcome ${username}!`;
}


