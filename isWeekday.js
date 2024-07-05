function isWeekday(day) {
    var lowerCaseDay = day.toLowerCase();
        return lowerCaseDay !== 'saturday' && lowerCaseDay !== 'sunday'
    }