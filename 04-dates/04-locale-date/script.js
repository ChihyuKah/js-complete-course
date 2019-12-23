
(function() {
    // The format it's asking is DAY, DATE, MONTH , YEAR, HOURh MINUTES
                                //Sunday 28 December 2018 22h23
    //Judging by the links I searched for I will need to use an Array for this


        var newDate = new Date();

        var day = newDate.getDay();
        var date = newDate.getDate();
        var month = newDate.getMonth();
        var year = newDate.getFullYear();
        var hour = newDate.getHours();
        var minute = newDate.getMinutes();

            const days=["Sunday", "Monday", "Tuesday","Wednesday","Thursday","Friday","Saturday"];
            const months=["January","February","March","April","May","June","July","August","September","October","November","December"];

            var dayOfWeek ="";
            var fullMonths="";

            dayOfWeek = days[day];
            fullMonths = months[month];


            document.getElementById("target").innerHTML = dayOfWeek +" "+ date +" " + fullMonths + " " + year +"," + hour +"h" + minute;
       
})();
