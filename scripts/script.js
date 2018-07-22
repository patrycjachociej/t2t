
	//$('nav ul').hide();



/* scrolling */
$(".menu-index .menu-pricing").click(function() {
	$('html, body').animate({
		scrollTop: $(".prices").offset().top - 750
	}, 300);
});
$(".btn-pricing").click(function() {
	$('html, body').animate({
		scrollTop: $(".prices").offset().top - 450
	}, 300);
});
$(".menu-join .menu-pricing").click(function() {
	$('html, body').animate({
		scrollTop: $(".joinnow-prices").offset().top - 120
	}, 300);
});




$('.menu-mobile').click(function() {
	$('nav ul').fadeIn();
	$('nav ul').css('display', 'flex');
});
$('.menu-close').click(function() {
	$('nav ul').fadeOut();
});




// #slider

$('.l1').click(function() {
	$('.slider a').hide();
	$('.leave').removeClass('active');
	$('.l1').addClass('active');
	$('.i2, .n2, .h2, .p2, .i3, .n3, .h3, .p3, .i4, .n4, .h4, .p4, .i5, .n5, .h5, .p5, .a-way2, .a-way3, .a-way4, .a-way5, .i6, .n6, .h6, .p6, .a-way6').fadeOut(100);
	$('.slider a').show();
	$('.i1, .n1, .h1, .p1, .a-way1').delay(100).fadeIn(100);
	
});
$('.l2').click(function() {
	$('.slider a').hide();
	$('.leave').removeClass('active');
	$('.l2').addClass('active');
	$('.i1, .n1, .h1, .p1, .i3, .n3, .h3, .p3, .i4, .n4, .h4, .p4, .i5, .n5, .h5, .p5, .a-way1, .a-way3, .a-way4, .a-way5, .i6, .n6, .h6, .p6, .a-way6').fadeOut(100);
	$('.slider a').show();
	$('.i2, .n2, .h2, .p2, .a-way2').delay(100).fadeIn(100);
	
});
$('.l3').click(function() {
	$('.slider a').hide();
	$('.leave').removeClass('active');
	$('.l3').addClass('active');
	$('.i1, .n1, .h1, .p1, .i2, .n2, .h2, .p2, .i4, .n4, .h4, .p4, .i5, .n5, .h5, .p5, .a-way1, .a-way2, .a-way4, .a-way5, .i6, .n6, .h6, .p6, .a-way6').fadeOut(100);
	$('.slider a').show();
	$('.i3, .n3, .h3, .p3, .a-way3').delay(100).fadeIn(100);
	
});
$('.l4').click(function() {
	$('.slider a').hide();
	$('.leave').removeClass('active');
	$('.l4').addClass('active');
	$('.i1, .n1, .h1, .p1, .i2, .n2, .h2, .p2, .i3, .n3, .h3, .p3, .i5, .n5, .h5, .p5, .a-way1, .a-way2, .a-way3, .a-way5, .i6, .n6, .h6, .p6, .a-way6').fadeOut(100);
	$('.slider a').show();
	$('.i4, .n4, .h4, .p4, .a-way4').delay(100).fadeIn(100);
	
});
$('.l5').click(function() {
	$('.slider a').hide();
	$('.leave').removeClass('active');
	$('.l5').addClass('active');
	$('.i1, .n1, .h1, .p1, .i2, .n2, .h2, .p2, .i3, .n3, .h3, .p3, .i4, .n4, .h4, .p4, .a-way1, .a-way2, .a-way3, .a-way4, .i6, .n6, .h6, .p6, .a-way6').fadeOut(100);
	$('.slider a').show();
	$('.i5, .n5, .h5, .p5, .a-way5').delay(100).fadeIn(100);
});
$('.l6').click(function() {
	$('.slider a').hide();
	$('.leave').removeClass('active');
	$('.l6').addClass('active');
	$('.i1, .n1, .h1, .p1, .i2, .n2, .h2, .p2, .i3, .n3, .h3, .p3, .i4, .n4, .h4, .p4, .i5, .n5, .h5, .p5, .a-way1, .a-way2, .a-way3, .a-way4, .a-way5').fadeOut(100);
	$('.slider a').show();
	$('.i6, .n6, .h6, .p6, .a-way6').delay(100).fadeIn(100);
});





