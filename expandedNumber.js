/*You will be given a number and you will need to return it as a string in Expanded Form. For example:

expandedForm(12); // Should return '10 + 2'
expandedForm(42); // Should return '40 + 2'
expandedForm(70304); // Should return '70000 + 300 + 4'*/


function expandedForm(num) {

  let myStr = num.toString().split(''),
      strLength = myStr.length,
      arr = new Array();

  if(strLength === 1){
     return `${num}`;
   }

  for(let i = 0; i < strLength; i++){

    if(myStr[i] === 0){
      arr.push('0')
    }

    if(i + 1 === strLength){
      arr.push(myStr[i])
    }


    if(myStr[i] !== 0 && i + 1 !== strLength){
      for(let x = 1;  x < (strLength - myStr.indexOf(myStr[i])); x++){
        myStr[i] += '0'
      }
    arr.push(myStr[i]);
   }
  }
  return arr.filter((obj) => obj.match(/[1-9]/))
             .map(obj => obj += ' + ')
             .reduce((a, b) => a + b).slice(0, -3);
  }
