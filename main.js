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


mapboxgl.accessToken = 'pk.eyJ1IjoibWFyZ2FyaWRhcHBwIiwiYSI6ImNrNjYxaWJqMDFneTgza29mdHBjeG45dWYifQ.cGtIIZKuy5NgVMSxZpWQRg';
var map = new mapboxgl.Map({
container: 'map', // container id
style: 'mapbox://styles/margaridappp/ck6hfu5d60jgr1ikdhhjvrefi',//hosted style id
//center: [-77.38, 39], // starting position
//zoom: 3  starting zoom
});



$(document).ready(function() {
console.log($('#wheel'));
    
    $('a#CITY_LIFE').click(function() {
           alert('hello rect');
        })
        

    
});

function timeout(){ 

   

}

setTimeout(timeout, 5000)