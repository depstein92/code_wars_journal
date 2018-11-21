function parseIntReloaded(string) {
    let numbers = [
      "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven",
      "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "eighteen", "nineteen", "twenty",
      "thirty", "fourty", "fifty", "sixty", "seventy", "eighty", "ninety"
  ];

    let wordArr = string.split(" "),
        numArray = new Array();

    let getValues = ( wordArr,
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
      if(wordArr[i] === singleComp){
        if(wordArr[i + 1] === "hundred"){
            if(wordArr[i + 2] === "thousand"){
              numArray.push(byHundredThousands);
            } else{
              numArray.push(byHundreds);
            }
        } else if(wordArr[i + 1] === "thousand"){
          numArray.push(byThousands);
        } else{
          numArray.push(bySingle);
        }
      } else if(wordArr[i] === doubleComp){
        numArray.push(byTenandTwenty)
      } else{
        numArray.push(byTens);
      }
    }

    for (let i = 0; i < wordArr.length; i++) {
        if (numbers.includes(wordArr[i])) {
            if (wordArr[i] === "one") {
                if (wordArr[i + 1] === "hundred") {
                    if (wordArr[i + 2] === "thousand") {
                        return 100000;
                    } else {
                        return 100;
                    }
                } else if (wordArr[i + 1] === "thousand") {
                        return 1000;
                } else if (wordArr[i + 1] === "million"){
                        return 1000000;
                } else{
                        return 1;
                }
            } else if(wordArr[i].includes("tw")){
                return getValues(wordArr, i, "two", "twelve", 2, 20, 12, 200, 2000, 200000);
            } else if(wordArr[i].includes("th")){
                return getValues(wordArr, i, "three", "thirteen", 3, 30, 13, 300, 3000, 300000);
            } else if(wordArr[i].includes("fo")){
                return getValues(wordArr, i, "four", "fourteen", 4, 40, 14, 400, 4000, 400000);
            } else if(wordArr[i].includes("fi")){
                return getValues(wordArr, i, "five", "fifteen", 5, 50, 15, 500, 5000, 500000);
            } else if(wordArr[i].includes("six")){
                return getValues(wordArr, i, "six", "sixteen", 6, 60, 16, 600, 6000, 600000);
            } else if(wordArr[i].includes("sev")){
                return getValues(wordArr, i, "seven", "seventeen", 7, 70, 17, 700, 7000, 700000);
            } else if(wordArr[i].includes("eig")){
                return getValues(wordArr, i, "eight", "eighteen", 8, 80, 18, 800, 8000, 800000);
            } else if(wordArr[i].includes("nin")){
                return getValues(wordArr, i, "nine", "nineteen", 9, 90, 19, 900, 9000, 900000);
            } else if(wordArr[i].includes("sev")){
                return getValues(wordArr, i, "seven", "seventeen", 7, 70, 17, 700, 7000, 700000);
            }
        }
    }
  const num = numArray.map((a, b) => a + b );
  return num
}


 parseIntReloaded("two thousand two hundred");
