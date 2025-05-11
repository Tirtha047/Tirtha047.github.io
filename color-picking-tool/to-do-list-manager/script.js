function addTask() {
    const input = document.getElementById("taskInput");
    const taskText = input.value.trim();
    if (taskText === "") return;
  
    const li = document.createElement("li");
  
    // Task text
    const span = document.createElement("span");
    span.textContent = taskText;
    span.onclick = () => {
      li.classList.toggle("completed");
    };
  
    // Delete button
    const delBtn = document.createElement("button");
    delBtn.textContent = "X";
    delBtn.className = "delete-btn";
    delBtn.onclick = () => {
      li.remove();
    };
  
    li.appendChild(span);
    li.appendChild(delBtn);
    document.getElementById("taskList").appendChild(li);
    input.value = "";
  }
  
  function clearTasks() {
    document.getElementById("taskList").innerHTML = "";
  }
  