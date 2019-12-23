/* becode/javascript
 *
 * /04-dates/05-get-spooky-fridays/script.js - 4.5: calcul des vendredi 13
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    document.getElementById("run").addEventListener("click", function () {

        var test = document.getElementById("year").value;

        //To get a new date that starts with the 13th
        var d = new Date();
        d.setFullYear(year , 0, 13);


        var months =[];
        var m = ["January" + "" + "February" + "" + "March" + "" + "April" + "" + "June" + "" + "July" + "" +
        "August" + "" + "September" + "" + "October" + "" + "November" + "" + "December"];




        for (m=0; m <= 11; m++)
        // while(months <= 11) {
        //     months++;
        //     if(d.getDay() == 5 && d.getDate() == 13) {
        //         counter++;
        //     }
        // }
        console.log(counter);

    })
    // your code here

})();


