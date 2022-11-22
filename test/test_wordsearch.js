const chai = require('chai');
const assert = chai.assert;

const wordSearch = require('../wordsearch.js');

describe("#wordSearch()", function() {
  it("should return false if the word is not present", function() {
    const result = wordSearch([
      ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
      ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['H', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
      ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
      ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
      ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
      ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
      ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
    ], 'FRANK');

    assert.isFalse(result);
  });

  it("should return true if the word is present", function() {
    const result = wordSearch([
      ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
      ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['H', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
      ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
      ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
      ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
      ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
      ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
    ], 'SEINFELD');

    assert.isTrue(result);
  });

  it("should return true if the word is present", function() {
    const result = wordSearch([
      [ 'A', 'S', 'Y','H', 'W', 'B', 'U', 'O', 'E'],
      [ 'W', 'E', 'F','M', 'H', 'F', 'B', 'D', 'Z'],
      [ 'C', 'I', 'C','J', 'C', 'R', 'T', 'C', 'K'],
      [ 'F', 'N', 'F','T', 'S', 'E', 'W', 'A', 'F'],
      [ 'Q', 'F', 'Q','E', 'Y', 'N','A',  'K', 'Q'],
      [ 'U', 'E', 'U','V', 'E', 'E', 'P', 'U', 'U'],
      [ 'A', 'L', 'A','R', 'R', 'Y', 'A', 'A', 'A'],
      [ 'L', 'D', 'L','G', 'L', 'B', 'I', 'S', 'L']
    ], 'SEINFELD');

    assert.isTrue(result);
  });

  it("should return true if the word is present", function() {
    const result = wordSearch([
      [ 'A', 'S', 'Y','H', 'C', 'O', 'R', 'N', 'E'],
      [ 'W', 'E', 'F','M', 'H', 'F', 'B', 'D', 'Z'],
      [ 'C', 'I', 'C','J', 'C', 'R', 'T', 'C', 'K'],
      [ 'F', 'N', 'F','T', 'S', 'E', 'W', 'A', 'F'],
      [ 'Q', 'F', 'Q','E', 'Y', 'N','A',  'K', 'Q'],
      [ 'U', 'E', 'U','V', 'E', 'E', 'P', 'U', 'U'],
      [ 'A', 'L', 'A','R', 'R', 'Y', 'A', 'A', 'A'],
      [ 'L', 'D', 'L','G', 'L', 'B', 'I', 'S', 'L']
    ], 'CORN');

    assert.isTrue(result);
  });

  it("should return true if the word is present", function() {
    const result = wordSearch([
      [ 'A', 'S', 'Y','H', 'C', 'O', 'R', 'N', 'E'],
      [ 'W', 'A', 'F','M', 'H', 'F', 'B', 'D', 'Z'],
      [ 'C', 'N', 'C','J', 'C', 'R', 'T', 'C', 'K'],
      [ 'F', 'D', 'F','T', 'S', 'E', 'W', 'A', 'F'],
      [ 'Q', 'R', 'Q','E', 'Y', 'N','A',  'K', 'Q'],
      [ 'U', 'A', 'U','V', 'E', 'E', 'P', 'U', 'U'],
      [ 'A', 'L', 'A','R', 'R', 'Y', 'A', 'A', 'A'],
      [ 'L', 'D', 'L','G', 'L', 'B', 'I', 'S', 'L']
    ], 'SANDRA');

    assert.isTrue(result);
  });

  it("should return true if the word is present", function() {
    const result = wordSearch([
      [ 'A', 'S', 'Y','H', 'C', 'O', 'R', 'N', 'E'],
      [ 'W', 'A', 'F','M', 'H', 'F', 'B', 'D', 'Z'],
      [ 'C', 'M', 'C','J', 'C', 'R', 'T', 'C', 'K'],
      [ 'F', 'I', 'F','T', 'S', 'E', 'W', 'A', 'F'],
      [ 'Q', 'K', 'Q','E', 'Y', 'N','A',  'K', 'Q'],
      [ 'U', 'E', 'U','V', 'E', 'E', 'P', 'U', 'U'],
      [ 'A', 'L', 'A','R', 'R', 'Y', 'A', 'A', 'A'],
      [ 'L', 'D', 'L','G', 'L', 'B', 'I', 'S', 'L']
    ], 'MIKE');

    assert.isTrue(result);
  });

});