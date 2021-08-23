// Business Logic for To Do app
function  ToDoList() {
  this.tasks = {};
  this.currentId = 0;  
  this.isDone = Boolean;
};

ToDoList.prototype.addTask = function(task) {
  task.id = this.assignId();
  this.tasks[task.id] = task;
  this.isDone = false;
};

ToDoList.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId;
};

ToDoList.prototype.findTask = function(id) {
  if (this.tasks[id] != undefined) {
    return this.tasks[id];
  }
  return false;
};

ToDoList.prototype.deleteTask = function(id) {
  if (this.tasks[id] === undefined) {
    return false;
  }
  delete this.tasks[id];
  return true;
};


ToDoList.prototype.taskIsDone = function (id) {
  if (this.tasks[id] != undefined) {
    return this.isDone = true;  //delete the task?
  }
  return false;
}

// Business Logic for To Do app

function Task(name, when, where) {
  this.name = name;
  this.when = when;
  this.where = where;
}

Task.prototype.fullTask = function () {
  return this.name + " " + this.when + " " + this.where;  
};


let toDoList = new ToDoList();
let task1 = new Task("sleep", "9pm", "home");
let task2 = new Task("wakeup", "8am", "home");
let isDone = false;

toDoList.addTask(task1);
toDoList.addTask(task2);

console.log(toDoList.findTask(2));
//console.log(toDoList.deleteTask(2));