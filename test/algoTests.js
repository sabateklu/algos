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
})
