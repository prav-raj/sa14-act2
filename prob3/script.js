document.getElementById('add-task-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const title = document.getElementById('task-title').value;
    const details = document.getElementById('task-details').value;
    addTask(title, details);
    document.getElementById('task-title').value = '';
    document.getElementById('task-details').value = '';
});

function addTask(title, details) {
    const list = document.getElementById('task-list');
    const li = document.createElement('li');
    li.innerHTML = `
        <strong>${title}</strong>
        ${details ? ` - ${details}` : ''}
        <button onclick="editTask(this)">Edit</button>
        <button onclick="deleteTask(this)">Delete</button>
    `;
    list.appendChild(li);
}

function editTask(btn) {
    const li = btn.parentNode;
    const title = prompt('Edit your task title', li.childNodes[0].textContent);
    const details = prompt('Edit your task details', li.childNodes[1].textContent || '');
    li.childNodes[0].textContent = title + ' ';
    li.childNodes[1].textContent = details;
}

function deleteTask(btn) {
    if (confirm('Are you sure you want to delete this task?')) {
        btn.parentNode.remove();
    }
}
