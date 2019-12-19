/* becode/javascript
 *
 * /04-dates/02-title-by-hour-two/script.js - 4.2: texte en fonction de l'heure (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    var greeting;

    //Get new hours and minutes
    var hour = new Date().getHours();
    var minute  =new Date().getMinutes();

    if (hour <= 17 && minute <= 30) {
        greeting = "Hello it's me"}

    else if (hour >= 18 && minute >=31) {
        greeting = "Good evening"}

    else {
        greeting = "The World is going to END!"
    }
    // showing it in the HTML
    document.getElementById("target").innerHTML = greeting;

})();
