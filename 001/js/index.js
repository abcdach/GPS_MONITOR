





var mymap = L.map('leafletmap');
mymap.setView([41.7607, 44.7704], 14);

var marker = L.marker([41.7607, 44.7904]).addTo(mymap);



marker.bindPopup("<b>GPS DATA</b>").openPopup();

L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>',
    maxZoom: 18
}).addTo(mymap);


//var lat = (e.latlng.lat);
//var lng = (e.latlng.lng);
//marker.setLatLng([lat, lng]).update(); 

$('.pure-button').on('click', function(){
  //mymap.locate({setView: true, maxZoom: 15});
   // mymap.setView(new L.LatLng(41.7607, 44.7704),14);
	//marker.setLatLng([41.7607, 44.7704]).update();
	//marker.bindPopup("<b>Hello world!</b><br>ddddddd").openPopup();
	marker.bindPopup("<b>GPS DATA</b>").openPopup();
});





mymap.on('locationfound', onLocationFound);
function onLocationFound(e) {
    console.log(e); 
    // e.heading will contain the user's heading (in degrees) if it's available, and if not it will be NaN. This would allow you to point a marker in the same direction the user is pointed. 
    L.marker(e.latlng).addTo(mymap);
}





	$(document).ready(function()
	{
			 //$('#Text_S1').text('daiiiiiiiiiiiiii');
			//TERMINAL("sssss");
			doConnect();
	});
	function TERMINAL( message ) {
			//$('#pTest').text(message);
	}
	function Print_Data_Stream_0(Data){ $('#Text_S0').text(Data); }
	function Print_Data_Stream_1(Data){
			$('#Text_S1').text(Data);
			marker.bindPopup(Data).update();
			
			//var a = marker.getPopup();
			//var b = a._content.replace("<span></span>","<span>asdasdasda</span>");
			//marker.setPopupContent(b);
			
			//marker._popup.setContent('something else')
	}
	function Print_Data_Stream_2(Data){ 
	
	$('#Text_S2').text(Data); 
	var JSON_VALUE;
    var JSON_PARSE = JSON.parse(Data);
	var DATA = [];
	//#--------------------------------------------------------------
		JSON_VALUE = JSON_PARSE.LAT;
		if (typeof JSON_VALUE == "undefined") return 1;
		DATA[0] = JSON_VALUE;
	//#--------------------------------------------------------------
		JSON_VALUE = JSON_PARSE.LON;
		if (typeof JSON_VALUE == "undefined") return 1;
		DATA[1] = JSON_VALUE;
	//#--------------------------------------------------------------
		JSON_VALUE = JSON_PARSE.ACC;
		if (typeof JSON_VALUE == "undefined") return 1;
		DATA[2] = JSON_VALUE;
	//#--------------------------------------------------------------
		marker.setLatLng([DATA[0], DATA[1]]).update();		
	}

	function Print_Data_Stream_3(Data){ $('#Text_S3').text(Data); }
	function Print_Data_Stream_4(Data){ $('#Text_S4').text(Data); }
	function Print_Data_Stream_5(Data){ $('#Text_S5').text(Data); }
	function Print_Data_Stream_6(Data){ $('#Text_S6').text(Data); }
	function Print_Data_Stream_7(Data){ $('#Text_S7').text(Data); }
















