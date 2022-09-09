const add = function(num1, num2) {
    return num1 + num2
};

const subtract = function(num1, num2) {
    return num1 - num2
};

const sum = function(array) {
    let sum = 0
    if (array === []){
      return 0
    }
    else {
      for (let i = 0; i < array.length; i++)
      sum += array[i]
      return sum
    }
};

const multiply = function(array) {
    let product = 1;
    for (let i = 0; i < array.length; i++) {
      product *= array[i];
    }
    return product
};

const power = function(num1, num2) {
    return num1 ** num2
};

const factorial = function(num1) {
    if (num1 === 0 || num1 === 1){
      return 1;
    }else {
      return num1 * factorial(num1-1);
    }
    
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
