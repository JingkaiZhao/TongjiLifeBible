/* google.maps.Map instance */
var map;

/* init load information markers and infowindows */
var leisureData = [];
var restaurantData = [];
var tInterestData = [];
var transitData = [];
var leisureMarkerArray = [];
var restaurantMarkerArray = [];
var tInterestMarkerArray = [];
var transitMarkerArray = [];
var leisureInfowindowArray = [];
var restaurantInfowindowArray = [];
var tInterestInfowindowArray = [];
var transitInfowindowArray = [];

/* latlng of tongji university */
var tongjiLatLng = new google.maps.LatLng(31.283223,121.500217);

/* find path instance and variables */
var pathListener;
var originMarker = new google.maps.Marker({
    title: "origin"
});
var destinationMarker = new google.maps.Marker({
    title: "destination"
});
var originLatlng;
var destinationLatlng;
var pathClickFlag = false;
var directionsDisplay;
var directionsService = new google.maps.DirectionsService();

/* Interval objects */
//var messageRefreshInterval = setInterval("messageRefresh()", 10000);
var messageClearAnimationInterval = setInterval("clearMessageAnimation()", 60000);

/* message instance and variables */
var messageClickListener;
var lastRefreshTime;
var messageMarker = new google.maps.Marker();
var messageInfowindow;
var messageArray = [];
var messageMarkerArray = [];
var messageInfowindowArray = [];

var bagImg = 'assets/images/message.png';
var leisureImg = 'assets/images/leisure.png';
var restaurantImg = 'assets/images/restaurant.png';
var tInterestImg = 'assets/images/tree.png';
var transitImg = 'assets/images/arrow.png';

var messageInfowindowStr = '<div class="message-block">' + 
    '我: <input type="text" id="message-input">' +
    '<button type="default" onclick="postMessage()">提交</button>' +
    '</div>';

function initialize() {

    directionsDisplay = new google.maps.DirectionsRenderer();

    /* init map */
	var mapOptions = {
		center: tongjiLatLng, 
        zoom: 17,
        disableDefaultUI: true, 
        mapTypeId: google.maps.MapTypeId.ROADMAP
	};
    map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);


    /* init geographic information */
    gInfoInit();

    /* init message markers and infowindows */
    messageInit();

}

