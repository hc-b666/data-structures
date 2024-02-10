// February 9, 2024
// Task Manager App by Bobur
"use strict";

import { addTask, displayAllTasks } from "./js/taskFunctions.js";

const taskForm = document.getElementById("taskForm");

window.addEventListener("DOMContentLoaded", function ()
{
    displayAllTasks();
    taskForm.addEventListener("submit", addTask);
});