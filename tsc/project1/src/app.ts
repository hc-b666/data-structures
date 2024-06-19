import { Task, Status, Priority } from "./models/tasks";

const CreateTaskButton = document.getElementById("create-task-button");

CreateTaskButton?.addEventListener("click", () => {
  const newTask = new Task("Task 2", "Description 2", Status.Todo, Priority.Medium);
  alert(`Task created: ${newTask.title}`);
});
