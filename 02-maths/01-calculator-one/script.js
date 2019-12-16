/* becode/javascript
 *
 * /02-maths/01-calculator-one/script.js - 2.1: calculatrice
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.
var a = +document.getElementById("op-one").value;
var b = +document.getElementById("op-two").value;

(function() {
    // to get the value of an input: document.getElementById("element-id").value


    document.getElementById("addition").addEventListener("click", function() {
        // perform an addition
        alert(a+b);
    });

    document.getElementById("substraction").addEventListener("click", function() {
        // perform an substraction
        alert(a-b);

    });

    document.getElementById("multiplication").addEventListener("click", function() {
        // perform an multiplication
        alert(a*b);

    });

    document.getElementById("division").addEventListener("click", function() {
        // perform an division
        alert(a/b);

    });
})();
