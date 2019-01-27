/*
Move the first letter of each word to the end of it, then add "ay" to the end of the word.
Leave punctuation marks untouched.
*/


function pigIt(str) {
    const isExc = str.split('').includes('!') ? true : false;
    const isQuestion = str.split('').includes('?') ? true : false;

    const pigLatinStr = str.split('')
        .filter(obj => obj !== '!').join('')
        .split('')
        .filter(obj => obj !== '?').join('')
        .split(' ')
        .map(obj => Array.from(obj)
            .slice(1)
            .concat(Array.from(obj).shift())
            .join('') + 'ay')
        .join(' ')
        .split(' ')
        .filter(obj => obj !== 'ay')
        .join(' ');

    return isExc ?
        pigLatinStr + ' !' :
        isQuestion ? pigLatinStr + ' ?' : pigLatinStr;
}
