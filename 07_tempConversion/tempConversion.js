const convertToCelsius = function(degrees) {
  //subtract 32 and multiply by .5556
  //varible to hold output
  let converted = (degrees-32) * .5556;
  // round to one decimal place per Odin Assignment
  let rounded = Math.round(converted * 10) / 10
  return rounded;
};

const convertToFahrenheit = function(degrees) {
  //multiply by 1.8 and add 32
  //varible to hold output
  let converted = (degrees * 1.8) + 32;
  // round to one decimal place per Odin Assignment
  let rounded = Math.round(converted * 10) / 10
  return rounded;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
