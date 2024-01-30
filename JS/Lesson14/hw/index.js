// Date year/month/date
"use strict";

const qs = tag => document.querySelector(tag);
const getID = tag => document.getElementById(tag);
const body = document.body;

const states = 
[
    {short: "MC", long: "Michigan", price: 100},
    {short: "CA", long: "California", price: 125},
    {short: "IL", long: "Illinois", price: 130},
    {short: "NY", long: "New York", price: 80}
];


window.addEventListener("DOMContentLoaded", () => 
{
    const fromDate = getID("fromDate");
    const toDate = getID("toDate");
    const whereSelect = getID("whereSelect");
    const totalP = getID("totalP");
    const btnOrder = getID("btnOrder");

    btnOrder.addEventListener("click", function () 
    {
        let from = new Date(fromDate.value);
        let to = new Date(toDate.value);
        let totalDays = (to - from) / (1000 * 60 * 60 *24);
        let state = states.find(state => state.short === whereSelect.value);
        let total = Number(totalP.value);
        let totalPrice = total * state.price;

        let h3 = document.createElement("h3");
        h3.textContent = `You ordered a ticket for ${total} people from ${from} to ${to} for ${state.long}. Total Price will be ${totalPrice}. Your travel will take ${totalDays} days.`;
        body.append(h3);
    });
});
