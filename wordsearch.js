// Takes in a Matrix of letters and checks to see if the word exists either horizontal or vertically
// does not check backwards or upwards.
const wordSearch = (letters, word) => {

  if (checkForWord(horizontalJoin(letters), word)) {
    return true;
  } else {
    if (checkForWord(horizontalJoin(transpose(letters)), word)) {
      return true;
    }
      
    return false;
  }

};
// takes an array and returns a string out of the values.
const horizontalJoin = (matrix) => {
  return matrix.map(ls => ls.join(''));
};

// takes in a single array of words and looks for the word in any of the strings.
const checkForWord = (arrOfWords, word) => {

  for (let i in arrOfWords) {
    // look to see if the string has the word
    if (arrOfWords[i].includes(word)) {
      return true;
    }
  }
  return false;
};

// takes a matrix and transposes it
const transpose = function(matrix) {
  const matrixNew = [];

  for (let i = 0; i < matrix[0].length; i++) {
    matrixNew[i] = [];
    for (let j = 0; j < matrix.length; j++) {
      matrixNew[i].push(matrix[j][i]);
    }
  }
  return matrixNew;
};


module.exports = wordSearch;