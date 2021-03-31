const chai = require('chai');
const expect = chai.expect;
const algo = require('../problems/algoProblems.js');

describe('time conversion function', () => {
  it('function should return military time for AM', ()=> {
    expect(algo.timeConversion('12:04:23AM')).to.equal('00:04:23');
  });
  it('function should return military time for PM', () => {
    expect(algo.timeConversion('03:04:23PM')).to.equal('15:04:23');
  });
});

describe('isAnagram function', ()=> {
  it('should return if two words are anagrams of each other', () => {
    expect(algo.isAnagram('dog', 'god')).to.equal(true);
    expect(algo.isAnagram('cat', 'tar')).to.equal(false);
  });
  it('should return true even if one word contains non-alpahbetic characters', () => {
    expect(algo.isAnagram('dog$ $9?', 'god')).to.equal(true);
  });
  it('should return true for strings that contain the same letter varying in upper/lower case', () => {
    expect(algo.isAnagram('Dog', 'dog')).to.equal(true);
  });
  it('shou;d return false if one string contains all and more letters than the other',() => {
    expect(algo.isAnagram('mouse', 'useoml')).to.equal(false);
  })
})
