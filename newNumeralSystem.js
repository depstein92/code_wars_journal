// Your Informatics teacher at school likes coming up with new ways to help you understand the material. When you started studying numeral systems, he introduced his own numeral system, which he's convinced will help clarify things. His numeral system has base 26, and its digits are represented by English capital letters - A for 0, B for 1, and so on.
//
// The teacher assigned you the following numeral system exercise: given a one-digit number, you should find all unordered pairs of one-digit numbers whose values add up to the number.
//
// Example
//
// For number = 'G', the output should be
// newNumeralSystem(number) = ["A + G", "B + F", "C + E", "D + D"].
//
// Translating this into the decimal numeral system we get: number = 6, so it is ["0 + 6", "1 + 5", "2 + 4", "3 + 3"].


function newNumeralSystem(number) {

    const letters = [
        'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I',
        'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S',
        'T', 'U', 'V', 'W', 'X', 'Z'
    ];

    if (!letters.includes(number)) {
        return [];
    }

    const setChars = letters.slice(0, letters.indexOf(number) + 1),
        numDivided = new Array(),
        numberArr = new Array(),
        trackChar = new Array(),
        trackCharacters = new Array(),
        arrayLength = letters.indexOf(number) + 1;

    for (let i = 0; i < arrayLength; i++) {
        if (setChars.indexOf(setChars[i]) + setChars.indexOf(setChars[i]) === (arrayLength - 1)) {
            if (!trackChar.includes(setChars[i])) {
                numDivided.push(`${setChars[i]} + ${setChars[i]}`);
                trackChar.push(setChars[i]);
                numberArr.push(`${i} + ${i}`)
            }
        }
        for (let j = i + 1; j < arrayLength; j++) {
            if (setChars.indexOf(setChars[i]) + setChars.indexOf(setChars[j]) ===
                (arrayLength - 1)) {
                numDivided.push(`${setChars[i]} + ${setChars[j]}`);
                numberArr.push(`${i} + ${j}`)
            }
        }
    }
    return numDivided;
}
