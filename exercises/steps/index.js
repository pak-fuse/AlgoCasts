// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

// Solution #2 : Recursive function
function steps(n, row = 0, stair = '') {
  if (n === row) return;

  if (n === stair.length) {
    console.log(stair);
    return steps(n, row + 1);
  }

  const add = stair.length <= row ? '#' : ' ';

  steps(n, row, stair + add);
}

module.exports = steps;

/*
// My Answer
function steps(n) {
  let result = '';

  for (let i = 0; i < n; i++) {
    result += '#';
    console.log(result.padEnd(n, ' '));
  }
}

// Solution #1
function steps(n) {
  for (let row = 0; row < n; row++) {
    let stair = '';

    for (let col = 0; col < n; col++) {
      stair = col <= row ? stair + '#' : stair + ' ';
    }

    console.log(stair);
  }
}
*/
