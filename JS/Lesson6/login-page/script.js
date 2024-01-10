// Sign up DOMs
const signUpName = document.getElementById("sign-up-name");
const signUpEmail = document.getElementById("sign-up-email");
const signUpPassword = document.getElementById("sign-up-password");
const btnSignUp = document.getElementById("btn-sign-up");

// Log in DOMs
const logInName = document.getElementById("log-in-name");
const logInEmail = document.getElementById("log-in-email");
const logInPassword = document.getElementById("log-in-password");
const btnLogIn = document.getElementById("btn-log-in");

// USERS DATA
let usersArray = 
[
    {usersName: "BOBUR", usersEmail: "bobur0218.prvt@gmail.com", usersPassword: "Bobur0211cs"},
]


// SIGN UP | Function that adds users to Array
let functionSignUp = (uName, uEmail, uPassword) => 
{
    usersArray.push({usersName: uName, usersEmail: uEmail, usersPassword: uPassword});
}

// LOG IN | Function that checks if the user is in the ARRAY
let functionLogIn = (uName, uEmail, uPassword) => 
{
    for (let i = 0; i < usersArray.length; i++) 
    {
        if (usersArray[i].usersName === uName && usersArray[i].usersEmail === uEmail && usersArray[i].usersPassword === uPassword) 
        {
            return true;
        }
    } 
    return false; 
}


// VALIDATION Function
let validateInput = (uName, uEmail, uPassword) => 
{
    if (!uName) 
    {
        alert("Please enter your name.");
        return false;
    }
    else if (!uEmail || !uEmail.includes('@') || !uEmail.includes('.')) 
    {
        alert("Please enter a valid email address.");
        return false;
    }

    else if (!uPassword || uPassword.length < 8) 
    {
        alert("Your password should be at least 8 characters long.");
        return false;
    }
    else 
    {
        return true;
    }
}

// SIGN UP BUTTON
btnSignUp.onclick = function() 
{
    let uName = signUpName.value;
    let uEmail = signUpEmail.value;
    let uPassword = signUpPassword.value;

    if (validateInput(uName, uEmail, uPassword)) 
    {
        functionSignUp(uName, uEmail, uPassword);
        alert("You successfully registered to our website!");
    }
    console.log(usersArray);
}

// LOG IN BUTTON
btnLogIn.onclick = function() 
{
    let uName = logInName.value;
    let uEmail = logInEmail.value;
    let uPassword = logInPassword.value;

    if (validateInput(uName, uEmail, uPassword)) 
    {
        if (functionLogIn(uName, uEmail, uPassword)) 
        {
            alert("You successfully logged in!");
        }
        else
        {
            alert("Invalid credentials");
        }
    } 

}



