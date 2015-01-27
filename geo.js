$(function () {
	var geo = navigator.geolocation;
	var opciones = {}

	function geo_error() {
		console.log("No se puede geolocalizar");
	}

	function geo_exito(posicion) {
		var lat  = posicion.coords.latitude;
		var lon  = posicion.coords.longitude;
		var mapa = new Image();
		mapa.src = "http://maps.googleapis.com/maps/api/staticmap?maptype=hybrid&zoom=18&size=600x600&sensor=false&center=" + lat + "," + lon;
		$("#geo").append(mapa);	
		$("#geo img")
		.attr("width", "100%")
		.attr("height", "300px")
		.css("padding-right", "0.5em");	
		
		obtenerGeoInformacion(lat, lon);
	}

	geo.getCurrentPosition(geo_exito, geo_error, opciones);
});
