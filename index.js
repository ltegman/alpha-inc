'use strict';

// This module will increment alphanumeric counters using 0-9 and a-Z
// For example next('a9') => 'aa'
// return null for invalid input
// blacklist is an array of strings you want to skip
exports.next = function next(input, blacklist) {
  // lookup for borders of charcode increments
  const borders = {
    57: 97,
    122: 65,
    90: 48
  };

  // return a starting counter if input is falsey
  if (!input) {
    return '0';
  }
  // return null if input is otherwise invalid
  if (typeof input !== 'string' || input.match(/[^a-zA-Z0-9]/)) {
    return null;
  }
  // incriment and return
  let nextStringArr = input.split('');
  for (let i = input.length - 1; i >= 0; i--) {
    let charCode = nextStringArr[i].charCodeAt(0);
    let nextChar;
    // is char on a border or not?
    if (borders.hasOwnProperty(charCode)) {
      nextChar = borders[charCode];
    } else {
      nextChar = charCode + 1;
    }

    nextStringArr[i] = String.fromCharCode(nextChar);

    // do we need to increment the next character?
    if (charCode === 90) {
      // do we need to add a new character?
      if (i === 0) {
        nextStringArr.unshift('0');
        i++;
      } else {
        continue;
      }
    }

    let nextString = nextStringArr.join('');

    // is this string blacklisted?
    if (blacklist && blacklist.indexOf(nextString) > -1) {
      return this.next(nextString, blacklist);
    }
    return nextString;
  }
};