/* Init GI with Ajax */
function gInfoInit() {
    $.get("getInfo", function(data, status) {
    	console.log(data);
        leisureData = data.leisure;
        restaurantData = data.restaurant;
        tInterestData = data.tInterest;
        transitData = data.transit;
        $.each(restaurantData, function(i, item) {
            var newMarker = new google.maps.Marker({
                position: new google.maps.LatLng(item.lat, item.lng),
                map: map,
                icon: restaurantImg, 
                animation: google.maps.Animation.DROP,
                title: item.name
            });
            var newInfowindow = new InfoBubble ({
	            map: map,
	            shadowStyle: 1,
	            padding: 0,
	            backgroundColor: '#ffffff',
	            borderRadius: 10,
	            arrowSize: 10,
	            borderWidth: 1,
	            borderColor: '#ccc',
	            disableAutoPan: true,
	            arrowPosition: 50,
	            arrowStyle: 0,
	            minWidth: 350,
	            maxWidth: 350,
	            minHeight: 180,
	            maxHeight: 180,
	            content: '<div class="i-leisure">' + 
	            			'<h2>' + item.name + '</h2>' +
	            			'<ul>'+ 
	            				'<li class="li-img"></li>' + 
	            				'<li class="li-info"><b>地址: </b>' + item.address + '</li>' + 
	            				'<li class="li-info"><b>电话: </b>' + item.tel + '</li>' +
	            				'<li class="li-info"><b>人均: </b>￥' + item.pcc + '</li>' +
	            				'<li class="li-detail"><a href="javascript:void(0)" id=' + i + ' onclick="showRestDetailInfo(this)">了解更多>></a></li>' +
	            			'</ul>' +
	            		 '</div>'
            });
            google.maps.event.addListener(newMarker, 'click', function() {
                newInfowindow.open(map, newMarker);
            });
            restaurantMarkerArray.push(newMarker);
            restaurantInfowindowArray.push(newInfowindow);
        });
        $.each(leisureData, function(i, item) {
            var newMarker = new google.maps.Marker({
                position: new google.maps.LatLng(item.lat, item.lng),
                map: map,
                icon: leisureImg, 
                animation: google.maps.Animation.DROP,
                title: item.name
            });
            var newInfowindow = new InfoBubble ({
	            map: map,
	            shadowStyle: 1,
	            padding: 0,
	            backgroundColor: '#ffffff',
	            borderRadius: 10,
	            arrowSize: 10,
	            borderWidth: 1,
	            borderColor: '#ccc',
	            disableAutoPan: true,
	            arrowPosition: 50,
	            arrowStyle: 0,
	            minWidth: 350,
	            maxWidth: 350,
	            minHeight: 180,
	            maxHeight: 180,
	            content: '<div class="i-leisure">' + 
	            			'<h2>' + item.name + '</h2>' +
	            			'<ul>'+ 
	            				'<li class="li-img"></li>' + 
	            				'<li class="li-info"><b>地址: </b>' + item.address + '</li>' + 
	            				'<li class="li-info"><b>电话: </b>' + item.tel + '</li>' +
	            				'<li class="li-info"><b>人均: </b>￥' + item.pcc + '</li>' +
	            				'<li class="li-detail"><a href="javascript:void(0)" id=' + i + ' onclick="showLeisureDetailInfo(this)">了解更多>></a></li>' +
	            			'</ul>' +
	            		 '</div>'
            });
            google.maps.event.addListener(newMarker, 'click', function() {
                newInfowindow.open(map, newMarker);
            });
            leisureMarkerArray.push(newMarker);
            leisureInfowindowArray.push(newInfowindow);
        });
        $.each(tInterestData, function(i, item) {
            var newMarker = new google.maps.Marker({
                position: new google.maps.LatLng(item.lat, item.lng),
                map: map,
                icon: tInterestImg, 
                animation: google.maps.Animation.DROP,
                title: item.name
            });
            var newInfowindow = new InfoBubble ({
            	map: map,
	            shadowStyle: 1,
	            padding: 0,
	            backgroundColor: '#ffffff',
	            borderRadius: 10,
	            arrowSize: 10,
	            borderWidth: 1,
	            borderColor: '#ccc',
	            disableAutoPan: true,
	            arrowPosition: 50,
	            arrowStyle: 0,
	            minWidth: 350,
	            maxWidth: 350,
	            minHeight: 180,
	            content: '<div class="i-leisure">' + 
			    			'<h2>' + item.name + '</h2>' +
			    			'<ul>'+ 
			    				'<li class="li-img"></li>' + 
			    				'<li class="li-info"><b>地址: </b>' + item.address + '</li>' + 
			    				'<li class="li-info"><b>开放时间: </b>' + item.openingTime + '</li>' +
			    				'<li class="li-info"><b>票价: </b>￥' + item.ticketPrice + '</li>' +
			    				'<li class="li-detail"><a href="javascript:void(0)" id=' + i + ' onclick="showtInterestDetailInfo(this)">了解更多>></a></li>' +
			    			'</ul>' +
			    		 '</div>'
            });
            google.maps.event.addListener(newMarker, 'click', function() {
                newInfowindow.open(map, newMarker);
            });
            tInterestMarkerArray.push(newMarker);
            tInterestInfowindowArray.push(newInfowindow);
        });
        $.each(transitData, function(i, item) {
            var newMarker = new google.maps.Marker({
                position: new google.maps.LatLng(item.lat, item.lng),
                map: map,
                icon: transitImg, 
                animation: google.maps.Animation.DROP,
                title: item.name
            });
            var newInfowindow = new InfoBubble ({
            	map: map,
	            shadowStyle: 1,
	            padding: 0,
	            backgroundColor: '#ffffff',
	            borderRadius: 10,
	            arrowSize: 10,
	            borderWidth: 1,
	            borderColor: '#ccc',
	            disableAutoPan: true,
	            arrowPosition: 50,
	            arrowStyle: 0,
	            minWidth: 350,
	            maxWidth: 350,
	            minHeight: 180,
	            maxHeight: 180,
	            content: '<div class="i-leisure">' + 
			    			'<h2>' + item.name + '</h2>' +
			    			'<ul>'+ 
			    				'<li class="li-img"></li>' + 
			    				'<li class="li-info"><b>' + item.name + '</b>' + 
			    				'<li class="li-detail"><a href="javascript:void(0)" id=' + i + ' onclick="showTransitDetailInfo(this)">了解更多>></a></li>' +
			    			'</ul>' +
			    		 '</div>'
            });
            google.maps.event.addListener(newMarker, 'click', function() {
                newInfowindow.open(map, newMarker);
            });
            transitMarkerArray.push(newMarker);
            transitInfowindowArray.push(newInfowindow);
        });
    });
}

