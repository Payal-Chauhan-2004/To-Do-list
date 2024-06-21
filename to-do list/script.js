// script.js
document.addEventListener('DOMContentLoaded', () => {
    const taskForm = document.getElementById('task-form');
    const taskList = document.getElementById('task-list');
    const taskInput = document.getElementById('task-input');
    const taskDate = document.getElementById('task-date');
    const taskPriority = document.getElementById('task-priority');
    const taskCategory = document.getElementById('task-category');

    taskForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const taskText = taskInput.value;
        const dueDate = taskDate.value;
        const priority = taskPriority.value;
        const category = taskCategory.value;

        addTask(taskText, dueDate, priority, category);

        taskInput.value = '';
        taskDate.value = '';
        taskPriority.value = 'low';
        taskCategory.value = 'work';
    });

    function addTask(taskText, dueDate, priority, category) {
        const li = document.createElement('li');
        li.classList.add('task');

        const taskDetails = document.createElement('div');
        taskDetails.classList.add('task-details');
        taskDetails.innerHTML = `
            <span>${taskText}</span>
            <small>Due: ${dueDate}</small>
            <small>Priority: ${priority}</small>
            <small>Category: ${category}</small>
        `;
        li.appendChild(taskDetails);

        const completeButton = document.createElement('button');
        completeButton.textContent = 'Complete';
        completeButton.addEventListener('click', () => {
            li.classList.toggle('completed');
        });
        li.appendChild(completeButton);

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', () => {
            taskList.removeChild(li);
        });
        li.appendChild(deleteButton);

        taskList.appendChild(li);
    }
});
