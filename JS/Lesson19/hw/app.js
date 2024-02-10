// Started in February 9, 2024
// Task Manager App by Bobur
"use strict";

import { addTask, displayAllTasks, clearTasks, filterDoingTasks, filterDoneTasks, tasks } from "./js/taskFunctions.js";

const getID = tag => document.getElementById(tag);

const taskForm = getID("taskForm");
const btnClear = getID("btnClear");
const btnDoing = getID("btnDoing");
const btnDone = getID("btnDone");
const btnAll = getID("btnAll");

function focusButton(button)
{
    [btnAll, btnDoing, btnDone, btnClear].forEach(btn => btn.classList.remove("focused-btn"));
    button.classList.add("focused-btn");
}

window.addEventListener("DOMContentLoaded", function ()
{
    displayAllTasks(tasks);
    taskForm.addEventListener("submit", addTask);
    btnClear.addEventListener("click", function () 
    {
        clearTasks();
        focusButton(this);
    });
    
    btnDoing.addEventListener("click", function () 
    {
        filterDoingTasks();
        focusButton(this);
    });
    
    btnDone.addEventListener("click", function () 
    {
        filterDoneTasks();
        focusButton(this);
    });
    
    btnAll.addEventListener("click", function () 
    {
        displayAllTasks(tasks);
        focusButton(this);
    });
});