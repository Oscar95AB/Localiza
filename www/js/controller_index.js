 /*Lista desplegable abajo*/
 var bottom;


 function posicionaLista() {
     var lista = document.getElementsByClassName("lista-menu");
     var li = lista[0].childNodes[5].childNodes;
     var ctd = 0;
     for (var i = 0; i < li.length; i++) {
         if (li[i].length == undefined) {
             ctd++;
         }
     }
     bottom = -(ctd * 70 - 40)+10;
     lista[0].style.bottom = "" + bottom + "px";
	 	 
     //Solo se puede un maximo de 11
 }


function registrarCuenta(){
	window.location="perfil.html?perfil=true";
}
 function dialogForm() {
     var dialog = document.getElementsByTagName('dialog');
     var showModalButton = document.getElementsByClassName('show-modal');

     for(var i = 0; i<dialog.length;i++){
			 if(sessionStorage.getItem('id') != '' && sessionStorage.getItem('id') != null && sessionStorage.getItem('id') != 'undefined' && i == 0){
				 console.info('Sesión iniciada');
				 
				 //$('.mdl-navigation a')[0].removeClass('mdl-navigation')addEventListener('click', alert('kk'));
				 //$('.mdl-navigation a')[0].removeEventListener('click', registrarCuenta(),false	);
				 
			 }else {
			 	 registrarDialog(dialog[i], showModalButton[i]); 
			 }
     }
 }

 function registrarDialog(dialog, showModalButton){
    if (!dialog.showModal) {
       dialogPolyfill.registerDialog(dialog);   
		}
	 		

     showModalButton.addEventListener('click', function() {
         dialog.showModal();
     });

     dialog.getElementsByClassName('close')[0].addEventListener('click', function() {
         dialog.close();
     });

 }



/* Llamadas REST */
function allItemsPosible(){
	 	 dameLoc();
}

function rellenaLista(id, dir, val, dist, pos){
	
	$('#filter-switcher').show();
	var cerc_val = '';
	var id2 = '';
	var km = ' km';
	var icono = 'navigation';
	if(pos == 0){
		id2='cercano';
		cerc_val = 'Más cercano';
		dist = dist.substr(0,4);
	}else if(pos == 1){
		id2='valorado';
		cerc_val = 'Mejor valorado';
		dist = dist.substr(0,4);
	} else if(pos == -1){
		id2='error';
		cerc_val = '¡Vaya!';
		km ='';
		icono = 'block';
		$('#filter-switcher').hide();
	}else{
		dist = dist.substr(0,4);
	}
	
	
	
	//Calcular estrellas
	var total = $('<span>',{
					'class': 'mdl-list__item-secondary-action',
					'href': '#'
				});
	if ( val == 0){
		total.append( $('<i>',{
						'class': 'material-icons',
						'text': 'error_outline'
					}));
	}else{
		for(var i = 0; i<val; i++){
			total.append( $('<i>',{
						'class': 'material-icons',
						'text': 'star'
					}));
		}
	}
	
 $("<li>", {
    'class': 'mdl-list__item mdl-list__item--two-line'
}).append(
    $('<a>', {
				'href': 'ficha_chino.html?id='+id
    }).append(
      $('<span>',{
				'class': 'mdl-list__item-primary-content'
			})
        .append(
          $('<i>',{
            'class':'material-icons mdl-list__item-avatar',
            'text':icono
          })
        ).append(
				$('<span>',{
            'text':dir.substr(0,18) 
          })
				).append(
				$('<span>',{
						'class': 'mdl-list__item-sub-title',
            'text':dist+km//.substr(0,4)
          })
				)
    ).append(
			$('<span>',{
				'class': 'mdl-list__item-secondary-content'
			}).append(
				$('<span>',{
					'class': 'mdl-list__item-secondary-info',
					'text': cerc_val,
					'id': id2
				})
			).append(
				total
				)
			)
		
).hide().appendTo('#lista-abajo').fadeIn('slow');	
	
}

 $( document ).ready(function() {
	 
	 //	Comprobaciones de la pagina
	 	if(sessionStorage.getItem('nombre') == null || sessionStorage.getItem('nombre') == "undefined"){
			$('.perf i').text('https');
			$('.disconect').css('display','none');
			
		}else{
			$('.perf i').text(sessionStorage.getItem('icono_select'));
			$('#name').empty().text(sessionStorage.getItem('nombre'));
			$('#logout').on("click",function(){
				
				
				
				sessionStorage.setItem('id', undefined);
				sessionStorage.setItem('nombre', undefined);
				sessionStorage.setItem('apellido', undefined);
				sessionStorage.setItem('icono', undefined);
				sessionStorage.setItem('icono_select', undefined);
				sessionStorage.setItem('sex', undefined);
				$('.perf i').text('https');
				$('.disconect').css('display','none');
				dialogForm();
				
			})
		}

	 	// 
     posicionaLista();
     initMap();
     dialogForm();
	 	
     //froute(1,1,1,1);
	 	 formularios();
	 	 
 });


