const arr = require('../problems/arrayProblems.js');

test("plusMinus function should log the decimal value of what portion of the array is negative, positive, and zero", () => {
  const spy = jest.spyOn(console, 'log').mockImplementation();
  expect(console.log.mock.calls.length).toBe(0);
  arr.plusMinus([5,-2, 0, 1, -9]);
  expect(console.log.mock.calls.length).toBe(3);
  expect(console.log.mock.calls[0][0]).toBe("0.400000");
  expect(console.log.mock.calls[1][0]).toBe("0.400000");
  expect(console.log.mock.calls[2][0]).toBe("0.200000");
  spy.mockRestore();
});

test("miniMaxSum function should log the min and max sum of 4 out of the 5 array numbers", ()=> {
  const spy = jest.spyOn(console, 'log').mockImplementation();
  expect(console.log.mock.calls.length).toBe(0);
  arr.miniMaxSum([4, 7, 8, 2, 6]);
  expect(console.log.mock.calls.length).toBe(1);
  expect(console.log.mock.calls[0][0]).toBe(19);
  expect(console.log.mock.calls[0][1]).toBe(25);
  spy.mockRestore();
})