/* becode/javascript
 *
 * /03-colors/03-change-bcg-three/script.js - 3.3: couleur de fond (3)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    document.getElementById("run").addEventListener("click", function() {

        //Getting random color code (RGB)

        function getRandomColor(min, max) {
            return Math.floor(Math.random()*(max-min+1)) + min;
        }


            // Defining actual the number min and max
            var red=getRandomColor(0,255);
            var green= getRandomColor(0,255);
            var blue =getRandomColor(0,255);

            // Changing the color
            document.body.style.backgroundColor="rgb("+red+','+green+','+blue+")";
    })
})();
