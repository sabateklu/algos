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
  // input: s is a string representing a time ending in PM or AM -> 07:05:45PM
  // output: a string representing time in military time -> 19:05:45
  let timeInChunks = s.split(':');
  let time = '';

  for (let i = 0; i < timeInChunks.length; i++) {
    let suffix = timeInChunks[2].slice(timeInChunks[2].length -2);
    if (suffix === 'AM' && timeInChunks[i] === '12') {
      time+='00:'
    } else if (suffix === 'AM' && i !== 2) {
      time+= timeInChunks[i]+':';
    } else if (suffix === 'AM' && i === 2) {
      time+= timeInChunks[i].slice(0, timeInChunks[i].length -2)
    }

    if (suffix === 'PM' && i === 0 && timeInChunks[0] !== '12') {
      let prefix = (Number(timeInChunks[0]) + 12).toString();
      time += prefix.toString() + ':';
    } else if (suffix === 'PM' && i !== 2) {
      time += timeInChunks[i] + ':';
    } else if (suffix === 'PM' && i === 2) {
      time += timeInChunks[i].slice(0, timeInChunks[i].length -2);
    }
  }
  return time;
}
//timeConversion('03:04:23PM');

module.exports = {
  staircase,
  timeConversion
}