import "./style.css";

function capitalize(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}
function reverseString(word) {
  let wordArray = word.split("");
  let reverseArray = "";
  for (let index = wordArray.length; index > 0; index--) {
    reverseArray += wordArray[index - 1];
  }

  return reverseArray;
}
class Calculator {
  constructor() {}
  sum(n1, n2) {
    return n1 + n2;
  }
  subtract(n1, n2) {
    return n1 - n2;
  }
  divide(n1, n2) {
    return n1 / n2;
  }
  multiply(n1, n2) {
    return n1 * n2;
  }
}
function sumLetterAndKey(letter, key) {
  let letterNum = letter.charCodeAt(0);
  if ((letterNum > 64) & (letterNum < 91)) {
    letterNum += key;
    if (letterNum > 90) {
      letterNum -= 26;
    }
  } else if ((letterNum > 96) & (letterNum < 123)) {
    letterNum += key;
    if (letterNum > 122) {
      letterNum -= 26;
    }
  }

  return String.fromCodePoint(letterNum);
}

function caesarCipher(word, key) {
  let wordArray = word.split("");
  return wordArray
    .map(function (letter) {
      return sumLetterAndKey(letter, key);
    })
    .join("");
}

function analyzeArray(array) {
  let arrayLength = array.length;
  let arrayAverage = 0;
  array.forEach((num) => {
    arrayAverage += num;
  });
  let arrayMin = array[0];
  array.forEach((num) => {
    if (arrayMin > num) arrayMin = num;
  });
  let arrayMax = array[0];
  array.forEach((num) => {
    if (arrayMax < num) arrayMax = num;
  });
  return {
    average: arrayAverage / arrayLength,
    min: arrayMin,
    max: arrayMax,
    length: arrayLength,
  };
}

const myCalculator = new Calculator();
export {
  capitalize,
  reverseString,
  myCalculator,
  caesarCipher,
  sumLetterAndKey,
  analyzeArray,
};
