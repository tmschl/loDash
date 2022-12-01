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
  },
  words (string) {
    let wordArray = [];
    let word = "";
    for (let i = 0; i < string.length; i++) {
      if (string[i] === " ") {
        wordArray.push(word);
        word = "";
      } else if (i === string.length - 1) {
        word += string[i];
        wordArray.push(word);
      } else {
        word += string[i];
      }
    }
    return wordArray;
  },
  pad (str, length) { // just add the diff to the end, start there
    let solutionArray = [];
    let diff;
    length > str.length ? diff = length - str.length : console.log('string is longer');

    // padding loop 
    if (diff % 2 === 0 && str.length < length) {
      console.log(str, length);
      for (let i = 0; i < str.length; i++) {

        //pad the beginning 
        if (i === 0) {
          for (let j = 0; j < diff / 2; j++) {
            solutionArray.push(' ');
          }
        }

        // make the array
        solutionArray.push(str[i]);

        // pad the end
        if (i === str.length - 1) {
          for (let j = 0; j < diff / 2; j++) {
            solutionArray.push(' ');
          }
        }
      } 
    } else if (diff % 2 === 1 && str.length < length) {
      diff = Math.trunc(diff / 2);
      for (let i = 0; i < str.length; i++) {

        //pad the beginning 
        if (i === 0) {
          for (let j = 0; j < diff; j++) {
            solutionArray.push(' ');
          }
        }

        // make the array
        solutionArray.push(str[i]);

        // pad the end
        if (i === str.length - 1) {
          for (let j = 0; j < diff + 1; j++) {
            solutionArray.push(' ');
          }
        }
      }
    } else { 
      return str;
    }

    let solution = solutionArray.join("");
    console.log(solution);

    return solution;
  } 
};



// Do not write or modify code below this line.
module.exports = _;