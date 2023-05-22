const addTask = document.querySelector('#add-task');
const taskContainer = document.querySelector('.task-container');
const inputTask = document.querySelector('#input-task');

addTask.addEventListener('click', function(){
  let task = document.createElement('div');
  task.classList.add('task');
  
  let li = document.createElement('li');
  li.innerText = inputTask.value;
  task.append(li);

  let doneBtn = document.createElement('button');
  doneBtn.innerText = 'Done';
  doneBtn.classList.add('doneTask');
  task.append(doneBtn);

  let deleteBtn = document.createElement('button');
  deleteBtn.innerText = 'Delete';
  deleteBtn.classList.add('deleteTask');
  task.append(deleteBtn);

  if (inputTask.value === '') {
    alert('Please enter a task.');
  }
  else {
    taskContainer.append(task);
  }

  inputTask.value = '';

  doneBtn.addEventListener('click', function(){

    let doneBtnStatus = doneBtn.innerText;
    doneBtn.innerText = 'Undone';
    doneBtn.parentElement.style.fontWeight = 'bold';
    doneBtn.previousElementSibling.style.textDecoration = 'line-through';

    if (doneBtnStatus === 'Undone') {
      doneBtn.parentElement.style.fontWeight = 'normal';
      doneBtn.previousElementSibling.style.textDecoration = 'none';
      doneBtn.innerText = 'Done';
    }

  });

  deleteBtn.addEventListener('click', function(){
    doneBtn.parentElement.remove();
  });
});