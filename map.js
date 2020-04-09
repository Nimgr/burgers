
function initMap() {
    var markers =  [
        {
            coords: {
                "lat": 59.97252200000000,
                "lng": 30.31144900000000,
            },
            addres: 'address1'
        }, 
        {
            coords: {
                "lat": 59.94528800000000,
                "lng": 30.38509800000000,
            },
            addres: 'address2'
        }, 
        {
            coords: {
                "lat": 59.89205000000000,
                "lng": 30.50804000000000,
            },
            addres: 'address3'
        }, 
        {
            coords: {
                "lat": 59.82873600000000,
                "lng": 30.31892300000000,
            },
            addres: 'address4'
        }
    ];

    var map = new google.maps.Map(document.getElementById('map'), {
        center: {
            lat: 59.95211426420163,
            lng: 30.30039837561037
        },
        zoom: 11,
        disableDefaultUI: true
        // styles: [
            // {
            //     "featureType": "administrative",
            //     "elementType": "labels.text.fill",
            //     "stylers": [
            //         {
            //             "color": "#444444"
            //         }
            //     ]
            // },
            // {
            //     "featureType": "landscape",
            //     "elementType": "all",
            //     "stylers": [
            //         {
            //             "color": "#f2f2f2"
            //         }
            //     ]
            // },
            // {
            //     "featureType": "poi",
            //     "elementType": "all",
            //     "stylers": [
            //         {
            //             "visibility": "off"
            //         }
            //     ]
            // },
            // {
            //     "featureType": "road",
            //     "elementType": "all",
            //     "stylers": [
            //         {
            //             "saturation": -100
            //         },
            //         {
            //             "lightness": 45
            //         }
            //     ]
            // },
            // {
            //     "featureType": "road.highway",
            //     "elementType": "all",
            //     "stylers": [
            //         {
            //             "visibility": "simplified"
            //         }
            //     ]
            // },
            // {
            //     "featureType": "road.arterial",
            //     "elementType": "labels.icon",
            //     "stylers": [
            //         {
            //             "visibility": "off"
            //         }
            //     ]
            // },
            // {
            //     "featureType": "transit",
            //     "elementType": "all",
            //     "stylers": [
            //         {
            //             "visibility": "off"
            //         }
            //     ]
            // },
            // {
            //     "featureType": "water",
            //     "elementType": "all",
            //     "stylers": [
            //         {
            //             "color": "#ff0000"
            //         },
            //         {
            //             "visibility": "on"
            //         }
            //     ]
            // }
        // ]
    });

    markers.forEach((marker)=>{
        var infowindow = new google.maps.InfoWindow({
            content: marker.addres
        });

        var marker = new google.maps.Marker({
            position: marker.coords,
            map: map,
            animation: google.maps.Animation.BOUNCE,
            icon: './icons/map-marker.svg',
            title: 'hello'
        });

        marker.addListener('click', function() {
            infowindow.open(map, marker);
        });
    })
}