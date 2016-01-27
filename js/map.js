var stockholm = new google.maps.LatLng(44.772686, -0.650388);
var parliament = new google.maps.LatLng(44.772686, -0.650388);
var marker;
var map;
var styles = [
  {
       "featureType": "all",
       "elementType": "labels.text.fill",
       "stylers": [
           {
               "saturation": 36
           },
           {
               "color": "#000000"
           },
           {
               "lightness": 40
           }
       ]
   },
   {
       "featureType": "all",
       "elementType": "labels.text.stroke",
       "stylers": [
           {
               "visibility": "on"
           },
           {
               "color": "#000000"
           },
           {
               "lightness": 16
           }
       ]
   },
   {
       "featureType": "all",
       "elementType": "labels.icon",
       "stylers": [
           {
               "visibility": "off"
           }
       ]
   },
   {
       "featureType": "administrative",
       "elementType": "geometry.fill",
       "stylers": [
           {
               "color": "#000000"
           },
           {
               "lightness": 20
           }
       ]
   },
   {
       "featureType": "administrative",
       "elementType": "geometry.stroke",
       "stylers": [
           {
               "color": "#000000"
           },
           {
               "lightness": 17
           },
           {
               "weight": 1.2
           }
       ]
   },
   {
       "featureType": "landscape",
       "elementType": "geometry",
       "stylers": [
           {
               "color": "#000000"
           },
           {
               "lightness": 20
           }
       ]
   },
   {
       "featureType": "poi",
       "elementType": "geometry",
       "stylers": [
           {
               "color": "#000000"
           },
           {
               "lightness": 21
           }
       ]
   },
   {
       "featureType": "road.highway",
       "elementType": "geometry.fill",
       "stylers": [
           {
               "color": "#000000"
           },
           {
               "lightness": 17
           }
       ]
   },
   {
       "featureType": "road.highway",
       "elementType": "geometry.stroke",
       "stylers": [
           {
               "color": "#000000"
           },
           {
               "lightness": 29
           },
           {
               "weight": 0.2
           }
       ]
   },
   {
       "featureType": "road.arterial",
       "elementType": "geometry",
       "stylers": [
           {
               "color": "#000000"
           },
           {
               "lightness": 18
           }
       ]
   },
   {
       "featureType": "road.local",
       "elementType": "geometry",
       "stylers": [
           {
               "color": "#000000"
           },
           {
               "lightness": 16
           }
       ]
   },
   {
       "featureType": "transit",
       "elementType": "geometry",
       "stylers": [
           {
               "color": "#000000"
           },
           {
               "lightness": 19
           }
       ]
   },
   {
       "featureType": "water",
       "elementType": "geometry",
       "stylers": [
           {
               "color": "#000000"
           },
           {
               "lightness": 17
           }
       ]
   }
]



function initialize() {
    // Create a new StyledMapType object, passing it the array of styles,
  // as well as the name to be displayed on the map type control.
  var styledMap = new google.maps.StyledMapType(styles,
    {name: "Styled Map"});

  // Create a map object, and include the MapTypeId to add
  // to the map type control.

  var mapOptions = {
    zoom: 18,
    center: stockholm,
    panControl: false,
    zoomControl: false,
    scaleControl: false,
    disableDefaultUI: true,
    mapTypeControlOptions: {
   mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'map_style']
    }
  };

  map = new google.maps.Map(document.getElementById('map-canvas'),
          mapOptions);

//Associate the styled map with the MapTypeId and set it to display.
  map.mapTypes.set('map_style', styledMap);
  map.setMapTypeId('map_style');

  var image = '//assetsvitalbase.s3.amazonaws.com/img/pin-gps.png';

  marker = new google.maps.Marker({
    map:map,
    draggable:true,
    animation: google.maps.Animation.DROP,
    position: parliament,
    icon: image
  });
  google.maps.event.addListener(marker, 'click', toggleBounce);
}

function toggleBounce() {

  if (marker.getAnimation() != null) {
    marker.setAnimation(null);
  } else {
    marker.setAnimation(google.maps.Animation.BOUNCE);
  }
}

google.maps.event.addDomListener(window, 'load', initialize);
