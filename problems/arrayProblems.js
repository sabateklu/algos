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

//==============================================

/*
Given a square matrix, calculate the absolute difference between the sums of its diagonals.
*/

var diagonalDifference = function (arr) {
  // Write your code here
  let leftDiag = 0;
  let rightDiag = 0;

  for (var i = 0; i < arr.length; i++) {
     for (var j = 0; j < arr[i].length; j++) {
         if (i === j) {
             leftDiag += arr[i][j];
         }
         if (i +j === arr.length -1) {
             rightDiag += arr[i][j];
         }
     }
  }

  return Math.abs(leftDiag-rightDiag);
}
//==========================================================
/*
Given an array of integers, calculate the ratios of its elements that are positive, negative, and zero. Print the decimal value of each fraction on a new line with  places after the decimal.
*/

function plusMinus(arr) {
  let plus = 0;
  let minus = 0;
  let zero = 0;

  arr.forEach((num) => {
      if (num < 0) minus++;
      else if (num > 0) plus++;
      else if (num === 0) zero++;
  })

  console.log((plus/arr.length).toFixed(6));
  console.log((minus/arr.length).toFixed(6));
  console.log((zero/arr.length).toFixed(6));

};

//==========================================
/*
Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers. Then print the respective minimum and maximum values as a single line of two space-separated long integers.
*/

function miniMaxSum(arr) {
  let min = 0;
  let max = 0;

  arr.sort((a, b)=> a-b);

  for (let i = 0; i < arr.length; i++) {
      if (0 < i  && i < 5) {
          max+= arr[i];
      }
      if ( -1 < i && i< 4) {
          min+= arr[i];
      }
  }

  console.log(min, max);
}
miniMaxSum([4, 7, 8, 2, 6])
module.exports = {
  twoSum,
  diagonalDifference,
  plusMinus,
  miniMaxSum
}