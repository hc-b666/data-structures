let priceApple = 1.5;
let priceBanana = 2.5;
let priceOrange = 2.0;
let priceKiwi = 3.0;

let totalApplePrice = 0;
let totalBananaPrice = 0;
let totalOrangePrice = 0;
let totalKiwiPrice = 0;
let totalPrice = 0;

let totalApple = 0;
let totalBanana = 0;
let totalOrange = 0;
let totalKiwi = 0;



// TotalPriceCounter
const btnShowTotalPrice = document.getElementById("btnShowTotalPrice");
const totalPriceDisplay = document.getElementById("totalPriceDisplay");



// Apples
const btnApplesAdd = document.getElementById("btnApplesAdd");
const btnApplesRemove = document.getElementById("btnApplesRemove");
const totalApplesDisplay = document.getElementById("totalApplesDisplay");
const cardsApple = document.getElementById("cardsApple");

function functionAddApple() 
{
	totalApplePrice = 0;
	totalApple++;
	totalApplePrice = totalApplePrice + priceApple * totalApple;
	totalApplesDisplay.textContent = totalApple;
	if (totalApple >= 1) cardsApple.classList.add("chosenCards");
}

function functionRemoveApple() 
{
	if (totalApple >= 1) 
    {
		totalApple--;
		totalApplePrice = totalApplePrice - priceApple;
		totalApplesDisplay.textContent = totalApple;
	}
	if (totalApple === 0) cardsApple.classList.remove("chosenCards");
}

btnApplesAdd.addEventListener("click", functionAddApple);
btnApplesRemove.addEventListener("click", functionRemoveApple);



// Banana
const btnBananasAdd = document.getElementById("btnBananaAdd");
const btnBananasRemove = document.getElementById("btnBananaRemove");
const totalBananasDisplay = document.getElementById("totalBananaDisplay");
const cardsBanana = document.getElementById("cardsBanana");

function functionAddBanana() 
{
	totalBananaPrice = 0;
	totalBanana++;
	totalBananaPrice = totalBananaPrice + priceBanana * totalBanana;
	totalBananasDisplay.textContent = totalBanana;
	if (totalBanana >= 1) cardsBanana.classList.add("chosenCards");
}

function functionRemoveBanana() 
{
	if (totalBanana >= 1) 
    {
		totalBanana--;
		totalBananaPrice = totalBananaPrice - priceBanana;
		totalBananasDisplay.textContent = totalBanana;
	}
	if (totalBanana === 0) cardsBanana.classList.remove("chosenCards");
}

btnBananasAdd.addEventListener("click", functionAddBanana);
btnBananasRemove.addEventListener("click", functionRemoveBanana);



// Oranges
const btnOrangesAdd = document.getElementById("btnOrangeAdd");
const btnOrangesRemove = document.getElementById("btnOrangeRemove");
const totalOrangesDisplay = document.getElementById("totalOrangeDisplay");
const cardsOrange = document.getElementById("cardsOrange");

function functionAddOrange() 
{
	totalOrangePrice = 0;
	totalOrange++;
	totalOrangePrice = totalOrangePrice + priceOrange * totalOrange;
	totalOrangesDisplay.textContent = totalOrange;
	if (totalOrange >= 1) cardsOrange.classList.add("chosenCards");
}

function functionRemoveOrange() 
{
	if (totalOrange >= 1) 
    {
		totalOrange--;
		totalOrangePrice = totalOrangePrice - priceOrange;
		totalOrangesDisplay.textContent = totalOrange;
	}
	if (totalOrange === 0) cardsOrange.classList.remove("chosenCards");
}

btnOrangesAdd.addEventListener("click", functionAddOrange);
btnOrangesRemove.addEventListener("click", functionRemoveOrange);



// Kiwis
const btnKiwisAdd = document.getElementById("btnKiwiAdd");
const btnKiwisRemove = document.getElementById("btnKiwiRemove");
const totalKiwisDisplay = document.getElementById("totalKiwiDisplay");
const cardsKiwi = document.getElementById("cardsKiwi");

function functionAddKiwi() 
{
	totalKiwiPrice = 0;
	totalKiwi++;
	totalKiwiPrice = totalKiwiPrice + priceKiwi * totalKiwi;
	totalKiwisDisplay.textContent = totalKiwi;
	if (totalKiwi >= 1) cardsKiwi.classList.add("chosenCards");
}

function functionRemoveKiwi() 
{
	if (totalKiwi >= 1) 
    {
		totalKiwi--;
		totalKiwiPrice = totalKiwiPrice - priceKiwi;
		totalKiwisDisplay.textContent = totalKiwi;
	}
	if (totalKiwi === 0) cardsKiwi.classList.remove("chosenCards");
}

btnKiwisAdd.addEventListener("click", functionAddKiwi);
btnKiwisRemove.addEventListener("click", functionRemoveKiwi);

btnShowTotalPrice.addEventListener("click", function () 
{
	totalPriceDisplay.textContent = `${totalApplePrice + totalBananaPrice + totalOrangePrice + totalKiwiPrice}$`;
});
