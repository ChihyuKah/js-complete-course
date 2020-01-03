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
    document.getElementById('pass-one').setAttribute("minlength",8);


    input.addEventListener("input",function () {

        if (input.value.length >= 8 ) {

            val.innerHTML = "Ok";
        } else if (input.value.length <= 9 ) {

            val.innerHTML = "Not Ok";
        }

        // val.innerHTML = input.value.length + "/10"
    })


    // for (let i = 0; i < 8;) {
    //     if (value[i]>= value )
    // }
    // if (var input = 0 ; input <= 8;) {
    //     counter.innerHTML = "Not Ok"
    // } else if (var input = 0 ; i >= 8; )
    // for (var i = 0 ; i <= 8 ; ) {
    //
    //
    //     counter.innerHTML = "Not Ok"
    // }


})();
