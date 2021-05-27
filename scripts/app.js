//elements
const addBtn = document.querySelector('.todo-btn');
const taskList = document.querySelector('.todo-list');
const taskItem = document.querySelector('.todo-ip');
const dltBtn = taskList.querySelector('.dlt-btn');

//Event Listeners
addBtn.addEventListener('click',addTask);
//dltBtn.addEventListener('click',deleteTask);

//Functions
function addTask(event)
{
    event.preventDefault();
    console.log(event.target);

    const newTask = document.createElement('li');
    newTask.classList.add('task-item');

    const taskName = document.createElement('p');
    taskName.innerText = taskItem.value;
    taskName.classList.add('task-name');
    newTask.appendChild(taskName);

    const dlt = document.createElement('button');
    dlt.innerHTML = '<i class="fas fa-trash-alt"></i>';
    dlt.classList.add('dlt-btn');
    newTask.appendChild(dlt);

    taskList.appendChild(newTask);

    taskItem.value = "";
}

// function deleteTask(event)
// {
//     event.preventDefault();
//     console.log(event.target);


// }