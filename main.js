mapboxgl.accessToken = 'pk.eyJ1IjoibWFyZ2FyaWRhcHBwIiwiYSI6ImNrNjYxaWJqMDFneTgza29mdHBjeG45dWYifQ.cGtIIZKuy5NgVMSxZpWQRg';


var map = new mapboxgl.Map({
container: 'map', // container id
pitch: 0.01, 
style: 'mapbox://styles/margaridappp/ck6hfu5d60jgr1ikdhhjvrefi',//hosted style id
center: [150.906571, -33.926521], // starting position
zoom: 13  // starting zoom
});

$(window).on("load", function () {
    var h = $(window).height(),
        offsetTop = 60; // Calculate the top offset

    $('#map').css('height', (h - offsetTop));
    map.resize();
});

// Add zoom buttons; Disable rotation and its button 
map.touchZoomRotate.disableRotation();
map.addControl(new mapboxgl.NavigationControl({
  showCompass: false
}));

$("#market").click(function() {
  map.flyTo({
    center: [
   150.917281, -33.924748
    ],
    zoom: 17.32,
    essential: true 
});
});

$("#exhibition").click(function() {
  map.flyTo({
    center: [
   150.917134, -33.926206
    ],
    zoom: 17.67,
    essential: true 
});
});

$("#community").click(function() {
  map.flyTo({
    center: [
   150.915180, -33.924748
    ],
    zoom: 17.36,
    essential: true 
});
});

$("#event").click(function() {
  map.flyTo({
    center: [
   150.915213, -33.926078
    ],
    zoom: 17.81,
    essential: true 
});
});

$("#sports").click(function() {
  map.flyTo({
    center: [
   150.913617, -33.926399
    ],
    zoom: 17.57,
    essential: true 
});
});

$("#leisure").click(function() {
  map.flyTo({
    center: [
   150.913083, -33.926876
    ],
    zoom: 17.81,
    essential: true 
});
});

$("#open").click(function() {
  map.flyTo({
    center: [
   150.912620, -33.925912
    ],
    zoom: 16.87,
    essential: true 
});
});
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