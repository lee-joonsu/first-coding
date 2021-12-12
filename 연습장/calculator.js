const calculator = {
  add: function(a, b) {
    console.log(a + b);
  },
  minus: function(a, b) {
    console.log(a - b);
  },
  divide: function(a, b) {
    console.log(a / b);
  },
  times: function(a, b) {
    console.log(a * b);
  },
  powerOf: function(a, b) {
    console.log(a**b);
  },
};

calculator.add(3, 10);
calculator.minus(10, 3);
calculator.divide(300, 20);
calculator.times(10, 21);
calculator.powerOf(20, 3);