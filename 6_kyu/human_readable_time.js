function humanReadable(seconds) {
    let hours;
    let minutes;
    if (seconds >= 3600) {
        hours = Math.floor(seconds / 3600);
        seconds -= (hours * 3600);
        if (hours < 10) {
            hours = '0' + hours.toString();
        } else {
            hours = hours.toString();
        }
    } else {hours = '00'};
    if (seconds >= 60) {
        minutes = Math.floor(seconds / 60);
        seconds -= (minutes * 60);
        if (minutes < 10) {
            minutes = '0' + minutes.toString();
        } else {
            minutes = minutes.toString();
        }
    } else {minutes = '00'};
    if (seconds < 10) {
        seconds = '0' + seconds.toString();
    } else {
        seconds = seconds.toString();
    }

    return hours + ':' + minutes + ':' + seconds;

}
