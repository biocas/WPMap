window.addEventListener('load', function() {
    var svgObject = document.getElementById('wheel').contentDocument;
    console.log(svgObject);
    
    var svgDom = svgObject.contentDocument;
     var CITY_LIFE = svgDom.getElementById('CITY_LIFE');
    
    CITY_LIFE.addEventListener("mousedown",function(){
                        alert('hello world!')
                }, false);
  });

//  IDs are: "CITY_LIFE", "MARKET_PLACE", "SPORTING_PARKS", "EXHIBITIONS_AND_EVENTS", "MIXED_USE", "GREEN_SPACES", "CITY_FACILITIES", "AQUATIC_CENTRE"