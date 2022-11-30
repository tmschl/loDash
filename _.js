const _ = {
  clamp (num, lowBound, highBound) {
    let clampMin = Math.max(num, lowBound);
    let clampedNum = Math.min(clampMin, highBound);
    return clampedNum
    
    // if (num < lowBound) {
    //   num = lowBound;
    //   console.log(num, 'low');
    //   return lowBound;
    // } else if (num > highBound) {
    //   num = highBound;
    //   console.log(num, 'high')
    //   return num;
    // } else {
    //   console.log(num, 'within')
    //   return num;
    // }

  },
  inRange (number, start, end) {
    let endMem;
    if (end === undefined) {
      end = start;
      start = 0;
      return true;
    }
    if (start > end) {
      console.log(number, start, end);
      endMem = start;
      start = end;
      end = endMem;
      console.log(number, start, end);
      return true;
    }
    if (number < start || number > end || number === end) {
      return false;
    }
    return true;
  }
};

let tim = _.clamp(-10,0,23);

console.log(tim);

// Do not write or modify code below this line.
module.exports = _;