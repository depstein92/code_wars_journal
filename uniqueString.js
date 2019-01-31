/*
There is an array of strings. All strings contains similar letters except one. Try to find it!

findUniq([ 'Aa', 'aaa', 'aaaaa', 'BbBb', 'Aaaa', 'AaAaAa', 'a' ]) === 'BbBb'
findUniq([ 'abc', 'acb', 'bac', 'foo', 'bca', 'cab', 'cba' ]) === 'foo'
Strings may contain spaces. Spaces is not significant, only non-spaces symbols matters. E.g. string that contains only spaces is like empty string.

It’s guaranteed that array contains more than 3 strings.

*/
function findUniq(arr) {

    const arrMap = arr.map(obj => obj.split('')),
        charMap = [],
        charCount = {};

    for (let i = 0; i < arrMap.length; i++) {
        for (let x = 0; x < arrMap[i].length; x++) {
            if (!charMap.includes(arrMap[i][x])) {
                charMap.push(arrMap[i][x]);
            }
        }
    }

    charMap.forEach((obj, index) => {
        charCount[obj.toLowerCase()] = 0;
    });

    for (let i = 0; i < arrMap.length; i++) {
        for (let x = 0; x < arrMap[i].length; x++) {
            if (Object.values(charMap).includes(arrMap[i][x])) {
                charCount[`${arrMap[i][x]}`]++;
            }
        }
    }

    const uniqueLetter = Object.keys(charCount).reduce((a, b) => charCount[a] < charCount[b] ? a : b);
    const uniqueWord = arr.filter(obj => obj.split('').includes(uniqueLetter));
    return uniqueWord[0];
}
