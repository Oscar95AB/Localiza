function iniciar(){
	dynamic_star();
	
}

function dynamic_star(){
	var star = document.getElementsByClassName('valoracion')[0].children;
}


$(document).ready(function() {
	var id = getParameterByName('id');
		dameComentarios(id);
	accionFormulario(id);
	
											 
});
function accionFormulario(id){
	$('#form_comentario').bind('submit',function(){
			
			var mensaje_error = '';
			
			var texto = $("#comentario").val();
			if(texto.length == 0 || texto.length > 30){
				mensaje_error = 'comentario: 0-30 caracteres'; 
			}
			var estrellas = $('.valoracion input[type="radio"]:checked ~ label').length;
			if(estrellas == 0){
				mensaje_error = 'debe seleccionar al menos 1 estrella';
			}
		
			if(mensaje_error == ''){
				console.log(estrellas);
				console.log(texto);
				console.log(id);
			}else{
				console.error(mensaje_error);
				mensaje_error ='';
			}
			//Enviamos por REST el comentario si devuelve 1 está OK si devuelve 0 está KO
			
			
			
			return false;
	});
}

function rellenaComentariosChino(comentario, id, nombre, sexo, valoracion){
	
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
            	'text':'insert_emoticon',
							'style': 'color:'+color+';background-color:transparent;margin: 0 .5em .5em 0;font-size: 60px;'
          	})).append(
							$('<p>',{
								'text': comentario
							})
						)
						
				
    ).append(
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




