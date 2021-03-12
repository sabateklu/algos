/*
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.
*/

var twoSum = function(nums, target) {
  // input: an array of numbers and  target number
  // output: an array of the indices of the two numbers that add up to the target number
  var indices = [];

  for (var i = 0; i < nums.length; i++) {
      for (var j = 1; j < nums.length; j++) {
          if (nums[i] + nums[j] === target && i !== j) {
              indices.push(i);
              indices.push(j);
              return indices;
          }
      }
  }
};

/*
Runtime: 72 ms, faster than 94.30% of JavaScript online submissions for Two Sum.
Memory Usage: 38.8 MB, less than 41.48% of JavaScript online submissions for Two Sum.
*/

module.exports = {
  twoSum
}