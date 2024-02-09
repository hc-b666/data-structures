// February 9, 2024
// Task Manager App by Bobur
"use strict";

const createEl = tag => document.createElement(tag);

const taskForm = document.getElementById("taskForm");
const container = document.querySelector(".tasks-container");

let tasks = [];

class NewTask
{
    constructor (id, task, completed)
    {
        this.id = id;
        this.task = task;
        this.completed = completed;
    }

    storeTask()
    {
        let { id, task, completed } = this;
        tasks.push( {id: id, task: task, completed: completed} );
    }
}

function addTask(event)
{
    event.preventDefault();

    let taskValue = taskForm.newTask.value;

    let newTask = new NewTask((tasks.length + 1), taskValue, false);
    newTask.storeTask();
    displayAllTasks();

    taskForm.newTask.value = "";
}

function handleTaskCheckedChange(id , isChecked)
{
    let taskToUpdate = tasks.find(task => task.id === id);
    if (taskToUpdate) 
    {
        taskToUpdate.completed = isChecked;
    }
}

function createTaskElement(id, task, completed)
{
    let taskCheckBox = createEl("input");
    taskCheckBox.type = "checkbox";
    taskCheckBox.id = `checkbox${id}`;
    taskCheckBox.checked = completed;

    let taskLabel = createEl("label");
    taskLabel.textContent = task;
    taskLabel.htmlFor = `checkbox${id}`;

    if (completed) taskLabel.classList.add("checked");

    taskCheckBox.addEventListener("change", function () 
    {
        handleTaskCheckedChange(id, this.checked);
        taskLabel.classList.toggle("checked");
    });

    let div = createEl("div");
    div.classList.add("tasks-div");
    div.append(taskCheckBox, taskLabel);

    return div;
}

function displayAllTasks()
{
    if (!tasks.length)
    {
        let alert = createEl("p");
        alert.textContent = "No tasks to display";
        container.append(alert);
        return;
    }

    container.innerHTML = "";
    tasks.toReversed().forEach(item =>
    {
        let { id, task, completed } = item;
        let taskElement = createTaskElement(id, task, completed);
        container.append(taskElement);
    });
    console.log(tasks);
}

window.addEventListener("DOMContentLoaded", function ()
{
    displayAllTasks();
    taskForm.addEventListener("submit", addTask);
});