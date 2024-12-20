//crear un objeto mapa
var map = L.map("map").setView([-10.87415,-74.94391],8);

//Agregar mapa base del osm
var osm = L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);

// Crear las capas GeoJSON vacías
var secto1 = L.geoJSON(null, {
    style: {
        color: "#ff7800",
        weight: 2,
        opacity: 0.65
    }
}).addTo(map);

var cusaf = L.geoJSON(null, {
    style: {
        color: "#0078ff",
        weight: 2,
        opacity: 0.65
    }
}).addTo(map);

var areainicio = L.geoJSON(null, {
    style: {
        color: "#00ff78",
        weight: 2,
        opacity: 0.65
    }
}).addTo(map);

// Cargar los datos GeoJSON
fetch('data/secto1.geojson')
    .then(response => response.json())
    .then(data => {
        secto1.addData(data);
    });

fetch('data/cusaf.geojson')
    .then(response => response.json())
    .then(data => {
        cusaf.addData(data);
    });

fetch('data/areainicio.geojson')
    .then(response => response.json())
    .then(data => {
        areainicio.addData(data);
    });

//agregar controlador de capas
var baseMaps = {
    "openstreetmap": osm
};

var overlayMaps = {
    "Areas Potenciales CUSAF": cusaf,
    "Áreas de Inicio Aprobados": secto1,
    "Área de Inicio SM": areainicio
};

L.control.layers(baseMaps, overlayMaps).addTo(map);
