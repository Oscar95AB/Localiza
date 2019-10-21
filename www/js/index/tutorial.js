
var timer;


function tutorial(){
	
	var ventana = $('#tutorial');
	ventana.show();
	var selector = $('#selector');
	var mensaje = $('#mensaje');
	
	presentacion(mensaje);
	
		window.setTimeout(function(){
			menu(selector, mensaje);	
		}, 8000);
	
		window.setTimeout(function(){
			busqueda(selector, mensaje);	
		}, 14000);
	
		window.setTimeout(function(){
			botonBusqueda(selector, mensaje);	
		}, 20000);
		
		window.setTimeout(function(){
			botonGps(selector, mensaje);	
		}, 22000);
		
		window.setTimeout(function(){
			botonOrdenar(selector, mensaje);	
		}, 24000);
	
		window.setTimeout(function(){
			listaAbajo(selector, mensaje);	
		}, 26000);
 
}
function maquina(contenedor,texto,intervalo,n){
 var i=0;
 $("#"+contenedor).empty();	
  // Creamos el timer
  timer = setInterval(function() {
  if ( i<=texto.length ) {
   // Si NO hemos llegado al final del texto..
   // Vamos añadiendo letra por letra y la _ al final.
   $("#"+contenedor).html(texto.substr(0,i++) + "_");
  } else {
   // En caso contrario..
   // Salimos del Timer y quitamos la barra baja (_)
   clearInterval(timer);
   $("#"+contenedor).html(texto);
  }
 },intervalo);
};

function presentacion(mensaje){
	mensaje.show();
	var texto = "Bienvenido a Buscachinos, este es un tutorial simple de como funciona la aplicación";
 	maquina("mensaje p",texto, 70,0);
}

function menu(selector, mensaje){
	
	//Posicionamos los elementos
	mensaje.animate({
            top: '7em',
						left: '7.5%'
        }, 1000);
	
	window.setTimeout(function(){
			selector.show();
			var texto = "Aquí podrás desplegar el menú";
 			maquina("mensaje p",texto, 70,0);
			mensaje.append('<style>#mensaje:before{opacity:1;}</style>');
		}, 1000);
}

function busqueda(selector, mensaje){
	//Posicionamos los elementos
	selector.animate({
            top: '.6em',
						left: '20%',
						height: '4em',
						width: '56%'
        }, 1000);
	window.setTimeout(function(){
		mensaje.animate({
							left: '26.5%'
					}, 200);
		mensaje.animate({
							left: '20.5%'
					}, 200);
		mensaje.animate({
							left: '27.5%'
					}, 200);
		mensaje.animate({
							left: '22.5%'
					}, 200);
		mensaje.animate({
							left: '24.5%'
					}, 200);
	}, 500);
	window.setTimeout(function(){
			var texto = "Escribe para buscar";
 			maquina("mensaje p",texto, 70,0);
	},1500);
}

function botonBusqueda(selector, mensaje){
	selector.animate({
						left: '78%',
						width: '17%'
        }, 1000);
	mensaje.animate({
							left: '65.5%'
					}, 1000);
	window.setTimeout(function(){
		mensaje.append('<style>#mensaje:before{left:56%;}</style>');
		var texto = "Púlsalo para buscar";
 		maquina("mensaje p",texto, 70,0);
	},1000);
		
}

function botonGps(selector, mensaje){
	selector.animate({
						top: $(window).innerHeight()-210+'px',
						left: $(window).innerWidth()-61+'px',
						width: '4em'
        }, 1000);
	mensaje.animate({
							top: $(window).innerHeight()-332+'px',
							left: $(window).innerWidth()-mensaje.width+'px',
					}, 1000);
	window.setTimeout(function(){
		mensaje.append('<style>#mensaje:before{	border-left: 25px solid transparent;border-top: 25px solid white; border-bottom: 0px solid transparent;top: unset;bottom: -2.5em; }</style>');
		/*
			border-left: 100px solid #f0ad4e;
     border-top: 50px solid transparent;
     border-bottom: 50px solid transparent; 
		*/
		var texto = "Localízate :)";
 		maquina("mensaje p",texto, 70,0);
	},1000);
}

function botonOrdenar(selector, mensaje){
	selector.animate({
						top: $(window).innerHeight()-130+'px',
						left: $(window).innerWidth()-76+'px',
						width: '4em'
        }, 1000);
	mensaje.animate({
							top: $(window).innerHeight()-242+'px',
							left: $(window).innerWidth()-mensaje.width-50+'px',
					}, 1000);
	window.setTimeout(function(){
		mensaje.append('<style>#mensaje:before{	border-left: 25px solid transparent;border-top: 25px solid white; border-bottom: 0px solid transparent;top: unset;bottom: -2.5em; }</style>');
		/*
			border-left: 100px solid #f0ad4e;
     border-top: 50px solid transparent;
     border-bottom: 50px solid transparent; 
		*/
		var texto = "Ordename :)";
 		maquina("mensaje p",texto, 70,0);
	},1000);
}

function listaAbajo(selector, mensaje){
	selector.animate({
						top: $(window).innerHeight()-170+'px',
						left: '0px',
						width: '100%',
						height: '100%'
        }, 1000);
	mensaje.animate({
							top: $(window).innerHeight()-335+'px',
							left: '20%',
					}, 1000);
	window.setTimeout(function(){
		mensaje.append('<style>#mensaje:before{	border-left: 25px solid transparent;border-top: 25px solid white; border-bottom: 0px solid transparent;top: unset;bottom: -2.5em; }</style>');
		/*
			border-left: 100px solid #f0ad4e;
     border-top: 50px solid transparent;
     border-bottom: 50px solid transparent; 
		*/
		var texto = "Aquí puedes seleccionar las tiendas cercanas";
 		maquina("mensaje p",texto, 70,0);
	},1000);
}