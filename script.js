

    // Select elements
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');
const addBtn = document.getElementById('addBtn');

function addTask() {
  const taskText = taskInput.value.trim(); // ✅ Correct variable name

  if (taskText === '') {
    alert('Please enter a task!');
    return;
  }

  // Create list item
  const li = document.createElement('li');
  li.textContent = taskText;

  // Toggle completed on click
  li.addEventListener('click', function () {
    li.classList.toggle('completed');
  });

  // Create delete button
  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'Delete';
  deleteBtn.className = 'delete-btn';

  deleteBtn.addEventListener('click', function (event) {
    event.stopPropagation(); // Prevent toggling completed
    taskList.removeChild(li);
  });

  // Append delete button to list item
  li.appendChild(deleteBtn);
  taskList.appendChild(li);

  // Clear input
  taskInput.value = '';
}

// Event listeners
addBtn.addEventListener('click', addTask);
taskInput.addEventListener('keypress', function (event) {
  if (event.key === 'Enter') {
    addTask();
  }
});
const nameInput =  document.getElementById("nameInput");
const nameOutput = document.getElementById("nameOutput")

function showgreeting() {
  const name = nameInput.value.trim(); 
  if (name!== " ") {
    nameOutput.textContent = "Hello, " + name + "!"
  }
  else{
    nameOutput.textContent = "Hello!";
  }
}
  nameInput.addEventListener("input", showgreeting);


 

 

