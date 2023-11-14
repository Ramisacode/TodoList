function Adding() {
    const taskInput = document.getElementById('task');
    const dateInput = document.getElementById('date');
    const colorPicker = document.getElementById('colorPicker');
    const taskText = taskInput.value.trim();
    const taskDate = dateInput.value;
    const taskColor = colorPicker.value;

    // Check if the date is not empty and is in the future
    if (taskText !== '' && (!taskDate || new Date(taskDate) >= new Date())) {
        const taskList = document.getElementById('taskList');
        const newTask = document.createElement('li');
        newTask.innerHTML = `
            <input type="checkbox" onchange="toggleTask(this)">
            <span class="task-text" style="color: ${taskColor};">${taskText}</span><br>
            ${taskDate !== '' ? `Date: ${taskDate}<br>` : ''}
            <button onclick="editTask(this)">Edit</button>
            <button onclick="removeTask(this)">Delete</button>
            <ul id="subtasks"></ul>
        `;
        taskList.appendChild(newTask);
        clearInputs();
    } else if (taskDate && new Date(taskDate) < new Date()) {
        alert('Please select a future date.');
    }
}

function toggleTask(checkbox) {
    const taskTextElement = checkbox.parentElement.querySelector('.task-text');
    taskTextElement.style.textDecoration = checkbox.checked ? 'line-through' : 'none';
    
    if (checkbox.checked) {
        const confirmationMessage = document.getElementById('confirmationMessage');
        confirmationMessage.innerText = 'You Have Completed The Task :)';
        // Add celebratory animations or sounds here if desired
        setTimeout(() => {
            confirmationMessage.innerText = '';
        }, 5000); // Display for 5 seconds
    }
}

function removeTask(button) {
    const taskList = document.getElementById('taskList');
    const taskItem = button.parentElement;
    const taskTextElement = taskItem.querySelector('.task-text');
    const confirmationMessage = document.getElementById('confirmationMessage');
    
    taskList.removeChild(taskItem);

    // Show a "Congratulations" message when a task is deleted
    confirmationMessage.innerText = `Congratulations! Task "${taskTextElement.textContent}" has been deleted.`;
    setTimeout(() => {
        confirmationMessage.innerText = '';
    }, 5000); // Display for 5 seconds
}

function editTask(button) {
    const taskItem = button.parentElement;
    const taskTextElement = taskItem.querySelector('.task-text');
    const newText = prompt('Edit the task:', taskTextElement.textContent);
    
    if (newText !== null) {
        taskTextElement.textContent = newText;
    }
}

function clearInputs() {
    const taskInput = document.getElementById('task');
    const dateInput = document.getElementById('date');
    taskInput.value = '';
    dateInput.value = '';
}

