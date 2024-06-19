import { v4 as uuidv4} from "uuid";

export enum Status { Todo = "todo", Doing = "doing", Done = "done" }
export enum Priority { Low = "low", Medium = "medium", High = "high"}



interface TaskInterface {
  title: string;
  description: string;
  status: Status;
  priority: Priority;
  set taskStatus(status: Status);
  get taskId(): string;
  get taskCreatedAt(): Date;
}

export class Task implements TaskInterface {
  private id: string;
  public title: string;
  public description: string;
  public status: Status;
  public priority: Priority;
  private createdAt: Date;

  constructor(title: string, description: string, status: Status, priority: Priority) {
    this.id = uuidv4();
    this.title = title;
    this.description = description;
    this.status = status;
    this.priority = priority;
    this.createdAt = new Date();
  }

  set taskStatus(status: Status) {
    this.status = status;
  }

  get taskId() {
    return this.id;
  }

  get taskCreatedAt() {
    return this.createdAt;
  }
}



interface TasksInterface {
  name: string;
  tasks: Task[];
  get taskListTodo(): Task[];
  get taskListDoing(): Task[];
  get taskListDone(): Task[];
  addTask(title: string, description: string, status: Status, priority: Priority): void;
  completeTask(id: string, status: Status): void | string;
  removeTask(id: string): void | string;
}

export class Tasks implements TasksInterface {
  public name: string;
  public tasks: Task[];

  constructor(name: string) {
    this.name = name;
    this.tasks = [];
  }

  get taskListTodo() {
    return this.tasks.filter((task) => task.status === "todo");
  }  

  get taskListDoing() {
    return this.tasks.filter((task) => task.status === "doing");
  }

  get taskListDone() {
    return this.tasks.filter((task) => task.status === "done");
  }

  addTask(title: string, description: string, status: Status, priority: Priority) {
    const newTask = new Task(title, description, status, priority);
    this.tasks.push(newTask);
  }

  completeTask(id: string, status: Status) {
    const task = this.tasks.find((task) => task.taskId === id);
    if (task) {
      task.taskStatus = status;
    } else {
      return "Task not found";
    }
  }

  removeTask(id: string) {
    const taskIndex = this.tasks.findIndex((task) => task.taskId === id);
    if (taskIndex >= 0) {
      this.tasks.splice(taskIndex, 1);
    } else {
      return "Task not found";
    }
  }
}


