/*If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.

Note: If the number is a multiple of both 3 and 5, only count it once.*/


//My Solution

 function solution(number){

   if(number < 0){ return 0 };
 
   let arr = Array.from(Array(number).keys())
               .map((obj, i) => {
                 if(obj % 3 === 0 || obj % 5 === 0){ return obj; } 
               })
               .filter(obj => obj !== undefined);

   return arr.length !== 0 ?
           arr.reduce((a, b) => { return a + b }) : 0;
}

/*Best Solution*/


function solution(number){
  return number < 3 ? 0
   : [...Array(number).keys()]
    .map(int => (int % 3 === 0 || int % 5 === 0) ? int : 0 )
    .reduce((a, b) => a + b )

}

