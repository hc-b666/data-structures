// To Do List App

const taskTitle = document.getElementById("taskTitle");
const description = document.getElementById("description");
const deadline = document.getElementById("deadline");
const btnAddTask = document.getElementById("btnAddTask");

btnAddTask.onclick = function() {
    if (taskTitle.value === "" || description.value === "" || deadline.value === "") {
        console.log("Please fill out all fields!");
    }
}
