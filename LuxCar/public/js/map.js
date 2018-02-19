function initMap() {
                      var map = new google.maps.Map(document.getElementById('map'), {
                        center: {lat: 59.875758, lng: 30.361280},
                        zoom: 17,
                        styles: [

                          {elementType: 'geometry', stylers: [{color: '#d4dce1'}]},
                          {elementType: 'labels.text.stroke', stylers: [{color: '#e0e5e7'}]},
                          {elementType: 'labels.text.fill', stylers: [{color: '#646359'}]},
                          {
                            featureType: 'administrative.locality',
                            elementType: 'labels.text.fill',
                            stylers: [{color: '#646359'}]
                          },
                          {
                            featureType: 'poi',
                            elementType: 'labels.text.fill',
                            stylers: [{color: '#646359'}]
                          },
                          {
                            featureType: 'poi.park',
                            elementType: 'geometry',
                            stylers: [{color: '#becebe'}]
                          },
                          {
                    featureType: 'transit.station.bus',
                      elementType: 'all',
                      stylers: [
                         { visibility: 'off' }]
                          },
                          {
                            featureType: 'poi.park',
                            elementType: 'labels.text.fill',
                            stylers: [{color: '#646359'}]
                          },
                          {
                            featureType: 'road',
                            elementType: 'geometry',
                            stylers: [{color: '#f1f8f8'}]
                          },
                          {
                            featureType: 'road',
                            elementType: 'geometry.stroke',
                            stylers: [{color: '#282828'}]
                          },
                          {
                            featureType: 'road',
                            elementType: 'labels.text.fill',
                            stylers: [{color: '#646359'}]
                          },
                          {
                            featureType: 'road.highway',
                            elementType: 'geometry',
                            stylers: [{color: '#f1f8f8'}]
                          },
                          {
                            featureType: 'road.highway',
                            elementType: 'geometry.stroke',
                            stylers: [{color: '#282828'}]
                          },
                          {
                            featureType: 'road.highway',
                            elementType: 'labels.text.fill',
                            stylers: [{color: '#646359'}]
                          },
                          {
                            featureType: 'transit',
                            elementType: 'geometry',
                            stylers: [{color: '#f1f8f8'}]
                          },
                          {
                            featureType: 'transit.station',
                            elementType: 'labels.text.fill',
                            stylers: [{color: '#646359'}]
                          },
                          {
                            featureType: 'water',
                            elementType: 'geometry',
                            stylers: [{color: '#b9cde1'}]
                          },
                          {
                            featureType: 'water',
                            elementType: 'labels.text.fill',
                            stylers: [{color: '#646359'}]
                          },
                          {
                            featureType: 'water',
                            elementType: 'labels.text.stroke',
                            stylers: [{color: '#646359'}]
                          }
                                                                                 
                        ]
                                      
                                
                      });
                                       
                                          var marker = new google.maps.Marker({ 
                                          position:  {lat: 59.875758, lng: 30.361280},
                                          map: map,
                                          icon:'public/js/dot.svg',
                                           
                                           
                                          });

                    }