const add = function(a,b) {
	return a+b;
};

const subtract = function(a,b) {
	return a-b;
};

const sum = function(arr) {
	if(arr.length === 0) return 0;
  return arr.reduce(add,0);
};

const multiply = function(arr) {
  return arr.reduce((a,b)=> {
    return a*b;
  },1)
};

const power = function(a,b) {
	return Math.pow(a,b);
};

const factorial = function(n) {
	if(n===0 || n===1) return 1;
  return [...Array(n).keys()].map((value) => value+1).reduce((a,b)=> {
    return a*b;
  },1);

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
