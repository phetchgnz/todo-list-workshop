let taskInput = document.querySelector("#taskInput");
let taskList=  document.querySelector("#taskList");
let addBtn = document.querySelector("#addBtn");

function AddTask() {
    let taskText = taskInput.value.trim();
    
    if (taskText === "") { 
        alert("Please enter any task..")
        return
    }
    console.log("Task added")

    let listItem = document.createElement("li")
    listItem.textContent = taskText;

    let deleteBtn = document.createElement("button")
    deleteBtn.textContent = "Delete"
    deleteBtn.id = "deleteBtn"
    deleteBtn.onclick = () => {
        taskList.removeChild(listItem);
    }

    listItem.appendChild(deleteBtn);
    taskList.appendChild(listItem);

    taskInput.value = ""
}

taskInput.addEventListener("keypress", (e)=> {
    if (e.key === "Enter") {
        AddTask();
    }
})
addBtn.addEventListener("click", AddTask)