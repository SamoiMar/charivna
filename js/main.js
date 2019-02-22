             var map;
             geocoder = new google.maps.Geocoder();
             function initialize() {
                var styledMapType = new google.maps.StyledMapType(
                   [
                       {
                           "elementType": "geometry",
                           "stylers": [
                               {
                                   "color": "#f5f5f5"
                               }
                           ]
                       },
                       {
                           "elementType": "labels.icon",
                           "stylers": [
                               {
                                   "visibility": "off"
                               }
                           ]
                       },
                       {
                           "elementType": "labels.text.fill",
                           "stylers": [
                               {
                                   "color": "#616161"
                               }
                           ]
                       },
                       {
                           "elementType": "labels.text.stroke",
                           "stylers": [
                               {
                                   "color": "#f5f5f5"
                               }
                           ]
                       },
                       {
                           "featureType": "administrative.land_parcel",
                           "elementType": "labels.text.fill",
                           "stylers": [
                               {
                                   "color": "#bdbdbd"
                               }
                           ]
                       },
                       {
                           "featureType": "poi",
                           "elementType": "geometry",
                           "stylers": [
                               {
                                   "color": "#eeeeee"
                               }
                           ]
                       },
                       {
                           "featureType": "poi",
                           "elementType": "labels.text.fill",
                           "stylers": [
                               {
                                   "color": "#757575"
                               }
                           ]
                       },
                       {
                           "featureType": "poi.park",
                           "elementType": "geometry",
                           "stylers": [
                               {
                                   "color": "#e5e5e5"
                               }
                           ]
                       },
                       {
                           "featureType": "poi.park",
                           "elementType": "labels.text.fill",
                           "stylers": [
                               {
                                   "color": "#9e9e9e"
                               }
                           ]
                       },
                       {
                           "featureType": "road",
                           "elementType": "geometry",
                           "stylers": [
                               {
                                   "color": "#ffffff"
                               }
                           ]
                       },
                       {
                           "featureType": "road.arterial",
                           "elementType": "labels.text.fill",
                           "stylers": [
                               {
                                   "color": "#757575"
                               }
                           ]
                       },
                       {
                           "featureType": "road.highway",
                           "elementType": "geometry",
                           "stylers": [
                               {
                                   "color": "#dadada"
                               }
                           ]
                       },
                       {
                           "featureType": "road.highway",
                           "elementType": "labels.text.fill",
                           "stylers": [
                               {
                                   "color": "#616161"
                               }
                           ]
                       },
                       {
                           "featureType": "road.local",
                           "elementType": "labels.text.fill",
                           "stylers": [
                               {
                                   "color": "#9e9e9e"
                               }
                           ]
                       },
                       {
                           "featureType": "transit.line",
                           "elementType": "geometry",
                           "stylers": [
                               {
                                   "color": "#e5e5e5"
                               }
                           ]
                       },
                       {
                           "featureType": "transit.station",
                           "elementType": "geometry",
                           "stylers": [
                               {
                                   "color": "#eeeeee"
                               }
                           ]
                       },
                       {
                           "featureType": "water",
                           "elementType": "geometry",
                           "stylers": [
                               {
                                   "color": "#c9c9c9"
                               }
                           ]
                       },
                       {
                           "featureType": "water",
                           "elementType": "labels.text.fill",
                           "stylers": [
                               {
                                   "color": "#9e9e9e"
                               }
                           ]
                       }
                   ],
                   {name: 'Styled Map'});
                map = new google.maps.Map(document.getElementById('map'),
                    {zoom: 15});
                geocoder.geocode( { 'address': document.getElementById("address").innerText}, function(results, status) {
                  if (status == google.maps.GeocoderStatus.OK) {
                    map.setCenter(results[0].geometry.location);                    
                    var marker = new google.maps.Marker({
                        map: map,
                        position: results[0].geometry.location                       
                    });
                  } else {
                    alert('Geocode was not successful for the following reason: ' + status);
                  }
                });
                map.mapTypes.set('styled_map', styledMapType);
                        map.setMapTypeId('styled_map');
             }
             google.maps.event.addDomListener(window, 'load', initialize);
             image = '../img/marker.png',
             marker = new google.maps.Marker ({
                position: results[0].geometry.location,
                map: map,
                icon: image
             });