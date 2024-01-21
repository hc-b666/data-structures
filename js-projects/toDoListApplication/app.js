const taskTitle = document.getElementById("taskTitle");
const taskDescription = document.getElementById("taskDescription");
const btnAddTask = document.getElementById("btnAddTask");

const taskContainer = document.querySelector(".tasks-container");

function taskAdderFunction() {
	let taskTitleValue = taskTitle.value;
	let taskDescriptionValue = taskDescription.value;

    let newTaskCard = document.createElement("div");
    newTaskCard.classList.add("tasks-cards");

    // Task Title
    let newTaskTitleCardItems = document.createElement("div");
    let newTaskTitle = document.createElement("div");
    let newTaskTitleH2 = document.createElement("h2");
    newTaskTitleH2.textContent = "Task Title";
    let newTaskTitleButton = document.createElement("button");
    let titleI = document.createElement("i");
    titleI.className = "fa-solid fa-pen-to-square";
    newTaskTitleButton.append(titleI);
    let newTaskTitleP = document.createElement("p");
    newTaskTitleP.textContent = taskTitleValue;

    newTaskTitleCardItems.classList.add("tasks-cards-items");
    newTaskTitle.classList.add("task-title");

    newTaskTitle.append(newTaskTitleH2, newTaskTitleButton);
    newTaskTitleCardItems.append(newTaskTitle, newTaskTitleP);

    // Task Description
    let newTaskDescriptionCardItems = document.createElement("div");
    let newTaskDescription = document.createElement("div");
    let newTaskDescriptionH2 = document.createElement("h2");
    newTaskDescriptionH2.textContent = "Task Description";
    let newTaskDescriptionButton = document.createElement("button");
    let descriptionI = document.createElement("i");
    descriptionI.className = "fa-solid fa-pen-to-square";
    newTaskDescriptionButton.append(descriptionI);
    let newTaskDescriptionP = document.createElement("p");
    newTaskDescriptionP.textContent = taskDescriptionValue;

    newTaskDescriptionCardItems.classList.add("tasks-cards-items");
    newTaskDescription.classList.add("task-description");

    newTaskDescription.append(newTaskDescriptionH2, newTaskDescriptionButton);
    newTaskDescriptionCardItems.append(newTaskDescription, newTaskDescriptionP);

    // Buttons div
    let newTasksButtons = document.createElement("div");
    newTasksButtons.classList.add("tasks-buttons");
    let newTasksButtonsDone = document.createElement("button");
    newTasksButtonsDone.textContent = "Done";
    let newTasksButtonsDelete = document.createElement("button");
    newTasksButtonsDelete.textContent = "Delete";

    newTasksButtons.append(newTasksButtonsDone, newTasksButtonsDelete);

    // New Cards
    newTaskCard.append(newTaskTitleCardItems, newTaskDescriptionCardItems, newTasksButtons);

    // Adding Cards to Tasks-Container
    taskContainer.append(newTaskCard);
}

btnAddTask.addEventListener("click", taskAdderFunction);


