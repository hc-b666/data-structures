"use strict";

let userData = [];
const API = "https://jsonplaceholder.typicode.com/users";
const tableHead = document.getElementById("tableHead");
const tableBody = document.getElementById("tableBody");

const createEl = tag => document.createElement(tag);

function getData (api)
{
    return fetch(api, { method: "GET" } )
        .then (res => 
        {
            return res.json();
        })
        .then (data => 
        {
            userData = data;
        })
        .catch (err => 
        {
            console.log(err);
        }) 
}

function displayHead (object)
{
    let tableRow = createEl("tr");
    const keys = Object.keys(object);
    keys.map(key => 
    {
        let tableData = createEl("td");
        tableData.textContent = key.charAt(0).toUpperCase() + key.slice(1).toLowerCase();
        tableRow.append(tableData);
    });
    tableHead.append(tableRow);
}

function displayBody (array)
{
    tableBody.innerHTML = "";
    array.map(object => 
    {
        let tableRow = createEl("tr");
        Object.entries(object).forEach(arr => 
        {
            let [ key, value ] = arr;
            if (typeof value === "object") 
            {
                let tableData = createEl("td")
                if (key === "address")
                {
                    let { street, suite, city, zipcode, geo } = value;
                    tableData.textContent = `${street}, ${city}, ${zipcode}`;
                }
                else if (key === "company")
                {
                    let { name, catchPhrase, bs } = value;
                    tableData.textContent = `${name}`;
                }
                tableRow.append(tableData);
            }
            else 
            {
                let tableData = createEl("td")
                tableData.textContent = `${value}`;
                tableRow.append(tableData);
            }
        });
        tableBody.append(tableRow);
    });
}

async function getData3 (api)
{
    const res = await fetch(api, { method: "GET" });
    const data = await res.json();
    console.log(data);
}

window.addEventListener("DOMContentLoaded", function ()
{
    getData(API);
    this.setTimeout(function ()
    {
        displayHead(userData[0]);
        displayBody(userData);
    }, 500);
});