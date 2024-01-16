// Opening and closing signup and login forms
const btnOpenSignup = document.getElementById("btnOpenSignup");
const btnOpenLogin = document.getElementById("btnOpenLogin");
const btnCloseSignup = document.getElementById("btnCloseSignup");
const btnCloseLogin = document.getElementById("btnCloseLogin");
const signupForm = document.getElementById("signup-form");
const loginForm = document.getElementById("login-form");

function openSignupForm() 
{
	signupForm.style.display = "inline-block";
}

btnOpenSignup.onclick = openSignupForm;

function closeSignupForm() 
{
	signupForm.style.display = "none";
}

btnCloseSignup.onclick = closeSignupForm;

function openLoginForm() 
{
	loginForm.style.display = "inline-block";
}

btnOpenLogin.onclick = openLoginForm;

function closeLoginForm() 
{
	loginForm.style.display = "none";
}

btnCloseLogin.onclick = closeLoginForm;

// Get the login form elements
const loginEmailInput = document.getElementById("login-email");
const loginPasswordInput = document.getElementById("login-password");

// Client-side JS code for checking
// if they entered incorrect credentials in login form
loginForm.addEventListener("submit", function (event) 
{
	event.preventDefault();

	let email = loginEmailInput.value;
	let password = loginPasswordInput.value;

	fetch("/login", 
    {
		method: "POST",
		body: JSON.stringify({ email, password }),
		headers: { "Content-Type": "application/json" },
	})
		.then((response) => 
        {
			if (response.status === 401) 
            {
				alert("Incorrect email or password!");
			} 
            else 
            {
				window.location.href = "/";
			}
		})
		.catch((error) => console.error("Error:", error));
});
