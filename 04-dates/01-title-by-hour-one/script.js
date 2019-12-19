/* becode/javascript
 *
 * /04-dates/01-title-by-hour-one/script.js - 4.1: texte en fonction de l'heure (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {


    var greeting;

    //Get new hours
    var time = new Date().getHours();

    if (time < 18) {
        greeting = "Hello, it's me"}

    else if (time > 18) {
        greeting = "Good evening"}

    else {
        greeting = "The World is going to END!"
    }

    document.getElementById("target").innerHTML = greeting;


})();
