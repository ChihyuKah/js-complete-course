
(function() {
    // The format it's asking is DAY, DATE, MONTH , YEAR, HOURh MINUTES
                                //Sunday 28 December 2018 22h23
    //Judging by the links I searched for I will need to use an Array for this
    var dob = new Date();
    var day = dob.getDay();

    console.log(day);

    document.getElementById("target").innerHTML = newDate;
    //Problem was not getting assigned
    var day = newDate.getDay();
    var date = newDate.getDate();
    var month = newDate.getMonth();
    var year = newDate.getFullYear();
    var hour = newDate.getHours();
    var minute = newDate.getMinutes();

        //testing purposes


        let days=["Sunday", "Monday", "Tuesday","Wednesday","Thursday","Friday","Saturday"];
        let months=["January","February","March","April","May","June","July","August","September","October","November","December"];

            var DayOfWeek ="";
            var fullMonth ="";

            DayOfWeek = days [day];
            fullMonth = months [month];

    document.getElementById("target").innerHTML = weekDay +" "+ date +" " + fullMonth + " " + year +"," + hour +"h" + min;

})();
