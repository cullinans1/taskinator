var formEl = document.querySelector("#task-form");
var tasksToDoEl = document.querySelector("#tasks-to-do");
var taskIdCounter = 0;

var taskFormHandler = function(event) {
    event.preventDefault();
    var taskNameInput = document.querySelector("input[name='task-name']").value;
    var taskTypeInput = document.querySelector("select[name='task-type']").value;
    if (!taskNameInput || !taskTypeInput) {
        alert("You need to fill out the task form completely!");
        return false;
    }
    formEl.reset();
    //put data into an objet
    var taskDataObj = {
        name: taskNameInput,
        type: taskTypeInput
    };
    //send it as an arugment to createTaskEL
    createTaskEl(taskDataObj);
}
var createTaskEl = function(taskDataObj) {
    //create list item
    var listItemEl = document.createElement("li");
    listItemEl.className = "task-item";
    //add task id as a custom attribute
    listItemEl.setAttribute("data-task-id", taskIdCounter);
    //create div to hold task info and add to list item
    var taskInfoEl= document.createElement("div");
    //give it a class name
    taskInfoEl.className = "task-info";
    // add HTMl content to div
    taskInfoEl.innerHTML = "<h3 class='task-name'>" + taskDataObj.name + "</h3><span class='task-type'>" + taskDataObj.type + "</span>";
    listItemEl.appendChild(taskInfoEl);
    //add entire list item to list
    tasksToDoEl.appendChild(listItemEl)
    //increase task counter for next unique ID
    taskIdCounter++;
}
formEl.addEventListener("submit" , taskFormHandler);