// When the window has finished loading create our google map below
google.maps.event.addDomListener(window, 'load', init);

function init() {
	
	if ((window.innerHeight > window.innerWidth) || (window.innerWidth < 1031)) {
    var mapOptions = {
        // How zoomed in you want the map to start at (always required)
        zoom: 11,
        center: new google.maps.LatLng(-35.0149887, 138.6902261),
        styles: [
    {
        "featureType": "administrative",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#444444"
            }
        ]
    },
    {
        "featureType": "administrative.locality",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "administrative.locality",
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "administrative.locality",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "simplified"
            },
            {
                "hue": "#fd1921"
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "all",
        "stylers": [
            {
                "color": "#f2f2f2"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "poi.business",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "all",
        "stylers": [
            {
                "saturation": -100
            },
            {
                "lightness": 45
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "transit",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "all",
        "stylers": [
            {
                "color": "#fd1921"
            },
            {
                "visibility": "on"
            }
        ]
    }
]
    };
		
	}
	/*else if ((window.innerHeight > window.innerWidth) && (window.innerWidth < 501)) {
		alert('a');
		var mapOptions = {
        // How zoomed in you want the map to start at (always required)
        zoom: 11,
        center: new google.maps.LatLng(-36.8509887, 138.4302261),
        styles: [
    {
        "featureType": "administrative",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#444444"
            }
        ]
    },
    {
        "featureType": "administrative.locality",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "administrative.locality",
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "administrative.locality",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "simplified"
            },
            {
                "hue": "#fd1921"
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "all",
        "stylers": [
            {
                "color": "#f2f2f2"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "poi.business",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "all",
        "stylers": [
            {
                "saturation": -100
            },
            {
                "lightness": 45
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "transit",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "all",
        "stylers": [
            {
                "color": "#fd1921"
            },
            {
                "visibility": "on"
            }
        ]
    }
]
    };
	}*/
	else {
		var mapOptions = {
        // How zoomed in you want the map to start at (always required)
        zoom: 11,
        center: new google.maps.LatLng(-34.8509887, 138.4302261),
        styles: [
    {
        "featureType": "administrative",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#444444"
            }
        ]
    },
    {
        "featureType": "administrative.locality",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "administrative.locality",
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "administrative.locality",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "simplified"
            },
            {
                "hue": "#fd1921"
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "all",
        "stylers": [
            {
                "color": "#f2f2f2"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "poi.business",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "all",
        "stylers": [
            {
                "saturation": -100
            },
            {
                "lightness": 45
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "transit",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "all",
        "stylers": [
            {
                "color": "#fd1921"
            },
            {
                "visibility": "on"
            }
        ]
    }
]
    };
	}
	

    var mapElement = document.getElementById('map');

    var map = new google.maps.Map(mapElement, mapOptions);
	
    var marker = new MarkerWithLabel({
       position: new google.maps.LatLng(-34.8749887, 138.5502261),
       draggable: false,
       map: map,
        icon: { 
            url: 'img/map_marker.png', 
            scaledSize: new google.maps.Size(140, 140)
        },
        labelContent: "<div>Toe2Toe Martial Arts Centre</div><div>Street Address, City, 15-100<br>Phone number +61 406 959 994</div><div>Open hours: 12:00 - 02:00</div>",
        labelAnchor: new google.maps.Point(-60, 170),
		/*labelOrigin: new google.maps.Point(0, 0),*/
        labelClass: "labels", // the CSS class for the label
        labelStyle: {opacity: 1.0},
        labelClass: "map-label", // your desired CSS class
        labelInBackground: true
     });
    
}