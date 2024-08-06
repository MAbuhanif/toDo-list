document.addEventListener("DOMContentLoaded", function() {
  var taskInput = document.getElementById("task-input");
  var addTaskBtn = document.getElementById("add-task-btn");
  var taskList = document.getElementById("task-list");
  // Event listener for the Add Task button
  addTaskBtn.addEventListener("click", function() {
    var taskText = taskInput.value.trim();
    if (taskText !== "") {
      addTask(taskText);
      taskInput.value = "";
      taskInput.classList.remove("error");
      removeErrorMessage();
    } else {
      taskInput.classList.add("error");
      displayErrorMessage("Task can not be empty!");
    }
  });
  // Event listener for input changes in the task input field
  taskInput.addEventListener("input", function() {
    if (taskInput.value.trim() !== "") {
      taskInput.classList.remove("error");
      removeErrorMessage();
    }
  });
  /**
   * Adds a new task to the task list
   * The text of the task to add
   */
  function addTask(taskText) {
    var taskItem = document.createElement("li");
    taskItem.className = "task-item";

    var taskSpan = document.createElement("span");
    taskSpan.textContent = taskText;

    var taskButtons = document.createElement("div");
    taskButtons.className = "task-buttons";

    // Create and configure the Complete button
    var completeBtn = document.createElement("button");
    completeBtn.className = "complete-btn";
    completeBtn.innerHTML = '<i class="fas fa-check"></i>';
    completeBtn.addEventListener("click", function() {
      taskItem.classList.toggle("completed");
    });
    // Create and configure the Delete button
    var deleteBtn = document.createElement("button");
    deleteBtn.className = "delete-btn";
    deleteBtn.innerHTML = '<i class="fas fa-trash"></i>';
    deleteBtn.addEventListener("click", function() {
      taskItem.remove();
    });
    taskButtons.appendChild(completeBtn);
    taskButtons.appendChild(deleteBtn);
    taskItem.appendChild(taskSpan);
    taskItem.appendChild(taskButtons);

    taskList.appendChild(taskItem);
  }
  /**
   * Displays an error message below the task input field
   * The error message to display
   */
  function displayErrorMessage(message) {
    var errorMessage = document.getElementById("error-message");
    if (!errorMessage) {
      errorMessage = document.createElement("div");
      errorMessage.id = "error-message";
      errorMessage.className = "error-message";
      document
        .querySelector(".container")
        .insertBefore(errorMessage, taskInput.nextSibling);
    }
    errorMessage.textContent = message;
  }
  /**
   * Removes the error message from the DOM
   */
  function removeErrorMessage() {
    var errorMessage = document.getElementById("error-message");
    if (errorMessage) {
      errorMessage.remove();
    }
  }
});
