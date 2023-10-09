function Adding() {
    const taskInput = document.getElementById('task');
    const dateInput = document.getElementById('date');
    const taskText = taskInput.value.trim();
    const taskDate = dateInput.value;

    if (taskText !== '' && taskDate !== '') {
        const taskList = document.getElementById('taskList');
        const newTask = document.createElement('li');
        newTask.innerHTML = `
            Task: ${taskText}<br>
            Date: ${taskDate}<br>
            <button onclick="removeTask(this)">Delete</button>
        `;
        taskList.appendChild(newTask);
    }
}

function removeTask(button) {
    const taskList = document.getElementById('taskList');
    const taskItem = button.parentElement;
    taskList.removeChild(taskItem);
}

function clearInputs() {
    const taskInput = document.getElementById('task');
    const dateInput = document.getElementById('date');
    taskInput.value = '';
    dateInput.value = '';
}
