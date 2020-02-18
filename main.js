/*
window.onload = function() {
    // Get object
    var svgObject = document.getElementById('wheel');
    //get svg inside object
    var svgDom = svgObject.contentDocument;
    console.log(svgObject);
    console.log(svgDom);
    // get one svg element by id
     var CITY_LIFE = svgDom.getElementById("CITY_LIFE");
    console.log(CITY_LIFE);
    };
*/

$(document).ready(function() {
console.log($('#wheel'));
    console.log($('#CITY_LIFE'));
        $('#CITY_LIFE').click(function() {

            //do stuff
            console.log('working');
            //$(this).attr('d') = the path

        })

    
});