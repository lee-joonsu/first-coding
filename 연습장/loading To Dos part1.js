const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

const toDos = []; // array임.

const TODOS_KEY = "toDos";

function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
} // 이 함수의 역할은 toDos의 내용을 localStorage에 넣는 것임.
  // localStorage에 array를 저장할 수 없음.(오직 텍스트만 저장할 수 있음).

function deleteToDo(event) {
  const li = event.target.parentElement;
  li.remove();
}

function paintToDo(newTodo) {
  const li = document.createElement("li"); // createElement() 함수의 인수는 html의 요소여야 함.
  const span = document.createElement("span");
  span.innerText = newTodo;
  const button = document.createElement("button");
  button.innerText = "❌"
  button.addEventListener("click",deleteToDo)
  li.appendChild(span);
  li.appendChild(button);
  toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newTodo = toDoInput.value;  // input/의 현재 value를 새로운 변수에 복사하는 것임.
  toDoInput.value = ""; // 그 다음에 무엇을 하든 newToDo 변수와는 아무 관련 없음.
  toDos.push(newTodo); // newTodo의 값을 하나씩 toDos 변수로 옮김.
  paintToDo(newTodo); // paintToDo라는 새로운 function에 newTodo변수 값을 보냄.
  saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit); 

const savedToDos = localStorage.getItem(TODOS_KEY);

if(savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos);
  parsedToDos.forEach((item) => console.log("this is turn of ", item));
}  // 위에 있는 것은 function을 작성할 때 더 짧게 쓰는 방법임. 
  //arrow function(화살표 함수)이라고 함.