/* becode/javascript
 *
 * /02-maths/01-calculator-one/script.js - 2.1: calculatrice
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */



(function() {
    var opone;
    var optwo;

     document.getElementById("addition").addEventListener("click", function() {

         //With the help of my colleague I changed the position of the code below

         var opone = document.getElementById("op-one").value;
         var optwo = document.getElementById("op-two").value;
         var sum = Number(opone)+ Number(optwo);
            alert(sum);
    });

    document.getElementById("substraction").addEventListener("click", function() {

      

        var opone = document.getElementById("op-one").value;
        var optwo = document.getElementById("op-two").value;
        var sub = Number(opone)- Number(optwo);
        alert(sub);
    });

    document.getElementById("multiplication").addEventListener("click", function() {

        var opone = document.getElementById("op-one").value;
        var optwo = document.getElementById("op-two").value;
        var mul = Number(opone)* Number(optwo);
        alert(mul);

    });

    document.getElementById("division").addEventListener("click", function() {

        var opone = document.getElementById("op-one").value;
        var optwo = document.getElementById("op-two").value;
        var div = Number(opone)/ Number(optwo);
        alert(div);
    });
})();
