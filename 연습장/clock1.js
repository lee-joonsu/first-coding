const clock = document.querySelector("h2#clock");

function getClock() {
  const date = new Date(); //Date object = 이것을 호출하는 당시의 현재 날짜랑 시간을 알려줌.
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");

  clock.innerText = (`${hours}:${minutes}:${seconds}`);
}

getClock();
setInterval(getClock, 1000);
//이 function을 매 초마다 호출하기 때문에 이게 실시간처럼 보임. 
// setInterval이 없다면 한번만 일어난다. 반복해서 일어나지 않음.