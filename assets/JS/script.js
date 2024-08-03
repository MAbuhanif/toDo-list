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

    const taskButtons = document.createElement("div");
    taskButtons.className = "task-buttons";

    const completeBtn = document.createElement("button");
    completeBtn.className = "complete-btn";
    completeBtn.innerHTML = '<i class="fas fa-check"></i>';
    completeBtn.addEventListener("click", () => {
      taskItem.classList.toggle("completed");
    });
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
});
