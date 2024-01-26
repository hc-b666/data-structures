let productsArray = 
[
    {   
        title: "T-Shirts",
        imgSource: "./images/tshirts-men1.jpg",
    },
    {   
        title: "T-Shirts",
        imgSource: "./images/tshirts-men2.jpg",
    },
    {   
        title: "Jeans",
        imgSource: "./images/jeans-men1.jpg",
    },
    {   
        title: "Sneakers",
        imgSource: "./images/sneakers-men1.jpg",
    },
    {   
        title: "Jeans",
        imgSource: "./images/jeans-men2.jpg",
    },
    {   
        title: "T-Shirts",
        imgSource: "./images/tshirts-men3.jpg",
    },
    {   
        title: "Sneakers",
        imgSource: "./images/sneakers-men2.jpg",
    },
    {   
        title: "Sneakers",
        imgSource: "./images/sneakers-men3.jpg",
    },
    {   
        title: "Jeans",
        imgSource: "./images/jeans-men3.jpg",
    },
];

let container = document.querySelector(".container");
let userSelect = document.querySelector("select");
let btnReset = document.getElementById("btnReset");

function displayProducts (array) 
{
    container.innerHTML = "";
    array.forEach(item => 
    {
        let card = 
        `<div class="cards">
            <img src="${item.imgSource}">
            <div class="content">
                <h1>${item.title}</h1>
            </div>
        </div>`;
        container.insertAdjacentHTML("beforeend", card);
    }); 
}

function userSelectDisplay (event) 
{
    let selectedValue = event.target.value;
    let filteredProductsArray = productsArray.filter(item => item.title === selectedValue);

    displayProducts(filteredProductsArray);
}

displayProducts(productsArray);

userSelect.addEventListener("change", userSelectDisplay);

btnReset.addEventListener("click", () => displayProducts(productsArray));

