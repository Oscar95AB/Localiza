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
                      }

                    });
 
                var indicaciones = L.Control.extend({

                      options: {
                        position: 'bottomright' 
                      /*  control position - allowed: 'topleft', 'topright', 'bottomleft', 'bottomright' */
                      },

                      onAdd: function (map) {
                            var indicaciones = L.DomUtil.create('div', 'leaflet-bar leaflet-control leaflet-control-custom');

                            indicaciones.style.backgroundColor = 'red';
                            indicaciones.style.width = '30px';
                            indicaciones.style.height = '30px';
                            indicaciones.style.bottom = '11em';
                            indicaciones.style.right = '0';
                            indicaciones.style.border = 'none';

                            indicaciones.onclick = function(){
                             muestra_ind();
                            }
                            return indicaciones;
                      }

                    }); 


 function initMap() {

     map = L.map('map', {
         zoomControl: false
     }).setView([40.4447232, -3.6519936], 19);
     L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
         maxZoom: 20,
         zoom: 18,
         attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
             '<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
             'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
         id: 'mapbox.streets'
     }).addTo(map);

     map.on('locationfound', onLocationFound);
     map.on('locationerror', onLocationError);

                    map.addControl(new geolocate());
                    map.addControl(new indicaciones());
                    map.locate({setView: true});

     addIcons([40.4447232, -3.6519936]);
     console.log(getMetros(40.4447232, -3.6519936, 40.44515896511521, -3.6509410159209494));

 }

function muestra_ind(){
    var indicaciones = document.getElementsByClassName('leaflet-routing-container')[0];
    if(indicaciones.classList.contains('indicaciones-trans')){
        indicaciones.classList.remove('indicaciones-trans');
    }else{
        indicaciones.classList.add('indicaciones-trans');
    }
    console.log(indicaciones);
}

var route;
 //http://www.liedman.net/leaflet-routing-machine/api/
 function froute(pto11,pto12,pto21,pto22){

        route = L.Routing.control({
            lineOptions: {
               styles: [
                   {color: 'white', opacity: 0.6, weight: 9},
                   {color: '#FC8428', opacity: 0.6, weight: 3}
               ]
             },
             language: 'es-ES', //'pt-BR' portuges


            waypoints: [
                L.latLng(40.4447232, -3.6519936),
                L.latLng(40.44515896511521, -3.6509410159209494)
            ],
            createMarker: function() { return null; },
            routeWhileDragging: false,
            fitSelectedRoutes: false,
            routeDragTimeout: 250,
            showAlternatives: false
        }).addTo(map);
 }

 function resetRoute() {
    route.setWaypoints([(0,0), (0,0)]);
 }
var actualLoc;
 function onLocationFound(e) {


     actualLoc = L.marker(e.latlng).addTo(map)
         .bindPopup("Está actualmente aquí");


 }

 function onLocationError(e) {

     alert(e.message);
 }

// setup a marker group
var markers ;

 function addIcons(coord) {
        markers = L.markerClusterGroup();
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
    var marker =  L.marker([40.44515896511521, -3.6509410159209494], {
         icon: iconoVerde
     }).bindPopup("Casa Espanya La Casa Espanya, o Casa Llunell, és un casal gòtic de l'Hospitalet de Llobregat (Barcelonès), declarat bé cultural d'interès nacional.", estiloPopup);
    markers.addLayer(marker);
    marker = L.marker(coord, {
         icon: iconoVerde
     }).bindPopup("Casa Espanya La Casa Espanya, o Casa Llunell, és un casal gòtic de l'Hospitalet de Llobregat (Barcelonès), declarat bé cultural d'interès nacional.", estiloPopup);
    markers.addLayer(marker);
    map.addLayer(markers);

 }

 function resetMark(){
  markers.clearLayers();
 }

 function direccion_buscador() {
     var entrada = document.getElementById('buscador');
       
     $.getJSON('http://nominatim.openstreetmap.org/search?format=json&limit=5&q=' + entrada.value, function(data) {
      var items = [];
         $.each(data, function(key, val) {
           
             bb = val.boundingbox;
             items.push(bb[0]);
             items.push(bb[2]);   
             items.push(bb[1]);
             items.push(bb[3]);
         });

            console.log(items);

            if(items.length == 0){
                alert('No se han encontrado resultados');
            }else if(items.length == 4){
                console.log(Math.abs(parseFloat(items[0])-parseFloat(items[2])));
                if (Math.abs(parseFloat(items[0])-parseFloat(items[2])) > 0.003) {
                    map.setView([items[0],items[3]]);
                    addIcons([items[0],items[3]]);
                }else if (Math.abs(parseFloat(items[0])-parseFloat(items[2])) < 0.001) {
                    map.setView([items[2],items[3]]);
                    addIcons([items[2],items[3]]);
                }else{
                    map.setView([items[0],items[3]]);
                    addIcons([items[0],items[3]]);
                }
               
            }else{
                alert('Hay más de un resultado, acote la búsqueda');
            }         
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