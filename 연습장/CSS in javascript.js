//첫번째 영상
const h1 = document.querySelector("div.hello:first-child h1");

function handleTitleClick() {
  console.log(h1.style.color); // 여기서는 h1의 color를 획득할 수 있음.
  h1.style.color = "blue";     // 여기선 h1의 color를 설정할 수 있음. 
  console.log(h1.style.color); // 여기서는 h1의 color를 다시 가지고 올 수 있음.
}
h1.addEventListener("click", handleTitleClick);



const h1 = document.querySelector("div.hello:first-child h1");

function handleTitleClick() {
  const currentColor = h1.style.color;
  let newColor;
  if(currentColor === "blue"){
    newColor = "tomato"; // "blue"를 "tomato"로 변경
  } else {
    newColor = "blue";
  }
  h1.style.color = newColor;
}

h1.addEventListener("click", handleTitleClick);

//두번째 영상

const h1 = document.querySelector("div.hello:first-child h1");

function handleTitleClick1() {
  const clickedClass = "clicked";
  if (h1.className === clickedClass) { 
    h1.className = "";
  } else {
    h1.className = clickedClass;
  }
}

h1.addEventListener("click", handleTitleClick1);
//"className"을 사용하는 경우, HTML파일에 class를 겹쳐 사용할 때
// HTML파일에 있는 class는 웹문서에 나오지 않음.


//세번째 영상
// contains(), remove(), add() 함수를 사용
const h1 = document.querySelector("div.hello:first-child h1");

function handleTitleClick() {
  const clickedClass = "clicked";
  if (h1.classList.contains(clickedClass)) {
    // 만약 clickedClass가 h1의 classList 안에 포함되어 있다면 
    h1.classList.remove(clickedClass);
  } else {
    h1.classList.add(clickedClass);
  }
}

h1.addEventListener("click", handleTitleClick);


// toggle() 함수를 사용
const h1 = document.querySelector("div.hello:first-child h1");

function handleTitleClick() {
  h1.classList.toggle("clicked");
  // 단 toggle()함수를 사용하면 단 한줄의 코드만 사용해도 
  // class이름이 존재하는지 확인할 수 있음. 
}

h1.addEventListener("click", handleTitleClick);