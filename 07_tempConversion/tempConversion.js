const convertToCelsius = function(fahrenheitTemp) {
  
  if (typeof(fahrenheitTemp)!= 'number') {
    return -Infinity;
  }

  return Number((5/9*(fahrenheitTemp-32)).toFixed(1));
};

const convertToFahrenheit = function(celsiusTemp) {

  if (typeof(celsiusTemp)!= 'number') {
    return -Infinity;
  }

  return Number((9/5*celsiusTemp+32).toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
