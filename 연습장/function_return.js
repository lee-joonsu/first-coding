const age = 96

function calculateKrAge(ageOfForeigner) {
  return ageOfForeigner + 2;
}

const krAge = calculateKrAge(age);
console.log(krAge);

const calculator = {
  add: function(a, b) {
    console.log("hello");
    return a + b;
    console.log("bye bye");
  },
  minus: function(a, b) {
    return a - b;
  },
  divide: function(a, b) {
    return a / b;
  },
  times: function(a, b) {
    return a * b;
  },
  powerOf: function(a, b) {
    return a ** b;
  },
};

const plusResult = calculator.add(2, 3);
const minusResult = calculator.minus(plusResult, 10);
const divideResult = calculator.divide(10, minusResult);
const timesResult = calculator.times(divideResult, plusResult);
const powerResult = calculator.powerOf(divideResult, minusResult);