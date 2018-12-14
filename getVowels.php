<?php

$myStr = 'aaeeiioouu';
$vowels = ['a', 'e', 'i', 'o', 'u'];
$vowelCount = 0;

for($i = 0; $i < strlen($myStr); $i++){
  for($j = 0; $j < 5; $j++){
    if($myStr[$i] === $vowels[$j]){
      $vowelCount++;
      break;
    }
  }
}
return $vowelCount;

?>
