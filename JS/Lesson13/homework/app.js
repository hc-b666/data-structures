let productsArray = 
[
    {   
        type: "T-Shirts",
        brand: "Uniqlo",
        imgSource: "./images/tshirts-men1.jpg",
        price: 5,
    },
    {   
        type: "T-Shirts",
        brand: "Mott",
        imgSource: "./images/tshirts-men2.jpg",
        price: 10,
    },
    {   
        type: "Jeans",
        brand: "Denim",
        imgSource: "./images/jeans-men1.jpg",
        price: 40,
    },
    {   
        type: "Sneakers",
        brand: "New Balance",
        imgSource: "./images/sneakers-men1.jpg",
        price: 33,
    },
    {   
        type: "Jeans",
        brand: "Denim",
        imgSource: "./images/jeans-men2.jpg",
        price: 44,
    },
    {   
        type: "T-Shirts",
        brand: "Uniqlo",
        imgSource: "./images/tshirts-men3.jpg",
        price: 7,
    },
    {   
        type: "Sneakers",
        brand: "Balenciaga",
        imgSource: "./images/sneakers-men2.jpg",
        price: 77,
    },
    {   
        type: "Sneakers",
        brand: "Air Jordan",
        imgSource: "./images/sneakers-men3.jpg",
        price: 115,
    },
    {   
        type: "Jeans",
        brand: "Mott",
        imgSource: "./images/jeans-men3.jpg",
        price: 24,
    },
];

let container = document.querySelector(".container");
let userSelect = document.querySelector("select");
let btnReset = document.getElementById("btnReset");
let inputBrand = document.getElementById("inputBrand");
let btnSearch = document.getElementById("btnSearch");

function displayProducts (array) 
{
    container.innerHTML = "";
    array.forEach(product => 
    {
        let card = 
        `<div class="cards">
            <img src="${product.imgSource}">
            <div class="content">
                <h1>${product.type}</h1>
                <h1>${product.brand}</h1>
                <h1>$${product.price}</h1>
            </div>
        </div>`;
        container.insertAdjacentHTML("beforeend", card);
    }); 
}

function userSelectDisplay (event) 
{
    let selectedValue = event.target.value;
    let filteredProductsArray = productsArray.filter(product => product.type === selectedValue);

    displayProducts(filteredProductsArray);
}

function userInputSearch () 
{
    let sortedArray = [];

    let brandValue = inputBrand.value;
    brandValue = brandValue.trim().replaceAll(" ", "").toLowerCase();

    productsArray.forEach(product => 
    {
        let brand = product.brand.trim().replaceAll(" ", "").toLowerCase();
        if (brand.includes(brandValue)) 
        {
            sortedArray.push(product);
        } 
    });
    displayProducts(sortedArray);
}

displayProducts(productsArray);
userSelect.addEventListener("change", userSelectDisplay);
btnReset.addEventListener("click", () => displayProducts(productsArray));
btnSearch.addEventListener("click", userInputSearch);

