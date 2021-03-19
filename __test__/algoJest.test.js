const algos = require('../problems/algoProblems.js');

jest.spyOn(console, 'log');

test("should log a staircase made of hashtags", () => {
  expect(console.log.mock.calls.length).toBe(0);
  algos.staircase(4);
  expect(console.log.mock.calls.length).toBe(4);
  expect(console.log.mock.calls[0][0]).toBe("   #");
  expect(console.log.mock.calls[1][0]).toBe("  ##");
  expect(console.log.mock.calls[2][0]).toBe(" ###");
  expect(console.log.mock.calls[3][0]).toBe("####");
})