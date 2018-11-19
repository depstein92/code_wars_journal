/*In this example you have to validate if a user input string is alphanumeric. The given string is not nil, so you don't have to check that.

The string has the following conditions to be alphanumeric:

At least one character ("" is not valid)
Allowed characters are uppercase / lowercase latin letters and digits from 0 to 9
No whitespaces/underscore*/


function alphanumeric(string){

 let chars = "~`!#$%^&*+=_-[]\\\';,/{}|\":<>?\n";
 let isSecure = true;

 if(string.includes(" ") || string.split('').length === 0){
   return false;
 }

 for(let i=0; i < string.length; i++){
  if(chars.indexOf(string.charAt(i)) != -1){
   isSecure = false;
  }
 }

 return isSecure;
}
