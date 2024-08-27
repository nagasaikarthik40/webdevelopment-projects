
    const taskInput = document.getElementById('task-input');
    const addTaskButton = document.getElementById('add-task-button');
    taskList = document.getElementById('task-list');

    // Function to add a new task
    function addTask() {
        const taskText = taskInput.value.trim();

        if (taskText == '') {
            alert('Please enter a task!');
            return;
        }

        const listItem = document.createElement('li');
        listItem.classList.add('task-item');
        listItem.innerHTML = `${taskText} <button>Delete</button>`;

       taskList.appendChild(listItem);

        // Clear the input field after adding a task
        taskInput.value = '';

        // Add delete functionality to the button
        listItem.querySelector('button').addEventListener('click', deleteTask);

        //function to delte the list
        function deleteTask()
        {
            taskList.removeChild(listItem);
        }

    }
    

    // Add task on button click
    addTaskButton.addEventListener('click', addTask);

    