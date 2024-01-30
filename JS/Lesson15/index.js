// 30 january 2024
function func() {
    alert("hello");
}
let body = document.body;

function bodyading(){
    let card = `<button onclick="func()">here</button>`
    
    body.insertAdjacentHTML("beforeend", card);
}

bodyading();


