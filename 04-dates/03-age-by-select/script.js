/* becode/javascript
 *
 * /04-dates/03-age-by-select/script.js - 4.3: calculateur d'âge
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    document.getElementById("run")addEventListener("click", function () {



        var getDay = document.getElementById("dob-day").value;
        var getMonth = document.getElementById("dob-month").value;
        var getYear = document.getElementById("dob-year").value;

        var currentDate = new Date();

        var dob = new Date(y, m, d);
         console.log(dob);
    
})();
