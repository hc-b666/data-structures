const btnSignUp = document.getElementById("btnSignUp");
const formContainer = document.querySelector(".form-container");
const userInfo = document.getElementById("userInfo");
const formApplication = document.querySelector(".formApplication");

let signUpFunction = () => 
{
	formContainer.classList.toggle("form-container-clicked");
};

btnSignUp.addEventListener("click", signUpFunction);

let formSubmitFunction = (event) => 
{
	// Prevent the form from submitting normally
	event.preventDefault();

	// Update the userInfo section with the input values
	document.getElementById("userName").textContent = formApplication.userName.value;
	document.getElementById("userPhoneNumber").textContent = formApplication.userPhoneNumber.value;
	document.getElementById("userCountry").textContent = formApplication.userCountry.value;
	document.getElementById("userEmail").textContent = formApplication.userEmail.value;
	document.getElementById("userPassword").textContent = formApplication.userPassword.value;
};

// Add the event listener to the form
formApplication.addEventListener("submit", formSubmitFunction);
