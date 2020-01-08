/* becode/javascript
 *
 * /09-fetch/02-list-to-template/script.js - 11.2: liste vers template
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    document.getElementById("run").addEventListener("click",function () {
       fetch("http://localhost:12345/_shared/api.json")
           .then(response => {
               return response.json();
           }).then(data => {
            console.log(data);
       })
    })
})();
