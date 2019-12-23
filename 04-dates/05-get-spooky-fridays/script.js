/* becode/javascript
 *
 * /04-dates/05-get-spooky-fridays/script.js - 4.5: calcul des vendredi 13
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

// (function() {
//     // when you click
//     document.getElementById("run").addEventListener("click", function(){
//
//         // get the value
//         var worth = document.getElementById("year").value;
//
//
//
//         //get dates
//         var d= new Date();
//
//         d.setFullYear(worth, 0,13);
//
//
//         var months=[];
//         const mon =["January","February","March","April","May","June","July","August","September","October","November","December"];
//
//         for (var m=0; m<=11;m++){
//
//             d.setMonth(m);
//
//             // m=2 -> d = 2000 2 13
//
//             if ( d.getDay() === 5){
//                 months.push(mon[m])
//             }
//         }
//
//         // show
//
//         confirm(months);
//
//
//
//
//     })
//
// })();

(function() {
    document.getElementById("run").addEventListener("click", function () {

        var value = document.getElementById("year").value;

        //To get a new date that starts with the 13th
        var d = new Date();
        d.setFullYear(value, 0, 13);

        //It does not need the +
        var months = [];
        var mon = ["January","February","March","April","June","July", "August","September","October","November","December"];



        for (var m = 0; m <= 11; m++) {
//
            d.setMonth(m);

            if (d.getDay() === 5) {
                months.push(mon[m]);

                confirm(months);

            }
        }

    });
})();

