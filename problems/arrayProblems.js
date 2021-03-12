/*
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.
*/

var twoSum = function(nums, target) {
  // input: an array of numbers and  target number
  // output: an array of the indices of the two numbers that add up to the target number
  var indices = [];
  nums.forEach((num, i) => {
    nums.forEach((item, j) => {
      if (num + item === target && i !== j && indices.length < 2) {
        indices.push(i, j);
      }
    })
  })

  return indices;
};

module.exports = {
  twoSum
}