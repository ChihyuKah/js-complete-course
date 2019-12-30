/* becode/javascript
 *
 * /05-arrays/09-rand-array-stats/script.js - 5.9: tableau aléatoire & statistiques
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

   document.getElementById("run").addEventListener("click", function () {
        // giving each id a random number
      var randomNr1 =  Math.floor(Math.random() * (100));
      var randomNr2 =  Math.floor(Math.random() * (100));
      var randomNr3 =  Math.floor(Math.random() * (100));
      var randomNr4 =  Math.floor(Math.random() * (100));
      var randomNr5 =  Math.floor(Math.random() * (100));
      var randomNr6 =  Math.floor(Math.random() * (100));
      var randomNr7 =  Math.floor(Math.random() * (100));
      var randomNr8 =  Math.floor(Math.random() * (100));
      var randomNr9 =  Math.floor(Math.random() * (100));
      var randomNr10 =  Math.floor(Math.random() * (100));


        //Post it to the HTML
      document.getElementById("n-1").innerHTML = randomNr1;
      document.getElementById("n-2").innerHTML = randomNr2;
      document.getElementById("n-3").innerHTML = randomNr3;
      document.getElementById("n-4").innerHTML = randomNr4;
      document.getElementById("n-5").innerHTML = randomNr5;
      document.getElementById("n-6").innerHTML = randomNr6;
      document.getElementById("n-7").innerHTML = randomNr7;
      document.getElementById("n-8").innerHTML = randomNr8;
      document.getElementById("n-9").innerHTML = randomNr9;
      document.getElementById("n-10").innerHTML = randomNr10;

        // All the numbers combined in an array

       var allNumb = [randomNr1, randomNr2, randomNr3, randomNr4, randomNr5, randomNr6, randomNr7, randomNr8, randomNr9, randomNr10];

       //getting min and max value of the given numbers
      var min = Math.min(...allNumb);
      var max = Math.max(...allNumb);

      document.getElementById("min").innerHTML = min;
       document.getElementById("max").innerHTML = max;
      console.log(min);


      //Sum of all numbers given
       var sum = allNumb.reduce(function(a, b){
           return a + b;
       }, 0);
       document.getElementById("sum").innerHTML = sum;

       var avg = allNumb / allNumb.length;

       document.getElementById("average").innerHTML = avg;




});


})();

