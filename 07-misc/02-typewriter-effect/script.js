/* becode/javascript
 *
 * /07-misc/02-typewriter-effect/script.js - 7.2: effet machine à écrire
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    var i = 0;
    var txt = document.getElementById("target").innerHTML;

    document.getElementById("target").innerHTML = "";

    function typeWriter() {
        if (i < txt.length) {
            document.getElementById("target").innerHTML += txt.charAt(i);
            i++;

            var random = Math.random() * 300;
            setTimeout(typeWriter, random);
        }
    }

    //to appear
    typeWriter();


})();


