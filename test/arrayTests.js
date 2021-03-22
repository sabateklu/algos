const chai = require('chai');
const expect = chai.expect;
const arr = require('../problems/arrayProblems.js');

describe('two sum function', () => {
  it('should return the indices of the two numbers that equal the target', () => {
    expect(arr.twoSum([3,2,4], 6).includes(1)).to.equal(true);
    expect(arr.twoSum([3,2,4], 6).includes(2)).to.equal(true);
    expect(arr.twoSum([3,2,4], 6).length).to.equal(2);
  });
});

describe('diagonal difference function', () => {
  it('should return the absolute difference between the diagonal numbers in the matrix', () => {
    expect(arr.diagonalDifference([[11, 2, 4],[4, 5, 6],[10, 8, -12]])).to.equal(15);
  });
});

describe('birthdayCakeCandles function', () => {
  it('should return the number of the tallest candles in the array', ()=> {
    expect(arr.birthdayCakeCandles([3, 1, 3, 2])).to.equal(2);
  })
})



