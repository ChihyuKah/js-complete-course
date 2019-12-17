/* becode/javascript
 *
 * /02-maths/02-calculator-two/script.js - 2.2: calculatrice (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

function calc(chih) {
    let opone = document.getElementById("op-one").value;
    let optwo = document.getElementById("op-two").value;
    let solution;

// Don't forget the break! that will cause it to stop the switch (getting out)
    switch (chih) {
        case "addition":
            solution = parseInt(opone) + parseInt(optwo);
            alert(solution);
            break;
        case "substraction":
            solution = parseInt(opone) - parseInt(optwo);
            alert(solution);
            break;
        case "multiplication":
            solution = parseInt(opone) * parseInt(optwo);
            alert(solution);
            break;
        case "division":
            solution = parseInt(opone) / parseInt(optwo);
            alert(solution);
    }

}
