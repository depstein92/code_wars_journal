/*Write a function named firstNonRepeatingLetter† that takes a string input, and returns the first character that is not repeated anywhere in the string.

For example, if given the input 'stress', the function should return 't', since the letter t only occurs once in the string, and occurs first in the string.

As an added challenge, upper- and lowercase letters are considered the same character, but the function should return the correct case for the initial letter. For example, the input 'sTreSS' should return 'T'.

If a string contains all repeating characters, it should return the empty string ("").

Note: the function is called firstNonRepeatingLetter for historical reasons, but your function should handle any Unicode character.*/


function firstNonRepeatingLetter(s) {

    let arr = s.split(''),
        copy = [...s],
        arr1 = new Array();


    if (arr.length === 1) { /* if only one char */
        return arr.join('');
    }

    if (s === '') {
        return s; /* if s is empty */
    }

    let y = s.match(/(.+)(?=.*?\1)/g).join(''), /**/
        h = s.match(/(.+)(?=.*?\1)/g).join('').toUpperCase(), /**/
        x = y + h;

    for (let i = 0; i < arr.length; i++) {
        if (!x.includes(arr[i]) && !x.includes(arr[i].toUpperCase())) {
            arr1.push(arr[i]);
        }
    }

    if (arr1.length === 0) {
        return ''
    } else if (arr1.length === 1) {
        return arr1[0];
    } else {
        let mapObj = arr1.map(string => string.toLowerCase()),
            dup = mapObj.filter(function(item, i, array) {
                return array.indexOf(item) !== i;
            }).join(''),
            u = arr1.map(obj => dup.indexOf(obj) === -1 ? obj : '')
            .filter(obj => obj !== '');

        return arr1.length === 0 ? '' : u[0];
    }
}


/*Best solution*/

/* User: paolomonster */
function firstNonRepeatingLetter(s) {
    for(var x = 0; x < s.length; x++){
      var rep = s.charAt(x);
      var reg = new RegExp(rep,"i");
      var check = 0;
      for(var j = 0; j < s.length; j++){

        if(s.charAt(j).match(reg) && j != x){
          check++;
        }
      }
      if(check == 0){
        return s.charAt(x);
      }

    }
    return '';
  }
