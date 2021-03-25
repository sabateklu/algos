/*
Staircase detail

This is a staircase of size :

   #
  ##
 ###
####
Its base and height are both equal to n. It is drawn using # symbols and spaces. The last line is not preceded by any spaces.

Write a program that prints a staircase of size n.

*/

function staircase(n) {
  for (var i = 1; i <= n; i++) {
      let step = '';
      while (step.length < n - i) {
          step+= ' ';
      };
      while ( i < n - step.length + i) {
          step+= '#';
      }
      console.log(step);

  }
}

/*
Given a time in -hour AM/PM format, convert it to military (24-hour) time.

Note: - 12:00:00AM on a 12-hour clock is 00:00:00 on a 24-hour clock.
- 12:00:00PM on a 12-hour clock is 12:00:00 on a 24-hour clock.
*/

function timeConversion(s) {

}

module.exports = {
  staircase
}