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

jQuery(document).ready(function($) {

    $(window).load(function () {

        $("#CITY_LIFE").click(function() {

            //do stuff
            console.log('working');
            // $(this).attr('d') = the path

        })

    });
});