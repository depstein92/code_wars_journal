/*
Check out the resources on the page's right side to learn more about arrays. The video tutorial is by Gayle Laakmann McDowell,
author of the best-selling interview book Cracking the Coding Interview.
A left rotation operation on an array shifts each of the array's elements
unit to the left. For example, if  left rotations are performed on array ,
then the array would become .
Given an array  of  integers and a number,
perform  left rotations on the array.
Return the updated array to be printed as a single line of space-separated integers.
*/

'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the rotLeft function below.
function rotLeft(a, d) {
    var arr = [];
    for (var i = 0; i < a.length; i++) {
        arr.push(a[i]);
    };
    for (var j = 1; j <= d; j++) {
        arr.shift(arr.push(arr[0]));
    }
    return arr;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const nd = readLine().split(' ');

    const n = parseInt(nd[0], 10);

    const d = parseInt(nd[1], 10);

    const a = readLine().split(' ').map(aTemp => parseInt(aTemp, 10));

    const result = rotLeft(a, d);

    ws.write(result.join(' ') + '\n');

    ws.end();
}