//Formularios
function formularios(){
	controlFormLoc();
	accionFormularios();
	
}
function accionFormularios(){
	
	$('#login').click(function(){
		var user = $('#user').val();
		var pass = $('#password').val();
		
		login(user,pass);
	});
	
	$('#send').click(function(){
		anadirLocalizacion('dir');
		
		return false;
	});
	
	$('#btn-gps').click(function(){
		//Comprobamos si es geodir o dir a secas
		var llamada = 'geodir';
		
		if($('#street').val() == ''){
			llamada = 'geo';	
		}
		
		anadirLocalizacion(llamada);
		return false;
	});
		

}

function controlFormLoc(){
	
	if((window.localStorage.getItem('alng') == '0' || window.localStorage.getItem('alat') == '0') ||
		(window.localStorage.getItem('alng') == null || window.localStorage.getItem('alat') == null)){
		//No ha geolocalizado
		$('#btn-gps').hide();
	}else{
		//Si ha geolocalizado
		$('#send').hide();
	}
	
}


function anadirLocalizacion(op){

	var id = sessionStorage.getItem('id');
	var error = '';
	
	var elat;
	var elng;
	var street;
	var hora;
	var comentario;
	
	//Comprobamos de que forma vamos a rellenar los datos
	if (op == 'geodir'){
		
		street = $('#street').val();
		hora = $('#open').val()+'-'+$('#close').val();
		comentario = $('#comentario').val();
	
		elng = window.localStorage.getItem('alng');
		elat = window.localStorage.getItem('alat');
		
		
	}else if(op == 'geo'){
		
		//Sacamos la calle con lat y lng
		
		street = 'kk';
		
		hora = '';
		comentario = comentario = $('#comentario').val();
		
		
		elng = window.localStorage.getItem('alng');
		elat = window.localStorage.getItem('alat');
		
		
	}else if(op == 'dir'){

		street = $('#street').val();
		console.log(street);
		hora = $('#open').val()+'-'+$('#close').val();
		comentario = $('#comentario').val();

		elat = 0;
		elng = 0;	

		
	
		
	}
	
	error = comprobarFormUbicacion(street, comentario, id);
	
	if(error == ''){
			//
			if(op == 'dir'){
				geocoder.geocode(street+' Madrid', function(results) {  			
					if(results.length != 1){
						console.error('Sea más concreto con la dirección');
					}else{
						var data_com = {"Calle":street,"Hora":hora,"Comentario":comentario,"Lat": results[0].center.lat,"Lng": results[0].center.lng,"id":id};
						data_com = JSON.stringify(data_com);
						console.info(data_com);

						$('#form_ubi')[0].reset();
					}
				});
			}else if(op == 'geo'){
				latLng= new L.LatLng(elat.substr(0,7), elng.substr(0,7));
				console.log(latLng);
				geocoderInverse.latlng(latLng).run(function (error, result, response) {
					if(error == undefined){
					var data_com = {"Calle":result.address.ShortLabel," Hora":hora,"Comentario":comentario,"Lat":elat,"Lng":elng,"id":id};
					data_com = JSON.stringify(data_com);
					console.info(data_com);

					$('#form_ubi')[0].reset();
						}else{
							console.error('Ha habido un problema al recuperar la direccion');
							console.error(error);
					}
				});

				
			}else if (op == 'geodir'){
				
				var data_com = {"Calle":street,"Hora":hora,"Comentario":comentario,"Lat":elat,"Lng":elng,"id":id};
				data_com = JSON.stringify(data_com);
				console.info(data_com);

				$('#form_ubi')[0].reset();
			}
			//llamada REST
	}else{
		console.log(error);
	}
	
	//nombre
}

function comprobarFormUbicacion(street, comentario, id){
	
	var errores = '';
	$('.msjError.ubi').removeClass('ocultarerr');
	
	if(street.length == 0){
		errores = 'Introduce una calle';
		$('#form_ubi div')[0].className += ' is-dirty is-invalid';
	}
		
	if(comentario.length > 30 || comentario.length == 0){
		errores = 'El comentario tiene que estar entre 0-30 caracteres';
		$('#form_ubi div')[3].className += ' is-dirty is-invalid';
	}
	if(id == null || id == undefined || id == ''){
			errores = 'Ha habido un error de sesión, por favor vuelva a iniciarla';
			$('.msjError.ubi').addClass('mostrarerr');
			$('.msjError.ubi').empty().html(errores);
			
		}
	
	if(errores != ''){
			
	}
	
	
	
	return errores;
	
}



/**
 * @param String name
 * @return String
 */
function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
    results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

function idioma(lang){
	window.localStorage.setItem('lang', lang);
	actualizarIdioma(lang);
}

