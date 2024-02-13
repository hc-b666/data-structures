// Lesson 21
// February 13, 2024
// Topic: Promises - Default Asynchronous Operation
"use strict";

// Default Asynchronous Operations
// Promises
// Async / Await
// Callbacks
// Event Listeners
// Timers
// Fetch API
// AXIOS

window.addEventListener("DOMContentLoaded", function () 
{
	// Create a new promise
	let promise = new Promise(function (resolve, reject) 
    {
		// Simulate an error
		let shop = false;

		if (shop) 
        {
			resolve("I went to the shop and bought some bread.");
		} 
        else 
        {
			reject("The shop was closed, so I couldn't buy any bread");
		}
	});

	promise.then( (response) => 
    {
		console.log(response);
	}).catch( (error) => 
    {
		console.log(error);
	}).finally( () => 
    {
        console.log("I went to another shop");
    });
});

// API - Application Programming Interface
// get Read 200
// put Update 201
// post Create 204
// delete Delete 404
// CRUD - Create, Read, Update, Delete
// Data format JSON and SQL

// SQL DATA is saved in tables (mysql, postgres, sqlite, oracle, sql server, etc.)
// JSON DATA is saved in objects (mongodb, couchdb, etc.)

// JSON.stringify(object)
// JSON.parse(json)

// let http = new XMLHttpRequest();
// http.open("GET", "https://jsonplaceholder.typicode.com/users");

function getData() 
{
    fetch("https://jsonplaceholder.typicode.com/users", method = "GET").then(response => 
    {
        return response.json();
    });
}