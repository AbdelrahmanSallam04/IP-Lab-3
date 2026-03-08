class Task{
    constructor(description, completed = false){
        this.description = description;
        this.completed = completed;
        this.printTask();
    }
    printTask(){
        console.log(`${this.description} was added to the list.`);
    }
}
let tasks = [];
function addTask(){
    let taskInput = document.getElementById('taskInput');
    const description = taskInput.value;
    if(description){
        let task = new Task(description);
        tasks.push(task);   
        taskInput.value = '';
        console.log(`Task added to the array: ${description}`);
        renderTasks();
    }
}
document.getElementById('addTaskButton').addEventListener('click', addTask);

function toggleTask(index){
    console.log(`Toggling task at index: ${index}`);
    tasks[index].completed = !tasks[index].completed;
    renderTasks();
}

function deleteTask(index){
    console.log(`Deleting task at index: ${index}`);
    tasks.splice(index,1)
    renderTasks()
}

function renderTasks(){
    console.log("Rendering tasks");
    let list = document.getElementById("taskList");

    list.innerHTML = ""

    tasks.forEach((task,index)=>{

        let li = document.createElement("li")

        if(task.completed){
            li.classList.add("completed")
        }

        li.innerHTML =
        `
        <span onclick="toggleTask(${index})">
            ${task.description}
        </span>

        <button class="delete-btn"
        onclick="deleteTask(${index})">
        Delete
        </button>
        `

        list.appendChild(li)

    })
}
