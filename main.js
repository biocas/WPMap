mapboxgl.accessToken = "pk.eyJ1IjoibWFyZ2FyaWRhcHBwIiwiYSI6ImNrNjYxaWJqMDFneTgza29mdHBjeG45dWYifQ.cGtIIZKuy5NgVMSxZpWQRg";

var map = new mapboxgl.Map({
container: "map", // container id
pitch: 0.01, 
style: "mapbox://styles/margaridappp/ck6hfu5d60jgr1ikdhhjvrefi",//hosted style id
center: [150.906571, -33.926521], // starting position
zoom: 16  // starting zoom
});


// Resize map to full window height
$(window).on("load", function () {
    
    var h = $(window).height(),
        offsetTop = 60; // Calculate the top offset

    $("#map").css("height", (h - offsetTop));
    map.resize();
    var photoMarkers = {
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "properties": {
          title: 'Market',
            icon: {
               /* iconUrl: 'img/icon-photo.png',
                 iconSize: [50, 50], // size of the icon
                iconAnchor: [25, 25], // point of the icon which will correspond to marker's location
                popupAnchor: [0, -25], // point from which the popup should open relative to the iconAnchor  */
                className: 'photoMarker'  
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
          title: 'Exhibition',
            icon: {
               /* iconUrl: 'img/icon-photo.png',
                 iconSize: [50, 50], // size of the icon
                iconAnchor: [25, 25], // point of the icon which will correspond to marker's location
                popupAnchor: [0, -25], // point from which the popup should open relative to the iconAnchor  */
                className: 'photoMarker'  
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
          title: 'Community',
            icon: {
               /* iconUrl: 'img/icon-photo.png',
                 iconSize: [50, 50], // size of the icon
                iconAnchor: [25, 25], // point of the icon which will correspond to marker's location
                popupAnchor: [0, -25], // point from which the popup should open relative to the iconAnchor  */
                className: 'photoMarker'  
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
          title: 'Civic',
            icon: {
               /* iconUrl: 'img/icon-photo.png',
                 iconSize: [50, 50], // size of the icon
                iconAnchor: [25, 25], // point of the icon which will correspond to marker's location
                popupAnchor: [0, -25], // point from which the popup should open relative to the iconAnchor  */
                className: 'photoMarker'  
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
          title: 'Sports',
            icon: {
               /* iconUrl: 'img/icon-photo.png',
                 iconSize: [50, 50], // size of the icon
                iconAnchor: [25, 25], // point of the icon which will correspond to marker's location
                popupAnchor: [0, -25], // point from which the popup should open relative to the iconAnchor  */
                className: 'photoMarker'  
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
          title: 'Leisure',
            icon: {
               /* iconUrl: 'img/icon-photo.png',
                 iconSize: [50, 50], // size of the icon
                iconAnchor: [25, 25], // point of the icon which will correspond to marker's location
                popupAnchor: [0, -25], // point from which the popup should open relative to the iconAnchor  */
                className: 'photoMarker'  
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
          title: 'Open',
            icon: {
               /* iconUrl: 'img/icon-photo.png',
                 iconSize: [50, 50], // size of the icon
                iconAnchor: [25, 25], // point of the icon which will correspond to marker's location
                popupAnchor: [0, -25], // point from which the popup should open relative to the iconAnchor  */
                className: 'photoMarker'  
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
          title: 'Playground',
            icon: {
               /* iconUrl: 'img/icon-photo.png',
                 iconSize: [50, 50], // size of the icon
                iconAnchor: [25, 25], // point of the icon which will correspond to marker's location
                popupAnchor: [0, -25], // point from which the popup should open relative to the iconAnchor  */
                className: 'photoMarker'  
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
    // add markers to map
photoMarkers.features.forEach(function(photoMarker) {
// create a DOM element for the marker
var el = document.createElement("div");
el.className = "photoMarker";
/*  
 
el.addEventListener("click", function() {
window.alert(marker.properties.message);
}); */
 
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

$("#civic").click(function() {
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

$("#play").click(function() {
  map.flyTo({
    center: [
   150.913482, -33.925905
    ],
    zoom: 17.66,
    essential: true 
});
});

// Reset button - resets zoom levels to original
$("#reset").click(function() {
  map.flyTo({
    center: [
   150.906571, -33.926521
    ],
    zoom: 13,
    essential: true 
});
});


/*

// .setPopup(popup)  sets a popup on this marker
.addTo(map);

var Zoom = map.getZoom();
if (Zoom > 13) {
   marker.remove();
} */

// links & bits
/* 
https://docs.mapbox.com/mapbox-gl-js/example/set-popup/
For pop up windows 
https://stackoverflow.com/questions/6037712/how-to-float-a-div-over-google-maps 
https://docs.mapbox.com/mapbox.js/example/v1.0.0/marker-tooltips-outside-map/ - this is mapbox.js and is not in use anymore but can help with logic

For Staging and catalysts
https://docs.mapbox.com/mapbox-gl-js/example/filter-markers/
*/ 