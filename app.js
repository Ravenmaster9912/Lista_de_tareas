document.getElementById('taskForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const taskInput = document.getElementById('newTask');
    const taskText = taskInput.value;

    if (taskText === '') {
        alert('Por favor, ingresa una tarea');
        return;
    }

    const taskList = document.getElementById('taskList');
    const taskItem = document.createElement('li');
    taskItem.textContent = taskText + " ";

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Eliminar';
    deleteBtn.classList.add('deleteBtn');
    deleteBtn.onclick = function() {
        taskList.removeChild(taskItem); 
    };

    taskItem.appendChild(deleteBtn);
    taskList.appendChild(taskItem);

    taskInput.value = '';
});