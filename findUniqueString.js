/*There is an array of strings. All strings contains similar letters except one. Try to find it!

findUniq([ 'Aa', 'aaa', 'aaaaa', 'BbBb', 'Aaaa', 'AaAaAa', 'a' ]) === 'BbBb'
findUniq([ 'abc', 'acb', 'bac', 'foo', 'bca', 'cab', 'cba' ]) === 'foo'
Strings may contain spaces. Spaces is not significant, only non-spaces symbols matters. E.g. string that contains only spaces is like empty string.

It’s guaranteed that array contains more than 3 strings.*/


function findUniq(arr) {

  let charArr = arr.map((obj) => {
    return obj.split();
  }).join();

  let uniqueArr = '';

  for(let x = 0; x < charArr.length; x++){
    if(uniqueArr.indexOf(charArr.charAt(x))==-1){
      uniqueArr += charArr[x];
    }
  }

  let uniqueChar = uniqueArr[uniqueArr.length - 1];

  const uniqueString = arr.map(obj => {
    let j = obj.split('');
    if(j.includes(uniqueChar)){
     return obj;
    }
   }).filter(obj => obj )[0];

   return uniqueString;
}
