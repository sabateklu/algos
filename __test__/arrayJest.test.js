const arr = require('../problems/arrayProblems.js');

jest.spyOn(console, 'log');

test("plusMinus function should log the decimal value of what portion of the array is negative, positive, and zero", () => {
  expect(console.log.mock.calls.length).toBe(0);
  arr.plusMinus([5,-2, 0, 1, -9]);
  expect(console.log.mock.calls.length).toBe(3);
  expect(console.log.mock.calls[0][0]).toBe("0.400000");
  expect(console.log.mock.calls[1][0]).toBe("0.400000");
  expect(console.log.mock.calls[2][0]).toBe("0.200000");
});