/* show details of GI */
function showLeisureDetailInfo(obj) {
    top.showLeisureDetails(leisureData[obj.id]);
}

function showRestDetailInfo(obj) {
	top.showRestDetails(restaurantData[obj.id]);
}

function showtInterestDetailInfo(obj) {
	top.showtInterestDetails(tInterestData[obj.id]);
}

function showTransitDetailInfo(obj) {
	top.showTransitDetails(transitData[obj.id]);
}

/* enable/disable map draggable */
function setDraggable(flag) {
    var newOptions = {
        draggable: flag
    }
    map.setOptions(newOptions);
}

/* add mouse click listener for find path function */
function pathAddListener() {
    pathListener = google.maps.event.addListener(map, 'click', function(event) {
        if (!pathClickFlag) {
            originLatlng = event.latLng;
            var markerOptions = {
                map: map, 
                position: event.latLng
            }
            originMarker.setOptions(markerOptions);
            pathClickFlag = true;
        } else {
            destinationLatlng = event.latLng;
            var markerOptions = {
                map: map, 
                position: event.latLng
            }
            destinationMarker.setOptions(markerOptions);
            var request = {
                origin: originLatlng, 
                destination: destinationLatlng, 
                travelMode: google.maps.TravelMode.WALKING
            };
            directionsService.route(request, function(result, status) {
                if (status == google.maps.DirectionsStatus.OK) {
                    directionsDisplay.setDirections(result);
                } else {
                    alert("Opps, something goes into error!");
                }
            });
            directionsDisplay.setMap(map);
            pathClickFlag = false;
        }
    });
    setDraggable(false);
}

/* clear directions displayed on map */
function pathClear() {
    originMarker.setMap(null);
    destinationMarker.setMap(null);
    directionsDisplay.setMap(null);
    setDraggable(true);
}

/* remove findpath mouse click listener */
function pathRemoveListener() {
    google.maps.event.removeListener(pathListener);
}

/* clear GI overlays on map by GI category name */
function clearOverlays(name) {
    switch (name)
    {
        case "leisure":
        {
            $.each(leisureMarkerArray, function(i, item) {
                item.setMap(null);
            });
           break; 
        }
        case "tInterest":
        {
            $.each(tInterestMarkerArray, function(i, item) {
                item.setMap(null);
            });
            break;
        }
        case "transit":
        {
            $.each(transitMarkerArray, function(i, item) {
                item.setMap(null);
            });
            break;
        }
        case "restaurant":
        {
        	$.each(restaurantMarkerArray, function(i, item) {
        		item.setMap(null);
        	});
        	break;
        }
    }
}

