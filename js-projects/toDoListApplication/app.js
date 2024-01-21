const taskTitle = document.getElementById("taskTitle");
const taskDescription = document.getElementById("taskDescription");
const btnAddTask = document.getElementById("btnAddTask");

const taskContainer = document.querySelector(".tasks-container");

function taskAdderFunction() {
	let taskTitleValue = taskTitle.value;
	let taskDescriptionValue = taskDescription.value;

	let newTask = 
        `<div class="tasks-cards">
            <div class="tasks-cards-items">
                <div class="task-title">
                    <h2>Task Title</h2>
                    <button><i class="fa-solid fa-pen-to-square"></i></button>
                </div>
                <p>${taskTitleValue}</p>
            </div>
            <div class="tasks-cards-items">
                <div class="task-description">
                    <h2>Task Description</h2>
                    <button><i class="fa-solid fa-pen-to-square"></i></button>
                </div>
                <p>${taskDescriptionValue}</p>
            </div>
            <div class="tasks-buttons">
                <button>Done</button>
                <button>Delete</button>
            </div>
        </div>`;

    taskContainer.insertAdjacentHTML("beforeend", newTask);
}

btnAddTask.addEventListener("click", taskAdderFunction);
