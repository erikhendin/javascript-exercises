const removeFromArray = function(originalArray, ...myParams) {
  const newValues = originalArray.filter(removeMe => !myParams.includes(removeMe));
  return newValues;
}

// Do not edit below this line
module.exports = removeFromArray;