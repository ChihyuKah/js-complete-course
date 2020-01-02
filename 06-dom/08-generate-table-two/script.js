/* becode/javascript
 *
 * /06-dom/08-generate-table-two/script.js - 6.8: génération d'un tableau (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    //
    //target where you want your table to be
    // var target = document.getElementById("target");
    // var newTable = document.createElement("table");
    //
    //
    // //creating process
    // for (var i = 0; i < 10; i++) {
    //     // creates a table row
    //     var row = newTable.insertRow();
    //     row.insertCell();
    //
    // }
    //
    // //adding each row under eachother
    // target.appendChild(newTable);
    //
    //
    // var result = 'x ';
    // for (var i = 0; i < 11; i++) {
    //
    //     for (var j = 0; j < 11; j++) {
    //
    //         if(i == 0 && j > 0){
    //             result += '[' + j + ']';
    //         }
    //         else if(j == 0 && i>0){
    //             result += '[' + i + '] ';
    //         }
    //         else if(i>0 && j>0){
    //             result += (i*j) + ' ';
    //         }
    //     }
    //     result += '\n'
    // }
    //
    // console.log(result);

    // target where you want your table to be
    var target = document.getElementById("target");
    var newTable = document.createElement("table");
    target.appendChild(newTable);

    //Until 10
    for(var i=0;i < 10; i++) {
        var row = newTable.insertRow();
        for (var j = 0; j < 10; j++) {
            var column = row.insertCell();
            column.innerHTML = (j + 1) * (i + 1);
        }
    }

})();
