
	
/*Conexion Servicios REST*/
var url = 'http://localhost:8080/localizaRest/';
		var invocation = new XMLHttpRequest();

		var lat = window.localStorage.getItem('alat');
		var lng = window.localStorage.getItem('alng');
	
	
		var data_ubi = {"latR":lat,"lngR":lng};

		function callOtherDomain(data_ubi){
			if(invocation)
				{
					invocation.open('GET', url, true);
					invocation.setRequestHeader('Access-Control-Allow-Origin', 'application/vnd.sun.wadl+json');
					invocation.onreadystatechange = handler;
				}
		}

		function handler(data){
		/*	console.log("HANDLER:");
			console.log(data);*/
		}

function devuelveIcono(icono){
	var icon_selected;
	if(icono == '1'){
				icon_selected = 'android';
			}else if( icono == '2'){
				icon_selected = 'face';
			}else if( icono == '3'){
				icon_selected = 'extension';
			}else if( icono == '4'){
				icon_selected = 'tag_faces';
			}else if( icono == '5'){
				icon_selected = 'directions_runs';
			}else if( icono == '6'){
				icon_selected = 'adb';
			}else if( icono == '7'){
				icon_selected = 'child_care';
			}else if( icono == '8'){
				icon_selected = 'mood';
			}
	return icon_selected;
}

function rellenaComentariosChino(comentario, id, nombre, sexo, valoracion, icon){
		//Calcular estrellas
	var total = $('<span>',{
					'class': 'mdl-list__item-secondary-action',
					'href': '#'
				});
	
	for(var i = 0; i<valoracion; i++){
		total.append( $('<i>',{
					'class': 'material-icons',
					'text': 'star',
					'style':'color:	#F6D681'
				}));
	}
	
	
	
	for(var i = 0; i<5-valoracion; i++){
		total.append( $('<i>',{
					'class': 'material-icons',
					'text': 'star',
					'style':'color:	#757575 ;opacity:0.7;'
				}));
	}

	//Sacamos el género
	var color; 
	if(sexo == 0){
		color = '#75D4C2';
	}else{
		color='purple';
	}
	
	$("<li>", {
    'class': 'comentario'
}).append(
    $('<a>', {
				'data-tooggle': 'ficha_uno',
				'class': 'link_ficha',
				
    }).append(
      $('<span>',{
				'class': 'mdl-list__item-primary-content'
			}).append(
          	$('<i>',{
            	'class':'material-icons mdl-list__item-avatar',
            	'text': icon,
							'style': 'color:'+color+';background-color:transparent;margin: 0 .5em .5em 0;font-size: 60px;'
          	})).append(
							$('<p>',{
								'text': comentario
							})
						)
						
				
    ).append(
		$('<span>',{
				'class': 'name',
				'text': nombre
			})
		)
		.append(
			$('<span>',{
				'class': 'mdl-list__item-secondary-content'
			}).append(
				$('<span>',{
					'class': 'mdl-list__item-secondary-action',
				}).append(
					total
				)
			)
			)
		
).hide().appendTo('#comentarios').fadeIn('slow');
}

