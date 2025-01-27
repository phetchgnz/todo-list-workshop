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
    listItem.textConten = taskText;

    let deleteBtn = docu.createElement("button")
    deleteBtn.textConten = "Delete"
    deleteBtn.id = "deleteBtn"
    deleteBtn.onClick = () => {
        taskList.removeChild(listItem);
    }
}

addBtn.addEventListener("click", AddTask)