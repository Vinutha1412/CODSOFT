function loadTasks() {
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    const taskList = document.getElementById('taskList');
    taskList.innerHTML = ''; 

    tasks.forEach((task, index) => {
        const li = document.createElement('li');
        li.classList.toggle('completed', task.completed);

        li.innerHTML = `
            <span class="task-title">${task.title}</span>
            <span class="task-description">${task.description || 'No description'}</span>
            <span class="task-due-date">${task.dueDate ? `Due: ${task.dueDate}` : ''}</span>
            <span class="task-priority">Priority: ${task.priority}</span>
            <button class="complete-btn" onclick="toggleCompletion(${index})">${task.completed ? 'Undo' : 'Complete'}</button>
            <button class="edit-btn" onclick="editTask(${index})">Edit</button>
            <button class="delete-btn" onclick="deleteTask(${index})">Delete</button>
        `;
        
        taskList.appendChild(li);
    });
}


function saveTasks(tasks) {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}


document.getElementById('addTaskBtn').addEventListener('click', () => {
    const title = document.getElementById('taskTitle').value;
    const description = document.getElementById('taskDescription').value;
    const dueDate = document.getElementById('taskDueDate').value;
    const priority = document.getElementById('taskPriority').value;

    if (!title) {
        alert('Task title is required!');
        return;
    }

    const newTask = {
        title,
        description,
        dueDate,
        priority,
        completed: false,
    };

    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.push(newTask);
    saveTasks(tasks);

    loadTasks();
    document.getElementById('taskTitle').value = '';
    document.getElementById('taskDescription').value = '';
    document.getElementById('taskDueDate').value = '';
});


function toggleCompletion(index) {
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks[index].completed = !tasks[index].completed;
    saveTasks(tasks);
    loadTasks();
}


function editTask(index) {
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    const task = tasks[index];

    document.getElementById('taskTitle').value = task.title;
    document.getElementById('taskDescription').value = task.description;
    document.getElementById('taskDueDate').value = task.dueDate;
    document.getElementById('taskPriority').value = task.priority;

    deleteTask(index);  
}

function deleteTask(index) {
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.splice(index, 1);
    saveTasks(tasks);
    loadTasks();
}

loadTasks();