function formatDuration (seconds) {
  if(seconds < 60){
   return seconds === 1 ? `${seconds} second` : `${seconds} seconds` ;
  } else if(seconds > 60 && seconds < 3600){
    let minutes = Math.floor(seconds / 60),
        second =  seconds - minutes * 60,
        ifMinuteIsPlural = minutes > 1 ? `${minutes} minutes` : `${minutes} minute`,
        ifSecondsExist = second ? ` and ${second} seconds` : '';

    return  ifMinuteIsPlural + ifSecondsExist;
  } else if(seconds => 3600){
    let hour = Math.floor(seconds / 3600),
        minutes = Math.floor(seconds % 3600 / 60),
        second =   seconds % 3600 % 60,
        ifSecondsExist = second ?
                         second > 1 ? ` and ${second} seconds` : ` and ${second} second` :
                         ' ',
        ifMinutesExist = minutes ?
                         minutes > 1 ? `${minutes} minutes` : `${minutes} minute` :
                         ' ',
        ifHourIsPlural = hour > 1 && second || minutes  ? //could throw error
                        `${hour} hour, ` : `${hour} hour`;

    return (ifHourIsPlural + ifMinutesExist + ifSecondsExist).trim();

  } else if(seconds > 86400){
     let day = Math.floor(seconds / 86400 ),
         hour = Math.floor(seconds / 3600),
         minutes = Math.floor(seconds % 3600 / 60),
         second =   seconds % 3600 % 60,
         ifSecondsExist = second ?
                         second > 1 ? ` and ${second} seconds` : ` and ${second} second` :
                         ' ',
         ifMinutesExist = minutes ?
                         minutes > 1 ? `${minutes} minutes` : `${minutes} minute` :
                         ' ',
         ifHourExists = hour > 1 && second || minutes  ? //could throw error
                        `${hour} hour, ` : `${hour} hour`;

  }

}
