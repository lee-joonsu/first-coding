function sayHello(nameOfPerson, age) {
  console.log("Hello my name is " + nameOfPerson + " and I'm " + age);
}

sayHello("nico", 10); 
sayHello("dal", 23);
sayHello("lynn", 21);



const player = {
  name: "nico",
  sayHello: function(otherPersonsName) {    // object 안에서의 function
    console.log("hello! " + otherPersonsName + " nice to meet you!");
  },
};

player.sayHello("lynn");  // object인 player안에 있는 sayHello 함수를 실행
player.sayHello("nico");

function plus(a, b) {
  console.log(a + b);
}

plus(5, 5); 
