const algos = require('../problems/algoProblems.js');

test("should log a staircase made of hashtags", () => {
  const spy = jest.spyOn(console, 'log').mockImplementation();
  expect(console.log.mock.calls.length).toBe(0);
  algos.staircase(4);
  expect(console.log.mock.calls.length).toBe(4);
  expect(console.log.mock.calls[0][0]).toBe("   #");
  expect(console.log.mock.calls[1][0]).toBe("  ##");
  expect(console.log.mock.calls[2][0]).toBe(" ###");
  expect(console.log.mock.calls[3][0]).toBe("####");
  spy.mockRestore();
})