/* show GI overlays on map by GI category name */
function showOverlays(name) {
    switch (name)
    {
        case "leisure":
        {
            $.each(leisureMarkerArray, function(i, item) {
                item.setMap(map);
            });
           break; 
        }
        case "tInterest":
        {
            $.each(tInterestMarkerArray, function(i, item) {
                item.setMap(map);
            });
            break;
        }
        case "transit":
        {
            $.each(transitMarkerArray, function(i, item) {
                item.setMap(map);
            });
            break;
        }
        case "restaurant":
        {
        	$.each(restaurantMarkerArray, function(i, item) {
        		item.setMap(map);
        	});
        	break;
        }
    }
}

/* add mouse click listener for post message function */
function messageAddListener() {
    messageClickListener = google.maps.event.addListener(map, 'click', function(event) {
        if (messageMarker.getMap() == null) {
            messageMarker = new google.maps.Marker({
                position: event.latLng,
                draggable: true, 
                map: map,
                icon: bagImg, 
                title: "MessageBox"
            });
            messageInfowindow = new google.maps.InfoWindow({
                content: messageInfowindowStr 
            });
            messageInfowindow.open(map, messageMarker);
            google.maps.event.addListener(messageMarker, 'click', function() {
                messageInfowindow.open(map, messageMarker);
            })
        } else {
            messageMarker.setPosition(event.latLng);
        }
    })
    setDraggable(false);
}

/* post message by ajax */
function postMessage() {
	if (top.currentUsr == null) {
		top.showSigninModal();
	} else {
	    var message = $('#message-input').val();
	    $.ajax({
	        url: "postMessage", 
	        type: "get", 
	        data: {
	            content: encodeURI((message)), 
	            lat: messageMarker.getPosition().lat(), 
	            lng: messageMarker.getPosition().lng() 
	        }, 
	        success: function(data, status) {
	            messageInfowindow.close();
	            messageMarker.setMap(null);
	            if (status = "success") {
	            	top.showMessenger('success', '消息发送成功');
	            } else {
	            	top.showMessenger('error', '消息发送失败');
	            }
	        }
	    });
	}
}

/* init message markers and infowindows */
function messageInit() {
    $.get("message", function(data, status) {
        if (status == "success") {
            messageArray = data.messages;
            $.each(messageArray, function(i, item) {
                var newMarker = new google.maps.Marker({
                    position: new google.maps.LatLng(item.lat, item.lng),
                    icon: bagImg,
                    title: "MessageBox",
                    map: map
                });
                var newInfowindow = new InfoBubble ({
    	            shadowStyle: 0,
    	            padding: 0,
    	            backgroundColor: '#899eb9',
    	            borderRadius: 10,
    	            arrowSize: 15,
    	            borderWidth: 1,
    	            borderColor: '#ccc',
    	            disableAutoPan: true,
    	            arrowPosition: 65,
    	            arrowStyle: 2,
    	            minWidth: 280,
    	            maxWidth: 280,
    	            minHeight: 80, 
    	            content: '<div class="message-header">' + 
    	            		 '</div>' +
    	            		 '<div class="message-content">' +
    	            		 '<h5>' + item.creater.name + ': </h5>' + 
    	            		 '<p>' + item.content + '</p>' +
    	            		 '<b>' + item.createTime + '</b>' + 
    	            		 '</div>'
                });
                google.maps.event.addListener(newMarker, 'click', function() {
                    newInfowindow.open(map, newMarker);
                });
                messageMarkerArray.push(newMarker);
                messageInfowindowArray.push(newInfowindow);
            });
            lastRefreshTime = new Date();
        } else {
            alert("Opps, something goes into error!");
        }
    })
}

/* clear messageMarker on map */
function messageClear() {
    google.maps.event.removeListener(messageClickListener);
    messageMarker.setMap(null);
    setDraggable(true);
}

