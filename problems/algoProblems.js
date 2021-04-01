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


// return if two strings are anagrams of each other
const isAnagram = (str1, str2) =>{
  // create function that takes string input and sanitizes it and returns an object with the letters broken up into keys and their value the number of times the letter appears in the string

  let helper = (str)=> {
    str = (str.replace(/[^A-Za-z]/g, "")).toLowerCase();

    let counter = {};

    for (let i = 0; i < str.length; i++) {
      if (counter[str[i]]) {
        counter[str[i]]++;
      } else {
        counter[str[i]] = 1;
      }
    }

    return counter;
  }

  let strOneCount = helper(str1);
  let strTwoCount = helper(str2);

  for (let key in strOneCount) {
    if (strTwoCount[key]) {
      if (strOneCount[key] !== strTwoCount[key]) {
        return false;
      }
    } else {
      return false;
    }
  }

  if (JSON.stringify(strOneCount).length !== JSON.stringify(strTwoCount).length) {
    return false;
  }

  return true;
}
console.log(isAnagram('dogrkb29p3i3hr$ $9?', 'catmodjb'));// false
console.log(isAnagram('dog$ $9?', 'god')); // true
console.log(isAnagram('mouse', 'useoml'));// false


//==========================================================================
// Complete the countApplesAndOranges function below.
function countApplesAndOranges(s, t, a, b, apples, oranges) {

  /*
  countApplesAndOranges has the following parameter(s):

  s: integer, starting point of Sam's house location.
  t: integer, ending location of Sam's house location.
  a: integer, location of the Apple tree.
  b: integer, location of the Orange tree.
  apples: integer array, distances at which each apple falls from the tree.
  oranges: integer array, distances at which each orange falls from the tree.
  */

  // output:
  /*
  Print two integers on two different lines:

  The first integer: the number of apples that fall on Sam's house.
  The second integer: the number of oranges that fall on Sam's house.
  */

  // declare output variables for num of apples and oranges falled on sams house

      // create a helper function that applies the definitive position of the fruit after     falling from the tree

      const helper = (positionOfTree, arrayOfDistance) => {
          let definitiveDist = [];

          arrayOfDistance.forEach((num) => {
              definitiveDist.push(num + positionOfTree);
          })

          return definitiveDist;
      }

      let applesPosition= helper(a, apples);
      let orangePosition = helper(b, oranges);

      // create a helper function that iterates through each definitive position of fruit     and sees if it is in the range of the house

      const onHouse = (fruitPositions, houseStart, houseEnd) => {
          let onTheHouse = 0;
          fruitPositions.forEach((fruit) => {
              if (fruit >= houseStart && fruit <= houseEnd) {
                  onTheHouse++;
              }
          })
          return onTheHouse;
      }

      let numOfApples = onHouse(applesPosition, s, t);
      let numOfOranges = onHouse(orangePosition, s, t);

      console.log(numOfApples);
      console.log(numOfOranges);
  }


module.exports = {
  staircase,
  timeConversion,
  isAnagram
}