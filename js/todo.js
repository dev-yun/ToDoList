const toDoForm = document.querySelector(".user-screen__todo-form");
const input = toDoForm.querySelectorAll('input');
const travelInput = input[0];
const todoList = document.querySelector('.todo-list');

let toDos = [];

function saveTodos() {
  localStorage.setItem('todos', JSON.stringify(toDos));
}

function removeTodo(event) {
  const li = event.target.parentElement;
  li.remove();
  toDos = toDos.filter((toDos) => toDos.id !== parseInt(li.id));
  saveTodos();
}

function paintTodo(newTodo) {
  const li = document.createElement('li');
  li.id = newTodo.id;
  li.classList.add("add_animation");
  const span = document.createElement('span');
  span.innerText = `- ${newTodo.text}`;
  const button = document.createElement('button');
  button.innerHTML = '❌';
  button.addEventListener('click', removeTodo);

  li.appendChild(span);
  li.appendChild(button);
  todoList.appendChild(li);
}

function makeList(event) {
  event.preventDefault();
  const newTodo = travelInput.value;
  travelInput.value = ''; // 엔터를 입력할 시 input값에 사용자가 입력한 값을 사라지게함
  const newTodoObj = {
    id: Date.now(),
    text: newTodo,
  };

  toDos.push(newTodoObj);
  paintTodo(newTodoObj);
  saveTodos();
}

toDoForm.addEventListener('submit', makeList);

const savedTodo = localStorage.getItem('todos');

if (savedTodo) {
  const parsedToDos = JSON.parse(savedTodo);
  toDos = parsedToDos;
  parsedToDos.forEach(paintTodo);
}
