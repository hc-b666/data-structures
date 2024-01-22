// Exercise1
// const nameOfCar = document.getElementById("nameOfCar");
// const btnAudi = document.getElementById("btnAudi");
// const btnFord = document.getElementById("btnFord");
// const btnLamborghini = document.getElementById("btnLamborghini");
// const btnPorsche = document.getElementById("btnPorsche");
// const image = document.getElementById("images");

// btnAudi.addEventListener("click", function () 
// {
//     nameOfCar.textContent = "Audi";
//     image.src = "./images/audi.jpg";
// });

// btnFord.addEventListener("click", function () 
// {
//     nameOfCar.textContent = "Ford";
//     image.src = "./images/ford-mustang.jpg";
// });

// btnLamborghini.addEventListener("click", function () 
// {
//     nameOfCar.textContent = "Lamborghini";
//     image.src = "./images/lamborghini.jpg";
// });

// btnPorsche.addEventListener("click", function () 
// {
//     nameOfCar.textContent = "Porsche";
//     image.src = "./images/porsche.jpg";
// });

// Exercise 2
// const display = document.getElementById("display");
// const number1 = document.getElementById("number1");
// const number2 = document.getElementById("number2");
// const number3 = document.getElementById("number3");
// const btnMax = document.getElementById("btnMax");
// const btnMin = document.getElementById("btnMin");

// btnMax.addEventListener("click", function ()
// {
//     let max = 0;
//     let num1 = Number(number1.value);
//     let num2 = Number(number2.value);
//     let num3 = Number(number3.value);

//     if (num1 > num2) max = num1; 
//     else max = num2;
//     if (max < num3) max = num3;  

//     display.textContent = max;
// });

// btnMin.addEventListener("click", function () {
//     let min = number1.value;
//     let num2 = Number(number2.value);
//     let num3 = Number(number3.value);

//     if (min > num2) min = num2;
//     if (min > num3) min = num3;

//     display.textContent = min;
// });

// exercise3

// const display = document.getElementById("display");
// const inputMoney = document.getElementById("inputMoney");
// const inputCardNumber = document.getElementById("inputCardNumber");
// const inputHowMany = document.getElementById("inputHowMany");
// const btnSubmit = document.getElementById("btnSubmit");

// btnSubmit.addEventListener("click", function () 
// {
//     let money = Number(inputMoney.value);
//     let howmany = Number(inputHowMany.value);

//     if (money >= howmany) 
//     {
//         money = money - howmany;
//         display.textContent = `You have ${money} on your card. And You sent ${howmany} to ${inputCardNumber.value}`;
//     }

//     else 
//     {
//         display.textContent = `You don't have enough money on your card`;
//     }
// });






// Event bubbling
// let eventBubbling = (event) => event.stopPropagation();

// creating element
// let element = document.createElement("div");

// append
// document.body.append(element);

// appendChild
// document.body.appendChild(element);

// diffence between append and appendChild
// append -> can append many elements
// appendChild -> can append only one element

// insertadjacentHTML()
// element.insertAdjacentHTML("beforebegin", "<div>beforebegin</div>");
// element.insertAdjacentHTML("afterbegin", "<div>afterbegin</div>");
// element.insertAdjacentHTML("beforeend", "<div>beforeend</div>");
// element.insertAdjacentHTML("afterend", "<div>afterend</div>");








