/* becode/javascript
 *
 * /05-arrays/02-manipulate-array/script.js - 5.2: manipulation de tableau
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    var fruits = [
        "pomme",
        "poire",
        "fraise",
        "tomate",
        "orange",
        "mandarine",
        "durian",
        "pêche",
        "raisin",
        "cerise",
    ];

    document.getElementById("run").addEventListener("click", function () {

        // fruits.shift();
        // fruits.pop();
        // fruits.push("kiwi");
        // fruits.splice(0,0, "banana");
        //At this point I realised I can just use 2 lines of code with splice

        fruits.splice(0,1, "banana");
        fruits.splice(-1,1, "kiwi");
        alert(fruits);
    })

})();
