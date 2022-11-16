const _ = {
  clamp (num, lowBound, highBound) {
    if (num < lowBound) {
      num = lowBound;
      console.log(num, 'low');
      return lowBound;
    } else if (num > highBound) {
      num = highBound;
      console.log(num, 'high')
      return num;
    } else {
      console.log(num, 'within')
      return num;
    }
    console.log('hi');
  }
};

_.clamp(21,0,23);


// Do not write or modify code below this line.
module.exports = _;