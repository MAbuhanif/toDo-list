document.addEventListener("DOMContentLoaded", () => {
  const taskInput = document.getElementById("task-input");
  const addTaskBtn = document.getElementById("add-task-btn");
  const taskList = document.getElementById("task-list");
  // Event listener for the Add Task button
  addTaskBtn.addEventListener("click", () => {
    const taskText = taskInput.value.trim();
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
  taskInput.addEventListener("input", () => {
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
    const taskItem = document.createElement("li");
    taskItem.className = "task-item";

    const taskSpan = document.createElement("span");
    taskSpan.textContent = taskText;

    const taskButtons = document.createElement("div");
    taskButtons.className = "task-buttons";

    // Create and configure the Complete button
    const completeBtn = document.createElement("button");
    completeBtn.className = "complete-btn";
    completeBtn.innerHTML = '<i class="fas fa-check"></i>';
    completeBtn.addEventListener("click", () => {
      taskItem.classList.toggle("completed");
    });
    // Create and configure the Delete button
    const deleteBtn = document.createElement("button");
    deleteBtn.className = "delete-btn";
    deleteBtn.innerHTML = '<i class="fas fa-trash"></i>';
    deleteBtn.addEventListener("click", () => {
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
    let errorMessage = document.getElementById("error-message");
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
    const errorMessage = document.getElementById("error-message");
    if (errorMessage) {
      errorMessage.remove();
    }
  }
});
