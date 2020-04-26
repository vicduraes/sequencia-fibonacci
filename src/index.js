"use strict";

let fibonacciArray = [];

const fibonacci = () => {
  fibonacciArray = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377];
  return fibonacciArray;
};

const isFibonnaci = (num) => {
  let flag = false;
  fibonacciArray.map((element) => {
    if (element === num) {
      flag = true;
    }
  });
  return flag;
};

module.exports = {
  fibonacci,
  isFibonnaci,
};
