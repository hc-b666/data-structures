// Lesson 7 (11.01.2024)
// Practice day



// for (i = 1; i <= 40; i++) 
// {
//     if (i % 5 === 0 && i % 6 === 0)
//     {
//         console.log(i);
//         break;
//     }
// }



// for (i = 1; i <= 40; i++)
// {
//     if (i % 6 === 0 || i % 9 === 0 || i % 13 === 0)
//     {
//         continue;
//     } 
//     console.log(i);
// }



// function sumFunctionDeclaration(a = 1, b = 2, c =3)
// {
//     return a + b + c;
// }

// let sumDeclaration = sumFunctionDeclaration();
// console.log(sumDeclaration); 




// let sumFunctionExpression = function (a = 1, b = 2, c =3)
// {
//     return a + b + c;
// }

// let sumExpression = sumFunctionExpression(3, 4, 5);
// console.log(sumExpression); 



// let sumFunctionArrow = (a = 1, b = 2, c =3) =>
// {
//     return a + b + c;
// }

// let sumArrow = sumFunctionArrow(5, 6, 7);
// console.log(sumArrow); 



// let price = 100;

// let userName = prompt("What's your name? ");
// while(!userName)
// {
//     userName = prompt("What's your name? ");
// }

// let userPhone = prompt("What's your phone number? ");
// while (!userPhone)
// {
//     userPhone = prompt("What's your phone number? ");
// }

// let userHotelChoice = prompt("What's the hotel name? ");
// while (!userHotelChoice)
// {
//     userHotelChoice = prompt("What's the hotel name");
// }

// let userRoomTypeChoice = prompt("What kind of room you want? ");
// let userDays = prompt("How many days will you stay");



// function reverseHotel (name, phone, hotel, roomtype = 1, days = 1) 
// {
//     return `Hello ${name}! You ordered a ${roomtype} room in ${hotel}, for ${days} days. Our workers will call you on ${phone}. Total price: ${price * days}$`;
// }

// alert(reverseHotel(userName, userPhone, userHotelChoice, userRoomTypeChoice, userDays));




// let hotel = {
//     name: "Hilton",
//     location:
//     {
//         city: "Tashkent",
//         street: "Mustaqillik"
//     },
//     roomPrice:
//     {
//         1:"100",
//         2:"200",
//         3:"300",
//         4:"400"
//     }
// }

// let info = `${hotel.name} is in ${hotel.location.city} city, ${hotel.location.city}.\n Rooms \n 1 bed ${hotel.roomPrice[1]}\n 2 beds ${hotel.roomPrice[2]}\n 3 beds ${hotel.roomPrice[3]}.`;

// console.log(info);






// const products = 
// [
//     {
//       title: "un",
//       quantity: 12,
//       price: 4000,
//     },
//     {
//       title: "shakar",
//       quantity: 15,
//       price: 8000,
//     },
//     // {
//     //   title: "un",
//     //   quantity: 5,
//     //   price: 4000,
//     // },
// ];



// let infoProduct = `Omborda ${products[0].quantity}kg ${products[0].title} bor, jami ${products[0].quantity * products[0].price}som va ${products[1].quantity}kg ${products[1].title} bor, jami ${products[1].quantity * products[1].price}som. Omborda ${(products[0].quantity * products[0].price) + (products[1].quantity * products[1].price)} somlik tovar bor`;

// console.log(infoProduct);





// function inside function 