/* function refresh message markers by pushlet push */
function messagePush(message) {
	if (!messageItemHandler(message)) {
		var newMarker = new google.maps.Marker ({
			position: new google.maps.LatLng(message.lat, message.lng), 
			icon: bagImg, 
			title: "MessageBox", 
			animation: google.maps.Animation.BOUNCE, 
			map: map
		});
		var newInfowindow = new InfoBubble ({
            shadowStyle: 0,
            padding: 0,
            backgroundColor: '#899eb9',
            borderRadius: 10,
            arrowSize: 15,
            borderWidth: 1,
            borderColor: '#ccc',
            disableAutoPan: true,
            arrowPosition: 65,
            arrowStyle: 2,
            minWidth: 280,
            maxWidth: 280,
            minHeight: 80, 
            content: '<div class="message-header">' + 
            		 '</div>' +
            		 '<div class="message-content">' +
            		 '<h5>' + message.createrName + ': </h5>' + 
            		 '<p>' + message.content + '</p>' +
            		 '<b>' + message.createTime + '</b>' + 
            		 '</div>'
        });
		google.maps.event.addListener(newMarker, 'click', function() {
			if (newMarker.getAnimation() == google.maps.Animation.BOUNCE) {
				newMarker.setAnimation(null);
			}
			newInfowindow.open(map, newMarker);
		});
		messageArray.push(message);
		messageMarkerArray.push(newMarker);
		messageInfowindowArray.push(newInfowindow);
		lastRefreshTime = new Date();
	} else {
	}
}

/* function refresh message markers by ajax request */
function messageRefresh() {
    $.get("refreshMessage", {date: encodeURI(lastRefreshTime.toString())}, function(data, status) {
        if (status == "success") {
            var newMessageArray = data.messages;
            newMessageArray = messageDataHandler(newMessageArray);
            $.each(newMessageArray, function(i, item) {
                var newMarker = new google.maps.Marker({
                    position: new google.maps.LatLng(item.lat, item.lng),
                    icon: bagImg,
                    title: "MessageBox",
                    animation: google.maps.Animation.BOUNCE,
                    map: map
                });
                var newInfowindow = new google.maps.InfoWindow({
                    content: item.content
                });
                google.maps.event.addListener(newMarker, 'click', function() {
                    if (newMarker.getAnimation() == google.maps.Animation.BOUNCE) {
                        newMarker.setAnimation(null);
                    }
                    newInfowindow.open(map, newMarker);
                });
                messageArray.push(item);
                messageMarkerArray.push(newMarker);
                messageInfowindowArray.push(newInfowindow);
            });
            lastRefreshTime = new Date();
        } else {
            alert("Opps, something goes into error!");
        }
    });
}

/* handle message data array, delete repeated data */
function messageDataHandler(newMessageArray) {
    var temp = [];
    var oldMessages = [];
    var newMessages = [];
    for (var i = 0; i < messageArray.length; ++i) {
        temp[messageArray[i].id] = true;
    }

    for (var i = 0; i < newMessageArray.length; ++i) {
        if (!temp[newMessageArray[i].id]) {
            newMessages.push(newMessageArray[i]);
        } else {
            oldMessages.push(newMessageArray[i]);
        }
    }

    return newMessages;
}

/* handle message data item, ignore repeated data */
function messageItemHandler(messageItem) {
	var temp = [];
	var isRepeated = false;
	for(var i = 0; i < messageArray.length; ++i) {
		temp[messageArray[i].id] = true;
	}
	
	if(temp[messageItem.id]) {
		isRepeated = true;
		return isRepeated;
	} else {
		return isRepeated;
	}
}

/* clear message markers animation */
function clearMessageAnimation() {
    $.each(messageMarkerArray, function(i, item) {
        if (item.getAnimation() == google.maps.Animation.BOUNCE) {
            item.setAnimation(null);
        }
    });
}