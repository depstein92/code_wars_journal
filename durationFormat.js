function formatDuration(seconds) {
    if (seconds === 0) return 'now';
    if (seconds < 60) {
        return seconds === 1 ? `${seconds} second` : `${seconds} seconds`;
    } else if (seconds > 60 && seconds < 3600) {
        let minutes = Math.floor(seconds / 60),
            second = seconds - minutes * 60,
            ifMinuteIsPlural = minutes > 1 ? `${minutes} minutes` : `${minutes} minute`,
            ifSecondsExist = second ? ` and ${second} seconds` : '';

        return ifMinuteIsPlural + ifSecondsExist;
    } else if (seconds >= 3600 && seconds < 86400) {
        console.log('sec', seconds)
        let hour = Math.floor(seconds / 3600),
            minutes = Math.floor(seconds % 3600 / 60),
            second = seconds % 3600 % 60,
            ifSecondsExist = second ?
            second > 1 ? ` and ${second} seconds` : ` and ${second} second` :
            ' ',
            ifMinutesExist = minutes ?
            minutes > 1 ? `${minutes} minutes` : `${minutes} minute` :
            ' ',
            ifHourIsPlural = hour > 1 && second || minutes ?
            `${hour} hour, ` : `${hour} hour`;

        return (ifHourIsPlural + ifMinutesExist + ifSecondsExist).trim();

    } else if (seconds > 86400 && seconds < 31557600) {
        let day = Math.floor(seconds / (3600 * 24)),
            hour = Math.floor(seconds / 3600 / 60 / 60),
            minutes = Math.floor(seconds % 3600 / 60),
            second = seconds % 3600 % 60,
            ifSecondsExist = second ?
            second > 1 ? ` and ${second} seconds` : ` and ${second} second` :
            ' ',
            ifMinutesExist = minutes ?
            minutes > 1 ? `${minutes} minutes` : `${minutes} minute` :
            ' ',
            ifHourExist = hour > 1 ?
            `${hour} hours, ` : `${hour} hour, `, ///?
            ifDayIsPlural = day > 1 && hour && minutes ?
            `${day} days, ` : `${day} day`;

        return ifDayIsPlural + ifHourExist + ifMinutesExist + ifSecondsExist;
    } else if (seconds > 31557600) {

        let year = Math.floor(seconds / 31557600),
            day = Math.floor(seconds / (3600 * 60) / 9),
            hour = Math.floor(seconds / 3600 / 60 / 60),
            minutes = Math.floor(seconds % 3600 / 60),
            second = seconds % 3600 % 60,
            ifSecondsExist = second ?
            second > 1 ? ` and ${second} seconds` : ` and ${second} second` :
            ' ',
            ifMinutesExist = minutes ?
            minutes > 1 ? `${minutes} minutes` : `${minutes} minute` :
            ' ',
            ifHourExist = hour > 1 ?
            `${hour} hours, ` : `${hour} hour, `,
            ifDayExist = day > 1 ?
            `${day} days, ` : `${day} day, `,
            ifYearIsPlural = year > 1 ?
            `${year} years, ` : `${year} year`;

        return ifYearIsPlural + ifDayExist + ifHourExist + ifMinutesExist + ifSecondsExist;
    }
}
