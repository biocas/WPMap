mapboxgl.accessToken = "pk.eyJ1IjoibWFyZ2FyaWRhcHBwIiwiYSI6ImNrNjYxaWJqMDFneTgza29mdHBjeG45dWYifQ.cGtIIZKuy5NgVMSxZpWQRg";

var map = new mapboxgl.Map({
container: "map", // container id
pitch: 0.01, 
style: "mapbox://styles/margaridappp/ck6hfu5d60jgr1ikdhhjvrefi",//hosted style id
center: [150.906686, -33.926951], // starting position
zoom: 13.84
  // starting zoom
});
//markers with photo icon
var photoMarkers = {
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "properties": {
          title: "Market Hall",
          description: "",
            icon: {
               /* 
                popupAnchor: [0, -25], // point from which the popup should open relative to the iconAnchor  */
                className: "photoIcon" 
           }
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          150.91716706752777,
          -33.924737991796476
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
          title: "Exhibition Centre",
          description: "",
            icon: {
               /* 
                popupAnchor: [0, -25], // point from which the popup should open relative to the iconAnchor  */
                className: "photoIcon" 
           }
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          150.91695785522458,
          -33.925895306500564
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
          title: "Community Facilities",
          description: "",
            icon: {
               /* 
                popupAnchor: [0, -25], // point from which the popup should open relative to the iconAnchor  */
                className: "photoIcon"  
           }
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          150.91534852981565,
          -33.92406140053267
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
          title: "Civic Centre",
          description: "",
            icon: {
               /* 
                popupAnchor: [0, -25], // point from which the popup should open relative to the iconAnchor  */
                className: "photoIcon"  
           }
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          150.91528415679932,
          -33.92637603260166
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
          title: "Sports Facilities",
          description: "",
            icon: {
               /* 
                popupAnchor: [0, -25], // point from which the popup should open relative to the iconAnchor  */
                className: "photoIcon" 
           }
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          150.91366410255432,
          -33.9252810414233
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
          title: "Leisure Centre",
          description: "",
            icon: {
               /* 
                popupAnchor: [0, -25], // point from which the popup should open relative to the iconAnchor  */
                className: "photoIcon"  
           }
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          150.9130525588989,
          -33.92664310148554
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
          title: "Open Space",
          description: "",
            icon: {
               /*
                popupAnchor: [0, -25], // point from which the popup should open relative to the iconAnchor  */
                className: "photoIcon" 
           }
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          150.9124732017517,
          -33.92568164958479
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
          title: "Regional Playground",
          description: "",
            icon: {
               /* 
                popupAnchor: [0, -25], // point from which the popup should open relative to the iconAnchor  */
                className: "photoIcon"  
           }
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          150.91333150863645,
          -33.92580628285077
        ]
      }
    }
  ]
};

//create pop ups for photo markers 
function createPopUp(photoMarker) {
    var popUps = document.getElementsByClassName('mapboxgl-popup');
    if (popUps[0]) popUps[0].remove();

    var popup = new mapboxgl.Popup({ closeOnClick: false, closeOnMove: true, className: "photo-popup" })
      .setLngLat(photoMarker.geometry.coordinates)
      .setHTML(
        '<h4>' + photoMarker.properties.title + '</h4>')
      .addTo(map);
  }

$(window).on("load", function () {
    // Resize map to full window height
    var h = $(window).height(),
        offsetTop = 60; // Calculate the top offset
    $("#map").css("height", (h - offsetTop));
    map.resize();
    
    
    // add markers to map
photoMarkers.features.forEach(function(photoMarker) {
// create a DOM element for the marker
var el = document.createElement("div");
el.className = "photoMarker";

el.addEventListener("click", function() {
createPopUp(photoMarker);
}); 
 
// add marker to map
new mapboxgl.Marker(el)
.setLngLat(photoMarker.geometry.coordinates)
.addTo(map);
});

    }  
);

// Add zoom buttons; Disable rotation and its button 
map.touchZoomRotate.disableRotation();
map.addControl(new mapboxgl.NavigationControl({
  showCompass: false
}));

// Flyto functionality for each catalyst
$("#market").click(function() {
  map.flyTo({
    center: [
   150.917281, -33.924748
    ],
    zoom: 16,
    essential: true 
});
});
$("#exhibition").click(function() {
  map.flyTo({
    center: [
   150.917134, -33.926206
    ],
    zoom: 16,
    essential: true 
});
});
$("#community").click(function() {
  map.flyTo({
    center: [
   150.915180, -33.924748
    ],
    zoom: 16,
    essential: true 
});
});
$("#civic").click(function() {
  map.flyTo({
    center: [
   150.915213, -33.926078
    ],
    zoom: 16,
    essential: true 
});
});
$("#sports").click(function() {
  map.flyTo({
    center: [
   150.913617, -33.926399
    ],
    zoom: 16,
    essential: true 
});
});
$("#leisure").click(function() {
  map.flyTo({
    center: [
   150.913083, -33.926876
    ],
    zoom: 16,
    essential: true 
});
});
$("#open").click(function() {
  map.flyTo({
    center: [
   150.912620, -33.925912
    ],
    zoom: 16,
    essential: true 
});
});
$("#play").click(function() {
  map.flyTo({
    center: [
   150.913482, -33.925905
    ],
    zoom: 16,
    essential: true 
});
});

// Reset button - resets zoom levels to original
$("#reset").click(function() {
  map.flyTo({
    center: [
   150.906686, -33.926951
    ],
    zoom: 13.84,
    essential: true 
});
});


/*
// links & bits

For pop up windows 
https://docs.mapbox.com/mapbox-gl-js/example/set-popup/

For Staging and catalysts
https://docs.mapbox.com/mapbox-gl-js/example/filter-markers/


markers anchors and url from geojson
iconUrl: 'img/icon-photo.png',
                 iconSize: [50, 50], // size of the icon
                iconAnchor: [25, 25], // point of the icon which will correspond to marker's location
                
https://github.com/Nmargolis/story-resume/blob/gh-pages/scripts.js

https://github.com/samreaves/mapbox-starter/blob/master/index.html

https://github.com/atcodedog05/MapboxGL-JS-Pubs-in-Bangalore/blob/master/map.html

var activeItem = document.getElementsByClassName('active');

*/ 