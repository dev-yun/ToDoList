const leftScreen = document.querySelector(".login-screen");
const rightScreen = document.querySelector(".content-screens");
const loginForm = document.querySelector(".user-screen__login-form");
const inputUserName = loginForm.querySelector("input[type='text']");
const inputNewToDo = toDoForm.querySelector("input[type='text']");
const user = document.querySelector("#user");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const username = inputUserName.value;
  localStorage.setItem(USERNAME_KEY, username);
  paintingUser(username);
}

function paintingUser(username) {
  user.innerHTML = `${username}'s ToDo List`;
  user.classList.remove(HIDDEN_CLASSNAME);
}

function removeStorage() {
  localStorage.removeItem(USERNAME_KEY, "username");
  localStorage.removeItem("todos");
  window.location.reload();
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  toDoForm.classList.remove(HIDDEN_CLASSNAME);
  rightScreen.classList.remove(HIDDEN_CLASSNAME);
  leftScreen.classList.remove("login-screen");
  leftScreen.classList.add("user-screen");
  paintingUser(savedUsername);
  const button = document.createElement("button");
  button.innerHTML = "logout";
  user.appendChild(button);
  button.addEventListener("click", removeStorage);
}
