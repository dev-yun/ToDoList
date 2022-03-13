const loginForm = document.querySelector('.login-form');
const loginInput = loginForm.querySelector('input');
const user = document.querySelector('#user');

const HIDDEN_CLASSNAME = 'hidden';
const USERNAME_KEY = 'username';

function onLoginSubmit(event) {
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  paintingUser(username);
}

function paintingUser(username) {
  user.innerHTML = `${username}'s Travel List!`;
  user.classList.remove(HIDDEN_CLASSNAME);
}

function removeStorage() {
  localStorage.removeItem(USERNAME_KEY, 'username');
  localStorage.removeItem('todos');
  window.location.reload();
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener('submit', onLoginSubmit);
} else {
  travelForm.classList.remove(HIDDEN_CLASSNAME);
  paintingUser(savedUsername);
  const button = document.createElement('button');
  button.innerHTML = 'logout';
  user.appendChild(button);
  button.addEventListener('click', removeStorage);
}
