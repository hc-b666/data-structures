"use strict";

import NewTask from "./taskManager.js";

const createEl = tag => document.createElement(tag);
const container = document.querySelector(".tasks-container");

let tasks = [];

function handleTaskCheckedChange (id , isChecked)
{
    let taskToUpdate = tasks.find(task => task.id === id);
    if (taskToUpdate) taskToUpdate.completed = isChecked;
}

function createTaskElement (id, task, completed)
{
    let div = createEl("div");
    div.classList.add("tasks-div");

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

    let btnSetting = createEl("button");
    let settingIcon = createEl("i");
    settingIcon.className = "fa-solid fa-ellipsis";
    btnSetting.classList.add("btn-setting");
    btnSetting.append(settingIcon);
    btnSetting.addEventListener("click", (event) => 
    {
        event.stopPropagation();
        let settingsContainer = setting(id);
        div.append(settingsContainer);
    });

    div.append(taskCheckBox, taskLabel, btnSetting);
    return div;
}

function displayAllTasks (arr)
{
    container.innerHTML = "";
    if (!arr.length)
    {
        let alert = createEl("p");
        alert.textContent = "No tasks to display";
        container.append(alert);
        return;
    }
    arr.toReversed().forEach(item =>
    {
        let { id, task, completed } = item;
        let taskElement = createTaskElement(id, task, completed);
        container.append(taskElement);
    });
}

function deleteTask (id)
{
    let indexToDelete = tasks.findIndex(task => task.id === id);
    if (indexToDelete !== -1)
    {
        tasks.splice(indexToDelete, 1);
        displayAllTasks(tasks);
    }        
}

function editTask (id)
{
    let taskToEdit = tasks.find(task => task.id === id);
    if (taskToEdit) 
    {
        let newTaskName = window.prompt("Enter new task name", taskToEdit.task);
        if (newTaskName) 
        {
            taskToEdit.task = newTaskName;
            displayAllTasks(tasks);
        }
    }
}

function setting (id)
{
    let settingsContainer = createEl("div");
    settingsContainer.classList.add("setting-container");

    let btnEdit = createEl("button");
    btnEdit.textContent = "Edit";
    btnEdit.addEventListener("click", () => editTask(id));

    let btnDelete = createEl("button");
    btnDelete.textContent = "Delete";
    btnDelete.addEventListener("click", (event) => 
    {
        event.stopPropagation();
        deleteTask(id);
    }); 

    settingsContainer.append(btnEdit, btnDelete);
    document.addEventListener("click", function (event) 
    {
        if (!settingsContainer.contains(event.target))
        {
            settingsContainer.classList.add("not-visible");
        }
    });
    return settingsContainer;
}

function addTask (event)
{
    event.preventDefault();

    let taskValue = taskForm.newTask.value;
    let newTask = new NewTask((tasks.length + 1), taskValue, false);
    newTask.storeTask(tasks);
    displayAllTasks(tasks);
    taskForm.newTask.value = "";
}

function clearTasks ()
{
    tasks.length = 0;
    container.innerHTML = "";
    displayAllTasks(tasks);
}

function filterDoingTasks ()
{
    let doingTasks = tasks.filter(task => task.completed === false);
    container.innerHTML = "";
    displayAllTasks(doingTasks);
}

function filterDoneTasks ()
{
    let doneTasks = tasks.filter(task => task.completed === true);
    container.innerHTML = "";
    displayAllTasks(doneTasks);
}

export { addTask, displayAllTasks, clearTasks, filterDoingTasks, filterDoneTasks, tasks };