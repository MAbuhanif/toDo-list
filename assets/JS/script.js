document.addEventListener("DOMContentLoaded", () => {
  const taskInput = document.getElementById("task-input");
  const addTaskBtn = document.getElementById("add-task-btn");
  const taskList = document.getElementById("task-list");

  addTaskBtn.addEventListener("click", () => {
    const taskText = taskInput.value.trim();
    if (taskText !== "") {
      addTask(taskText);
      taskInput.value = "";
    }
  });
  function addTask(taskText) {
    const taskItem = document.createElement("li");
    taskItem.className = "task-item";
    const taskSpan = document.createElement("span");
    taskSpan.textContent = taskText;
  }

  const completeBtn = document.createElement("button");
  completeBtn.className = "complete-btn";
  completeBtn.textContent = "Complete";
  completeBtn.addEventListener("click", () => {
    taskItem.classList.toggle("completed");
  });
  const deleteBtn = document.createElement("button");
  deleteBtn.className = "delete-btn";
  deleteBtn.textContent = "Delete";
  deleteBtn.addEventListener("click", () => {
    taskItem.remove();
  });
  
});
