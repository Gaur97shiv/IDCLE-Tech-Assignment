function addTask() {
    const taskInput = document.getElementById("task");
    const taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Please enter a task.");
        return;
    }

    const todoTable = document.getElementById("todo-table");
    const newRow = todoTable.insertRow(todoTable.rows.length);
    const cell1 = newRow.insertCell(0);
    const cell2 = newRow.insertCell(1);

    cell1.innerHTML = taskText;
    cell2.innerHTML = '<input type="checkbox" onchange="moveToDone(this)">';

    taskInput.value = "";
}

function moveToDone(checkbox) {
    const todoTable = document.getElementById("todo-table");
    const doneTable = document.getElementById("done-table");
    const row = checkbox.parentNode.parentNode;
    const taskText = row.cells[0].innerHTML;

    if (checkbox.checked) {
        doneTable.appendChild(row);
        row.cells[1].innerHTML = '<input type="checkbox" checked disabled>';
    } else {
        todoTable.appendChild(row);
        row.cells[1].innerHTML = '<input type="checkbox" onchange="moveToDone(this)">';
    }
}
