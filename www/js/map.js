 /*https://mappinggis.com/2014/06/mejores-plugins-para-leaflet/#Como_incorporo_los_pluginsen_mi_mapa_de_Leaflet*/

 var map;
 /*Creamos el botón de geolocalizar*/
  			var geolocate = L.Control.extend({

 					  options: {
 					    position: 'bottomright' 
 					  /*  control position - allowed: 'topleft', 'topright', 'bottomleft', 'bottomright' */
 					  },

 					  onAdd: function (map) {
 						    var geolocation = L.DomUtil.create('div', 'leaflet-bar leaflet-control leaflet-control-custom');

 						    geolocation.style.backgroundColor = 'white';
 						    geolocation.style.width = '30px';
 						    geolocation.style.height = '30px';
 						    geolocation.style.bottom = '10em';
 						    geolocation.style.border = 'none';

 						    geolocation.onclick = function(){
 						     map.locate({setView: true, maxZoom: 19});
 						    }
 						    return geolocation;
 					  },

 					});
 
 function initMap() {

     map = L.map('map', {
         zoomControl: false
     }).setView([40.4447232, -3.6519936], 19);
     L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
         maxZoom: 20,
         minZoom: 17,
         zoom: 18,
         attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
             '<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
             'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
         id: 'mapbox.streets'
     }).addTo(map);

     map.on('locationfound', onLocationFound);
     map.on('locationerror', onLocationError);

     				map.addControl(new geolocate());
     				map.locate({setView: true});

     addIcons();
     console.log(getMetros(40.4447232, -3.6519936, 40.44515896511521, -3.6509410159209494));

 }

 function onLocationFound(e) {
     /*var radius = e.accuracy / 2;*/

     L.marker(e.latlng).addTo(map)
         .bindPopup("Está actualmente aquí");

     /*L.circle(e.latlng, radius).addTo(map);*/
 }

 function onLocationError(e) {
     map.addControl(new geolocate());
     alert(e.message);
 }

 function addIcons() {
     var iconoBase = L.Icon.extend({
         options: {
             shadowUrl: 'img/icon-map/leaf-shadow.png',
             iconSize: [38, 95],
             shadowSize: [50, 64],
             iconAnchor: [22, 94],
             shadowAnchor: [4, 62],
             popupAnchor: [-3, -76]
         }
     });

     var iconoVerde = new iconoBase({
             iconUrl: 'img/icon-map/leaf-green.png'
         }),
         iconoRojo = new iconoBase({
             iconUrl: 'img/icon-map/leaf-red.png'
         }),
         iconoNaranja = new iconoBase({
             iconUrl: 'img/icon-map/leaf-orange.png'
         });

     var estiloPopup = {
         'maxWidth': '300'
     };

     //Añadimos marcador
     L.marker([40.44515896511521, -3.6509410159209494], {
         icon: iconoVerde
     }).bindPopup("Casa Espanya La Casa Espanya, o Casa Llunell, és un casal gòtic de l'Hospitalet de Llobregat (Barcelonès), declarat bé cultural d'interès nacional.", estiloPopup).addTo(map);
 }

 function direccion_buscador() {
     var entrada = document.getElementById('buscador');

     $.getJSON('http://nominatim.openstreetmap.org/search?format=json&limit=5&q=' + entrada.value, function(data) {
         var items = [];

         $.each(data, function(key, val) {
             console.log(key);
             bb = val.boundingbox;
             items.push("(" + bb[0] + ", " + bb[2] + ", " + bb[1] + ", " + bb[3] + ", \"" + val.tipo_osm + '');
             console.log("Coordenadas 1: " + bb[0]);
             console.log("Coordenadas 2: " + bb[1]);
             console.log("Coordenadas 3: " + bb[2]);
         });

         console.log(items);
     });
 }

 function getMetros(lat1, lon1, lat2, lon2) {
     rad = function(x) {
         return x * Math.PI / 180;
     }
     var R = 6378.137; //Radio de la tierra en km
     var dLat = rad(lat2 - lat1);
     var dLong = rad(lon2 - lon1);
     var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) + Math.cos(rad(lat1)) * Math.cos(rad(lat2)) * Math.sin(dLong / 2) * Math.sin(dLong / 2);
     var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
     var d = R * c * 1000;
     return d.toFixed(0); //Retorna 0 decimales
 }