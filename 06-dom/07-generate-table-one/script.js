/* becode/javascript
 *
 * /06-dom/07-generate-table-one/script.js - 6.7: génération d'un tableau (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {


    //target where you want your table to be
    var target = document.getElementById("target");
    var newTable = document.createElement("table");


    //creating process
    for (var i = 0; i < 10; i++) {
        // creates a table row
        var row = newTable.insertRow();
        row.insertCell();
    }

    //adding each row under eachother
    target.appendChild(newTable);


})();
