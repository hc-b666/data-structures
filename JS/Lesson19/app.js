// February 8, 2024 Lesson 19
"use strict";

window.addEventListener("DOMContentLoaded", function ()
{

});

// user.greet.call(user2, "argument", "argument") 
// user.greet.apply(user2, ["argument", "argument"])
// user.bind(user2, "argument", "argument")() 

// oop object oriented programming
// Class is a blueprint for creating objects 
class User
{
    constructor(name, age)
    {
        this.name = name;
        this.age = age;
    }

    greet()
    {
        console.log(`Hello, ${this.name}`);
    }
}

// Abstraction is a concept of hiding the implementation details and showing only the functionality to the user
// Encapsulation is a concept of wrapping the data and the methods that work on the data within one unit
// Inheritance is a concept of creating a new class using the properties and methods of an existing class
// Polymorphism is a concept of using a single type entity to represent different types in different scenarios

// super() is used to call the constructor of the parent class

// fp functional programming
