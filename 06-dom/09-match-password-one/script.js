/* becode/javascript
 *
 * /06-dom/09-match-password-one/script.js - 6.9: vérification de mots de passe (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    //on click
    document.getElementById("run").addEventListener("click", function f() {

        //to get the values of both passwords input fields
        var p1 = document.getElementById("pass-one").value;
        var p2 = document.getElementById("pass-two").value;


        //to test
        console.log (p1,p2)

        if (p1 === p2) {

            //selecting all the input fields and changing the color of it
            var x = document.querySelectorAll("input");
            var i;
            for (i = 0; i < x.length; i++) {
                x[i].style.backgroundColor = "green";
            }
        } else if (p1 !== p2 ) {
            var x = document.querySelectorAll("input");
            var i;
            for (i = 0; i < x.length; i++) {
                x[i].style.backgroundColor = "red";

            }
        }


    })


})();
