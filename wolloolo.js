/*
Introduction
There is a war and nobody knows - the alphabet war!
There are two groups of hostile letters. The tension between left side letters and right side letters was too high and the war began. The letters have discovered a new unit - a priest with Wo lo looooooo power.


Task
Write a function that accepts fight string consists of only small letters and return who wins the fight. When the left side wins return Left side wins!, when the right side wins return Right side wins!, in other case return Let's fight again!.

The left side letters and their power:

 w - 4
 p - 3
 b - 2
 s - 1
 t - 0 (but it's priest with Wo lo loooooooo power)
The right side letters and their power:

 m - 4
 q - 3
 d - 2
 z - 1
 j - 0 (but it's priest with Wo lo loooooooo power)
The other letters don't have power and are only victims.
The priest units t and j change the adjacent letters from hostile letters to friendly letters with the same power.

mtq => wtp
wjs => mjz
A letter with adjacent letters j and t is not converted i.e.:

tmj => tmj
jzt => jzt
The priests (j and t) do not convert the other priests ( jt => jt).

Example
alphabetWar("z")         //=>  "z"  => "Right side wins!"
alphabetWar("tz")        //=>  "ts" => "Left side wins!"
alphabetWar("jz")        //=>  "jz" => "Right side wins!"
alphabetWar("zt")        //=>  "st" => "Left side wins!"
alphabetWar("azt")       //=> "ast" => "Left side wins!"
alphabetWar("tzj")       //=> "tzj" => "Right side wins!"

*/



function alphabetWar(fight)
{
    let leftSide = { w : 4, p : 3, b : 2, s : 1, t: "Left side wins!" };
    let rightSide = { m : 4, q : 3, d : 2, z : 1, j : "Right side wins!" };
    let leftSum = 0;
    let rightSum = 0;
    let woloMessage = '';

    for(let i = 0; i < fight.length; i++){
      if(rightSide.hasOwnProperty(fight[i])){
       if(fight[i] === 'j'){
        woloMessage = "Right side wins!";
       } else{
        rightSum += rightSide[fight[i]];
       }
      }

      if(leftSide.hasOwnProperty(fight[i])){
       if(fight[i] === 't'){
        woloMessage = "Left side wins!";
       } else{
        leftSum += leftSide[fight[i]];
       }
      }
    }

    if(woloMessage != ''){
     return woloMessage;
    } else{
      if(leftSum > rightSum){
       return "Left side wins!";
      } else if(leftSum < rightSum){
       return "Right side wins!";
      } else{
       return "Let's fight again!";
      }
    }
}
