//crear un objeto mapa
var map = L.map("map").setView([-10.87415,-74.94391],8);

//Agregar mapa base del osm
var osm = L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);

//Enlazar servicios wms

var secto1 = L.tileLayer.wms("http://localhost:8080/geoserver/ET_CCUSAF/wms?",{
					layers		:"PG_SECTOR1_ATFFS_SC",
					format		:"image/png",
					Transparent	: true
}).addTo(map);


var CUSAF = L.tileLayer.wms("http://localhost:8080/geoserver/ET_CCUSAF/wms?",{
					layers		:"PG_CUSAF_AP_ATFFS_SC",
					format		:"image/png",
					Transparent	: true

}).addTo(map);


var AREAINICIO = L.tileLayer.wms("http://localhost:8080/geoserver/ET_CCUSAF/wms?",{
					layers		:"AREA_INICIO",
					format		:"image/png",
					Transparent	: true

}).addTo(map);



//agregar controlador de capas

var baseMaps = {
				"openstreetmap": osm
};

var wms = {
			"Areas Potenciales CUSAF": CUSAF,
			"Áreas de Inicio Aprobados": secto1,
			"Área de Inicio SM" : AREAINICIO

};

L.control.layers(baseMaps,wms).addTo(map);


