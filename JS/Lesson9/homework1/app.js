const imgApple = document.getElementById("imgApple");
const imgBanana = document.getElementById("imgBanana");
const imgOrange = document.getElementById("imgOrange");
const imgKiwi = document.getElementById("imgKiwi");
const imgName = document.getElementById("imgName");

imgApple.onmouseover = () => imgName.textContent = "Apple";
imgApple.onmouseleave = () => imgName.textContent = "";
imgBanana.onmouseover = () => imgName.textContent = "Banana";
imgBanana.onmouseleave = () => imgName.textContent = "";
imgOrange.onmouseover = () => imgName.textContent = "Orange";
imgOrange.onmouseleave = () => imgName.textContent = "";
imgKiwi.onmouseover = () => imgName.textContent = "Kiwi";
imgKiwi.onmouseleave = () => imgName.textContent = "";
