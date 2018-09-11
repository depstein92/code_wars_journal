// In this kata, you must create a digital root function.
//
// A digital root is the recursive sum of all the digits in a number. Given n, take the sum of the digits of n. If that value has two digits, continue reducing in this way until a single-digit number is produced. This is only applicable to the natural numbers.
//
// Here's how it works (Ruby example given):
//
// digital_root(16)
// => 1 + 6
// => 7
//
// digital_root(942)
// => 9 + 4 + 2
// => 15 ...
// => 1 + 5
// => 6
//
// digital_root(132189)
// => 1 + 3 + 2 + 1 + 8 + 9
// => 24 ...
// => 2 + 4
// => 6
//
// digital_root(493193)
// => 4 + 9 + 3 + 1 + 9 + 3
// => 29 ...
// => 2 + 9
// => 11 ...
// => 1 + 1
// => 2


//My Solution


let a = 16, // 7
    b = 942, // 6
    c = 132189, // 6
    d = 493193; // 2

function digitalRoot(n){
  let firstNum = n.toString()
                  .split('')
                  .map(Number)
                  .reduce((a, b) => { return a + b});

  if(firstNum > 10){
    return digitalRoot(firstNum);
  }

  return firstNum;
}

console.log('test1: 16', digitalRoot(a));
console.log('test2: 6', digitalRoot(b));
console.log('test3: 6', digitalRoot(c));
console.log('test4: 2', digitalRoot(d));
