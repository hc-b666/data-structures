const taskTitle = document.getElementById("taskTitle");
const taskDescription = document.getElementById("taskDescription");
const btnAddTask = document.getElementById("btnAddTask");

const taskContainer = document.querySelector(".tasks-container");

// Id of cards
let taskId = 0;

// Array of cards
let tasks = [];

function taskAdderFunction() {
    // Getting user inputs
	let taskTitleValue = taskTitle.value;
	let taskDescriptionValue = taskDescription.value;

    // Validation if inputs are empty
    if (!taskTitleValue.trim() || !taskDescriptionValue.trim()) 
    {
        alert("Both title and description are required!");
        return;
    }

    // Create a new task object
    let task = 
    {
        id: taskId++,
        title: taskTitle.value,
        description: taskDescription.value
    };

    tasks.push(task);

    // Creating new card
    let newTaskCard = document.createElement("div");
    newTaskCard.classList.add("tasks-cards");

    // Task Title of the card
    let newTaskTitleCardItems = document.createElement("div");
    newTaskTitleCardItems.classList.add("tasks-cards-items");
    let newTaskTitle = document.createElement("div");
    newTaskTitle.classList.add("task-title");
    let newTaskTitleH2 = document.createElement("h2");
    newTaskTitleH2.textContent = "Task Title";
    let newTaskTitleButton = document.createElement("button");
    let titleI = document.createElement("i");
    titleI.className = "fa-solid fa-pen-to-square";
    newTaskTitleButton.append(titleI);
    let newTaskTitleP = document.createElement("p");
    newTaskTitleP.textContent = taskTitleValue;

    newTaskTitle.append(newTaskTitleH2, newTaskTitleButton);
    newTaskTitleCardItems.append(newTaskTitle, newTaskTitleP);

    // Task Description of the card
    let newTaskDescriptionCardItems = document.createElement("div");
    newTaskDescriptionCardItems.classList.add("tasks-cards-items");
    let newTaskDescription = document.createElement("div");
    newTaskDescription.classList.add("task-description");
    let newTaskDescriptionH2 = document.createElement("h2");
    newTaskDescriptionH2.textContent = "Task Description";
    let newTaskDescriptionButton = document.createElement("button");
    let descriptionI = document.createElement("i");
    descriptionI.className = "fa-solid fa-pen-to-square";
    newTaskDescriptionButton.append(descriptionI);
    let newTaskDescriptionP = document.createElement("p");
    newTaskDescriptionP.textContent = taskDescriptionValue;

    newTaskDescription.append(newTaskDescriptionH2, newTaskDescriptionButton);
    newTaskDescriptionCardItems.append(newTaskDescription, newTaskDescriptionP);

    // Buttons div of the card
    let newTasksButtons = document.createElement("div");
    newTasksButtons.classList.add("tasks-buttons");
    let newTasksButtonsDone = document.createElement("button");
    newTasksButtonsDone.textContent = "Done";
    let newTasksButtonsDelete = document.createElement("button");
    newTasksButtonsDelete.textContent = "Delete";

    newTasksButtons.append(newTasksButtonsDone, newTasksButtonsDelete);

    // Add title and description to cards
    newTaskCard.append(newTaskTitleCardItems, newTaskDescriptionCardItems, newTasksButtons);

    // Adding Cards to Tasks-Container
    taskContainer.append(newTaskCard);
    taskTitle.value = "";
    taskDescription.value = "";

    // Delete card function 
    newTasksButtonsDelete.addEventListener("click", function () 
    {
        let index = tasks.findIndex((t) => t.id === task.id);
    
        if (index !== -1) 
        {
            tasks.splice(index, 1);
        }

        newTaskCard.remove();
    });
}

btnAddTask.addEventListener("click", taskAdderFunction);


