mapboxgl.accessToken = 'pk.eyJ1IjoibWFyZ2FyaWRhcHBwIiwiYSI6ImNrNjYxaWJqMDFneTgza29mdHBjeG45dWYifQ.cGtIIZKuy5NgVMSxZpWQRg';


var map = new mapboxgl.Map({
container: 'map', // container id
pitch: 0.01, 
style: 'mapbox://styles/margaridappp/ck6hfu5d60jgr1ikdhhjvrefi',//hosted style id
center: [-77.38, 39], // starting position
zoom: 3  // starting zoom
});

$(window).on("load", function () {
    var h = $(window).height(),
        offsetTop = 60; // Calculate the top offset

    $('#map').css('height', (h - offsetTop));
    map.resize();
});

// Disable rotation and its button 

map.touchZoomRotate.disableRotation();
map.addControl(new mapboxgl.NavigationControl({
  showCompass: false
}));

// CODES FOR WHEEL 
/*  
$(document).ready(function() {
console.log($('#wheel'));
    
    $('a#CITY_LIFE').click(function() {
           alert('hello rect');
        })
        

    
});
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