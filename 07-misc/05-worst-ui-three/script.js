/* becode/javascript
 *
 * /07-misc/05-worst-ui-three/script.js - 7.5: la pire interface (3) : phone slot
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    let btn3 ="";
    let btn1 = document.getElementById("part-one");
    let btn2 = document.getElementById("part-two");
    // let btn3 = document.getElementById("part-three");
    let btn4 = document.getElementById("part-four");


    console.log(btn1.value, btn2.value)

    //data values of the first btn
    let minval1 = btn1.getAttribute("data-min");
    let maxval1 = btn1.getAttribute("data-min");

    //data values of the second btn
    let minval2 = btn2.getAttribute("data-min");
    let maxval2 = btn2.getAttribute("data-max");



    let rnd = Math.floor((Math.random() * 100) + 1);
    console.log(rnd)
    
   let test = document.getElementById("part-three").addEventListener("click",function () {
        console.log("rdsfsdf")

    })


})();
