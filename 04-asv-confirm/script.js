/* becode/javascript
 *
 * /01-base/04-asv-confirm/script.js - 1.4: ASV avec confirmation
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    // var name = prompt("What is your name");
    // var Age = prompt("How old are you");
    // // var Town= prompt("In what city do you live?");
    //
    // window.confirm("So your name is" + name + age )

    var name = prompt('What is your name');
    var age = prompt('How old are you');
    var city = prompt('Where do you live?');
    var promptconfirm = window.confirm ('Your name = ' + name + '\nYou are ' + age + '\nYou live in ' + city);
    if (promptconfirm === false) {
        location.reload()

    } else {
        alert("Thank you");
    }
})();
