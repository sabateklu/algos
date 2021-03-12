const chai = require('chai');
const expect = chai.expect;
const arr = require('../problems/arrayProblems.js');

describe('two sum function', () => {
  it('should return the indices of the two numbers that equal the target', () => {
    expect(arr.twoSum([3,2,4], 6).includes(1)).to.equal(true);
    expect(arr.twoSum([3,2,4], 6).includes(2)).to.equal(true);
    expect(arr.twoSum([3,2,4], 6).length).to.equal(2);
  });
})