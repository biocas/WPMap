// var svg = document.getElementsById('svg')[0];

window.addEventListener('load', function() {
    var svgObject = document.getElementById('wheel').contentDocument;
    console.log(svgObject);
    
    var svgDom = svgObject.contentDocument;
     var CITY_LIFE = svgDom.getElementById('CITY_LIFE');
    
    CITY_LIFE.addEventListener("mousedown",function(){
                        alert('hello world!')
                }, false);
  });
