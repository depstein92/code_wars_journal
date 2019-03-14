/*
Bob is preparing to pass IQ test. The most frequent task in this test is to find out
which one of the given numbers differs from the others.
Bob observed that one number usually differs from the others in evenness.
Help Bob — to check his answers, he needs a program that among the given numbers
finds one that is different in evenness, and return a position of this number.

! Keep in mind that your task is to help Bob solve a real IQ test, which means indexes of the elements start from 1 (not 0)
*/

function iqTest(numbers){

  let convert = numbers.split(" ").filter(obj => obj !== ' ').map(Number),
      even = new Array(), odd = new Array();

  for(let i = 0; i < convert.length; i++){
   if(convert[i] % 2 === 0){
     even.push(convert[i]);
   } else {
     odd.push(convert[i]);
   }
  }

  return even.length > odd.length ?
         convert.indexOf(odd[0]) + 1 :
         convert.indexOf(even[0]) + 1;
}
