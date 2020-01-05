/* becode/javascript
 *
 * /06-dom/12-change-event-input-two/script.js - 6.12: événement change (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    var input = document.getElementById("pass-one");
    var val = document.getElementById("validity");

    // Reg exp -> Useful guide : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions
    var number = new RegExp (/\d{2}/);
    document.getElementById('pass-one').setAttribute("minlength",8);


    input.addEventListener("input",function () {

        if (input.value.length >= 8 && input.value.match(number)) {

            val.innerHTML = "Ok";
        } else if (input.value.length <= 9 ) {

            val.innerHTML = "Not ok";
        }

    })




})();
