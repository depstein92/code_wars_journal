/*
Given: an array containing hashes of names

Return: a string formatted as a list of names separated by commas except for the last two names, which should be separated by an ampersand.

Example:

list([ {name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'} ])
// returns 'Bart, Lisa & Maggie'

list([ {name: 'Bart'}, {name: 'Lisa'} ])
// returns 'Bart & Lisa'

list([ {name: 'Bart'} ])
// returns 'Bart'

list([])
// returns '
*/

function list(names){
  if(names.length === 0){
   return "";
  }

  if(names.length === 1){
   return names[0].name;
  }

  const lastNameInNames = { name: ' & ' + names[names.length - 1].name };

  names.pop();
  names.push(lastNameInNames);

  return names.map((obj, index) => {
   return index === names.length - 2  || index === names.length - 1 ? obj.name : obj.name + ', '
  }).join('');
}
