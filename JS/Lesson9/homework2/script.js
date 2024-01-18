let userName = document.getElementById("name");
let email = document.getElementById("email");
let number = document.getElementById("number");
let password = document.getElementById("password");
let btnSubmit = document.getElementById("btnSubmit");

btnSubmit.addEventListener("click", function () 
{
    userName = userName.value;
    email = email.value;
    number = number.value;
    password = password.value;

    alert(`You name is ${userName}. You signed up with ${email} and your number is ${number}.`);
});

