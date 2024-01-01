const subscribeCheckbox = document.getElementById("subscribeCheckbox");
const visaCardRadio = document.getElementById("visaCardRadio");
const masterCardRadio = document.getElementById("masterCardRadio");
const paypalRadio = document.getElementById("paypalRadio");
const submitButton = document.getElementById("submitButton");
const subscribeContent = document.getElementById("subscribeContent");
const paymentMethodContent = document.getElementById("paymentMethodContent");

submitButton.onclick = function() {
    // Ternary Operator
    // Ternary Operator is a shortcut for if-else statement
    // let variable: condition ? expression1 : expression2
    
    let message = subscribeCheckbox.checked ? `You are subscribed!` : `You are NOT subscribed!`;
    subscribeContent.textContent = message;

    if (visaCardRadio.checked) {
        paymentMethodContent.textContent = `You chose Visa Card Payment Method!`;
    }
    else if (masterCardRadio.checked) {
        paymentMethodContent.textContent = `You chose Master Card Payment Method!`;
    }
    else if (paypalRadio.checked) {
        paymentMethodContent.textContent = `You chose Paypal Payment Method!`;
    }
    else {
        paymentMethodContent.textContent = `You did not choose any Payment Method!`;
    }
}




