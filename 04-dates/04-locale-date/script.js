/* becode/javascript
 *
 * /04-dates/04-locale-date/script.js - 4.4: date textuelle
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    // The format it's asking is DAY, DATE, MONTH , YEAR, HOURh MINUTES
                                //Sunday 28 December 2018 22h23
    //Judging by the links I searched for I will need to use an Array for this
    var newDate = new Date();
    document.getElementById("target").innerHTML = newDate;

    var day = getDay();
    var date = getDate();
    var month = getMonth();
    var year = getYear();
    var hour = getHour();
    var minute = getMinute();

        //testing purposes

    console.log("day" + " " + "date" + " " + "month" + " " + "year" + " " + "hour" + " " + "minute")

   

})();
