/* becode/javascript
 *
 * /07-misc/04-worst-ui-two/script.js - 7.4: la pire interface (2) : phone clicker
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {


    let btn1 = document.getElementById("part-one");
    let btn2 = document.getElementById("part-two");
    let btn3 = document.getElementById("part-three");
    let btn4 = document.getElementById("part-four");
    let current1 = btn1.innerText;
    let current2 = btn2.innerText;
    let current3 = btn3.innerText;
    let current4 = btn4.innerText;

    function addZero (i) {
        if (i < 10) {
            i = "0" + i;
        }
    }


    btn1.addEventListener("click", function () {


                let minval = btn1.getAttribute("data-min");
                let maxval = btn1.getAttribute("data-max");


                if (current1 < maxval ) {
                    current1++;

                    btn1.innerText = current1;

                    console.log(current1);
                    document.getElementById("target").innerText = `+${current1}${current2}${current3}${current4}`

                    // current = target.innerHTML;
                }

            });



    btn2.addEventListener("click", function () {


        var minval = btn2.getAttribute("data-min");
        var maxval = btn2.getAttribute("data-max");





        if (current2 < maxval && current2 <= 9) {
            current2++;
            current2 = ("0" + current2).slice(-2);

            document.getElementById("target").innerHTML = `+${current1}${current2}${current3}${current4}`
        } else if (current2 < maxval ) {
            current2++;
            document.getElementById("target").innerHTML = `+${current1}${current2}${current3}${current4}`
        }
            btn2.innerHTML = current2;



    });



    btn3.addEventListener("click", function () {


        var minval = btn3.getAttribute("data-min");
        var maxval = btn3.getAttribute("data-max");


        if (current3 < maxval && current3 <= 9) {
            current3++;
            current3 = ("0" + current3).slice(-2);

            document.getElementById("target").innerHTML = `+${current1}${current2}${current3}${current4}`
        } else if (current3 < maxval ) {
            current3++;
            document.getElementById("target").innerHTML = `+${current1}${current2}${current3}${current4}`
        }
            btn3.innerHTML = current3;



    });


    btn4.addEventListener("click", function () {


        var minval = btn4.getAttribute("data-min");
        var maxval = btn4.getAttribute("data-max");


        if (current4 < maxval && current4 <= 8)  {
            current4++;
            current4 = ("0" + current4).slice(-2);
            console.log("minder dan 10");
            document.getElementById("target").innerHTML = `+${current1}${current2}${current3}${current4}`
        } else if (current4 < maxval ) {
            current4++;
            document.getElementById("target").innerHTML = `+${current1}${current2}${current3}${current4}`
        }
        btn4.innerHTML = current4;


      
    });

})();

//var btn1 = document.getElementById("part-one");
//
//     btn1.addEventListener("click", function () {
//         target.innerHTML = "";
//
//                 var minval = btn1.getAttribute("data-min");
//                 var maxval = btn1.getAttribute("data-max");
//
//
//                 if (btn1.innerText < maxval ) {
//                     btn1.innerText++;
//
//                     target.innerHTML = "+" + btn1.innerText;
//
//                 }
//
//                 console.log(minval);
//                 console.log(maxval);
//                 console.log(btn1.innerText);
//                 // console.log(current);
//
//             })
