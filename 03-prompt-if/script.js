/* becode/javascript
 *
 * /01-base/03-prompt-if/script.js - 1.3: promp & if
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    var cake = confirm("Would you like some suspicious cake?");

    if (cake) {
        window.confirm("Congratulations, you get some cake!");
    } else {
        confirm("Fine, More cake for me then!");
    }
})();