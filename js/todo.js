const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

let toDos = []; // array임. 여기에서 toDos는 항상 빈 array로 시작함.

const TODOS_KEY = "toDos";

function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
} // 이 함수의 역할은 toDos의 내용을 localStorage에 넣는 것임.
  // localStorage에 array를 저장할 수 없음.(오직 텍스트만 저장할 수 있음).

function deleteToDo(event) {
  const li = event.target.parentElement;
  li.remove();
  toDos = toDos.filter(toDo => toDo.id !== parseInt(li.id)); // 우리가 클릭한 li.id를 없애고 싶음.
  saveToDos();
} // toDo.id의 데이터 타입은 number이고, li.id의 데이터 타입은 string임.

function paintToDo(newTodo) {
  const li = document.createElement("li"); // createElement() 함수의 인수는 html의 요소여야 함.
  li.id = newTodo.id;
  const span = document.createElement("span");
  span.innerText = newTodo.text;
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
  const newTodoObj = {
    text: newTodo,
    id: Date.now(),
  }; // object로 묶음.
  toDos.push(newTodoObj); // newTodo의 값을 하나씩 toDos 변수로 옮김.
  paintToDo(newTodoObj); // paintToDo라는 새로운 function에 newTodo변수 값을 보냄.
  saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit); 

const savedToDos = localStorage.getItem(TODOS_KEY);

if(savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos); //srting을 Javascript가 이해할 수 있는 살아있는 array로 만듦.
  toDos = parsedToDos; // localStorage에 toDo들이 있다면 toDos 변수에 parsedTodos를 넣어서 전에 있던 toDo들을 복원시킴.
  parsedToDos.forEach(paintToDo);
}  // 이렇게 간단한 이유는 paintToDo 함수는 텍스트를 받는데 
  // JavaScript는 그 텍스트를 paintToDo에게 전달해주기 때문임.

  function sexyFilter() {

  }

  [1, 2, 3, 4].filter(sexyFilter) // JavaScript가 sexyFilter를 4번 부르는 것임.

  //sexyFilter(1) = 1 true
  //sexyFilter(2) = 2
  //sexyFilter(3) x 3 false
  //sexyFilter(4) = 4
  // [1, 2, 4] 성립