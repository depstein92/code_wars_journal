function parseIntReloaded(string) {
    let numbers = [
        "zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven",
        "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "eighteen", "nineteen", "twenty",
        "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"
    ];

    let removeSpecialChar = string.replace(/[^a-zA-Z ]/g, " "),
        wordArr = removeSpecialChar.split(" "),
        numArray = new Array();

    let getValues = (wordArr,
        i,
        singleComp,
        doubleComp,
        bySingle,
        byTens,
        byTenandTwenty,
        byHundreds,
        byThousands,
        byHundredThousands
    ) => {
        if (wordArr[i] === singleComp) {
            if (wordArr[i + 1] === "hundred") {
                if (wordArr[i + 2] === "thousand") {
                    numArray.push(byHundredThousands);
                } else {
                    numArray.push(byHundreds);
                }
            } else if (wordArr[i + 1] === "thousand") {
                numArray.push(byThousands);
            } else {
                numArray.push(bySingle);
            }
        } else if (wordArr[i] === doubleComp) {
            numArray.push(byTenandTwenty)
        } else {
              if(numbers.includes(wordArr[i + 1])){
                if(wordArr[i + 2] === "thousand"){
                   numArray.push(byTens * 1000);
                } else if(wordArr[i + 2] === "hundred"){
                   numArray.push(byTens * 100);
                } else{
                   numArray.push(byTens);
                }
              }
        }
    }

    for (let i = 0; i < wordArr.length; i++) {
        if (numbers.includes(wordArr[i])) {
            if (wordArr[i] === "one") {
                if (wordArr[i + 1] === "hundred") {
                    if (wordArr[i + 2] === "thousand") {
                        numArray.push(100000);
                    } else {
                        numArray.push(100);
                    }
                } else if (wordArr[i + 1] === "thousand") {
                    numArray.push(1000);
                } else if (wordArr[i + 1] === "million") {
                    numArray.push(1000000);
                } else {
                    numArray.push(1);
                }
            } else if (wordArr[i].includes("tw")) {
                getValues(wordArr, i, "two", "twelve", 2, 20, 12, 200, 2000, 200000);
            } else if (wordArr[i].includes("th")) {
                getValues(wordArr, i, "three", "thirteen", 3, 30, 13, 300, 3000, 300000);
            } else if (wordArr[i].includes("fo")) {
                getValues(wordArr, i, "four", "fourteen", 4, 40, 14, 400, 4000, 400000);
            } else if (wordArr[i].includes("fi")) {
                getValues(wordArr, i, "five", "fifteen", 5, 50, 15, 500, 5000, 500000);
            } else if (wordArr[i].includes("six")) {
                getValues(wordArr, i, "six", "sixteen", 6, 60, 16, 600, 6000, 600000);
            } else if (wordArr[i].includes("sev")) {
                getValues(wordArr, i, "seven", "seventeen", 7, 70, 17, 700, 7000, 700000);
            } else if (wordArr[i].includes("eig")) {
                getValues(wordArr, i, "eight", "eighteen", 8, 80, 18, 800, 8000, 800000);
            } else if (wordArr[i].includes("nin")) {
                getValues(wordArr, i, "nine", "nineteen", 9, 90, 19, 900, 9000, 900000);
            } else if (wordArr[i].includes("zero")) {
                numArray.push(0);
            } else if (wordArr[i].includes("ten")) {
                if (wordArr[i + 1] === "hundred") {
                    numArray.push(10000);
                } else if (wordArr[i + 1] === "thousand") {
                    numArray.push(10000);
                } else {
                    numArray.push(10);
                }
            } else if (wordArr[i].includes("eleven")) {
                if (wordArr[i + 1] === "hundred") {
                    numArray.push(1100);
                } else if (wordArr[i + 1] === "thousand") {
                    numArray.push(11000);
                } else {
                    numArray.push(11);
                }
            } else {
                numArray.push('Not a number or number or number not found');
            }
        }
    }
    console.log(numArray);
    console.log(numArray.reduce((a, b) => a + b))
    return numArray.reduce((a, b) => a + b);
}
//twenty-six thousand three hundred and fifty-nine
//ninety-nine thousand nine hundred and ninety-nine
//six hundred sixty-six thousand six hundred sixty-six
//eight hundred eighty-eight thousand eight hundred and eighty-eight

parseIntReloaded("six hundred sixty-six thousand six hundred sixty-six");
