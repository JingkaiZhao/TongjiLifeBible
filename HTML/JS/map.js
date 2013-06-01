var map;
var Tongji = new google.maps.LatLng(31.283223,121.500217);

var directionsDisplay;
var directionsService = new google.maps.DirectionsService();

function HomeControl(controlDiv, map) {

	controlDiv.style.padding = '5px';

	var controlUI = document.createElement('div');
	controlUI.style.backgroundColor = 'white';
	controlUI.style.borderStyle = 'solid';
	controlUI.style.borderWidth = '2px';
	controlUI.style.cursor = 'pointer';
	controlUI.style.textAlign = 'center';
	controlUI.title = 'Click to set the map to Home';
	controlDiv.appendChild(controlUI);

	var controlText = document.createElement('div');
	controlText.style.fontFamily = 'Arial,sans-serif';
	controlText.style.fontSize = '12px';
	controlText.style.paddingLeft = '4px';
	controlText.style.paddingRight = '4px';
	controlText.innerHTML = '<strong>Route</strong>';
	controlUI.appendChild(controlText);

	google.maps.event.addDomListener(controlUI, 'click', function() {
		calRoute();
	});
}

function initialize() {
	directionsDisplay = new google.maps.DirectionsRenderer();
	var mapOptions = {
		center: new google.maps.LatLng(31.283223,121.500217),
        zoom: 17,
        mapTypeControl: true, 
        mapTypeControlOptions: {
        style: google.maps.MapTypeControlStyle.DROPDOWN_MENU  
        }, 
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    map = new google.maps.Map(document.getElementById("map_canvas"), mapOptions);

    directionsDisplay.setMap(map);

    var marker = new google.maps.Marker({
        position: map.getCenter(), 
        title: 'Click to zoom', 
        icon: {
        	path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW, 
        	scale: 4 
        }, 
        draggable: true
    });

    marker.setMap(map);

    var message = "This is Tongji University";

    var infowindow = new google.maps.InfoWindow({
        content: message, 
        size: new google.maps.Size(50, 50)  
    });

    google.maps.event.addListener(marker, 'click', function() {
        infowindow.open(map, marker);
    })

    var homeControlDiv = document.createElement('div');
	var homeControl = new HomeControl(homeControlDiv, map);

	homeControlDiv.index = 1;
	map.controls[google.maps.ControlPosition.TOP_RIGHT].push(homeControlDiv);



}

function calRoute() {
	var start = new google.maps.LatLng(31.282915,121.497792);
	var end = new google.maps.LatLng(31.29665,121.470852);
	var request = {
		origin: start, 
		destination: end, 
		travelMode: google.maps.TravelMode.TRANSIT
	};

	directionsService.route(request, function(result, status) {
		if (status == google.maps.DirectionsStatus.OK) {
			directionsDisplay.setDirections(result);
		}
	});
}