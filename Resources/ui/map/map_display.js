function displayMap(title) {
	var self = Ti.UI.createWindow({
		title : title,
		backgroundColor : 'white'
	});

	// var win = Titanium.UI.currentWindow;
	//
	var isAndroid = false;
	if (Titanium.Platform.name == 'android') {
		isAndroid = true;
	}
	//
	// var mountainView = Titanium.Map.createAnnotation({
	// latitude : 37.390749,
	// longitude : -122.081651,
	// title : "Appcelerator Headquarters",
	// subtitle : 'Mountain View, CA',
	// pincolor : isAndroid ? "orange" : Titanium.Map.ANNOTATION_RED,
	// animate : true,
	// leftButton : '../images/appcelerator_small.png',
	// myid : 1 // CUSTOM ATTRIBUTE THAT IS PASSED INTO EVENT OBJECTS
	// });
	//
	// var apple = Titanium.Map.createAnnotation({
	// latitude : 37.33168900,
	// longitude : -122.03073100,
	// title : "Steve Jobs",
	// subtitle : 'Cupertino, CA',
	// pincolor : Titanium.Map.ANNOTATION_GREEN,
	// animate : true,
	// rightButton : '../images/apple_logo.jpg',
	// myid : 2 // CUSTOM ATTRIBUTE THAT IS PASSED INTO EVENT OBJECTS
	// });
	//
	// var atlantaParams = {
	// latitude : 33.74511,
	// longitude : -84.38993,
	// title : "Atlanta, GA",
	// subtitle : 'Atlanta Braves Stadium\nfoo',
	// animate : true,
	// leftButton : '../images/atlanta.jpg',
	// rightButton : Titanium.UI.iPhone.SystemButton.DISCLOSURE,
	// myid : 3 // CUSTOM ATTRIBUTE THAT IS PASSED INTO EVENT OBJECTS
	// };
	//
	// if (!isAndroid) {
	// atlantaParams.pincolor = Titanium.Map.ANNOTATION_PURPLE;
	// } else {
	// atlantaParams.pinImage = "../images/map-pin.png";
	// }
	// var atlanta = Titanium.Map.createAnnotation(atlantaParams);
	//
	// //
	// // PRE-DEFINED REGIONS
	// //
	// var regionAtlanta = {
	// latitude : 33.74511,
	// longitude : -84.38993,
	// animate : true,
	// latitudeDelta : 0.04,
	// longitudeDelta : 0.04
	// };
	// var regionSV = {
	// latitude : 37.337681,
	// longitude : -122.038193,
	// animate : true,
	// latitudeDelta : 0.04,
	// longitudeDelta : 0.04
	// };
	//
	// var presetAnnotations = [atlanta, apple];
	//

	//FIXME get lat,lon from server
	var lat, lon;
	Titanium.Geolocation.getCurrentPosition(function(e) {
		if (!e.success || e.error) {
			currentLocation.text = 'error: ' + JSON.stringify(e.error);
			Ti.API.info("Code translation: " + translateErrorCode(e.code));
			alert('error ' + JSON.stringify(e.error));
			return;
		}

		lon = e.coords.longitude;
		lat = e.coords.latitude;
		var altitude = e.coords.altitude;
		var heading = e.coords.heading;
		var accuracy = e.coords.accuracy;
		var speed = e.coords.speed;
		var timestamp = e.coords.timestamp;
		var altitudeAccuracy = e.coords.altitudeAccuracy;
		Ti.API.info('speed ' + speed);
		currentLocation.text = 'long:' + longitude + ' lat: ' + latitude;

		Titanium.API.info('geo - current location: ' + new Date(timestamp) + ' long ' + longitude + ' lat ' + latitude + ' accuracy ' + accuracy);
	});

	var view = Titanium.Map.createView({
		mapType : Titanium.Map.HYBRID_TYPE,
		region : {
			latitude : lat,
			longitude : lon,
			latitudeDelta : 0.5,
			longitudeDelta : 0.5
		},
		// region : {
		// latitude : 33.74511,
		// longitude : -84.38993,
		// latitudeDelta : 0.5,
		// longitudeDelta : 0.5
		// },
		animate : true,
		regionFit : true,
		userLocation : true,
		// annotations : presetAnnotations
	});

	// alert(view);

	// var view = Titanium.UI.createView({
	// backgroundColor:'#000',
	// opacity:0.7,
	// height:30,
	// width:250,
	// borderRadius:10
	// });

	// var label = Titanium.UI.createLabel({
	// color:'#fff',
	// font:{fontSize:13},
	// textAlign:'center',
	// width:'auto',
	// height:'auto'
	// });
	// win.add(view);
	// win.add(label);

	// if (!isAndroid) {
	// view.addAnnotation(atlanta);
	// }
	// view.selectAnnotation(atlanta);
	//
	// // win.add(mapView);
	//
	// return view;
	self.add(view);
	return self;
};
module.exports = displayMap;
