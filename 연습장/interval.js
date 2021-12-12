const clock = document.querySelector("h2#clock");

function sayHello() {
  console.log("hello");
}

setInterval(sayHello, 5000);
//ms(miliseconds)간격 1s = 1000ms