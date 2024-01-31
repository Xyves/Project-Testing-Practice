function Analyze(array) {
  let obj = {
    average: Number,
    min: Number,
    max: Number,
    length: Number,
  };
  if (!isValidArray(array)) {
    return "not an array";
  } else {
    array.sort(compareNumbers);
    function compareNumbers(a, b) {
      return a - b;
    }

    let sum = array.reduce((a, b) => a + b, 0);
    let length = array.length;
    let max = parseInt(array.slice(-1));
    obj.average = Math.round(sum / length);

    obj.min = array[0];

    obj.max = max;

    obj.length = length;

    return obj;
  }
}
const isValidArray = (array) => {
  if (Array.isArray(array)) {
    for (let item of array) {
      if (typeof item !== "number") {
        return false;
      }
    }
  } else {
    return false;
  }
  return true;
};
module.exports = Analyze;
