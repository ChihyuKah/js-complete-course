/* becode/javascript
 *
 * /06-dom/11-change-event-input-one/script.js - 6.11: événement change (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {


    var input = document.getElementById("pass-one");
    var counter = document.getElementById("counter");



    document.getElementById('pass-one').setAttribute('maxlength',10);
    input.addEventListener("input",function () {
        counter.innerHTML = input.value.length + "/10"
    })




    // ----------- All the failed attempts-------------//



    // function charcountupdate(str) {
    //     var lng = str.length;
    //     document.getElementById("counter").innerHTML = lng;
    // }


    // document.getElementById("counter").innerHTML = input.length;

    // function count()
    // {
    //     var total=document.getElementById("text").value;
    //     total=total.replace(/\s/g, '');
    //     document.getElementById("total").innerHTML="Total Characters:"+total.length;
    // }
    // var str ="";
    //
    // var strLength = str.length;
    // var maxLength = 10;
    //
    // console.log(strLength)



    // if(strLength > maxLength){
    //     document.getElementsByClassName(".indicator").innerHTML = '<span style="color: red;">'+strLength+' out of '+maxLength+' characters</span>';
    // }else{
    //     document.getElementsByClassName(".indicator").innerHTML = strLength+' out of '+maxLength+' characters';
    // }
})();
