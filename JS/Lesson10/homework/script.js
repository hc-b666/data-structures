const btnSignUp = document.getElementById("btnSignUp"); 
const formContainer = document.querySelector(".form-container");

let signUpFunction = () => 
{
    formContainer.classList.toggle("form-container-clicked");
}

btnSignUp.addEventListener("click", signUpFunction);

