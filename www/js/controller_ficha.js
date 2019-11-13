var idC = '';
var idP = sessionStorage.getItem('id');

function iniciar(){
	dynamic_star();
	
}

function dynamic_star(){
	var star = document.getElementsByClassName('valoracion')[0].children;
}


$(document).ready(function() {
	
	
	if(idP == null || idP == "undefined"){
		var mensaje_error = 'Para poder comentar tienes que registrarte';
		$('.formulario textarea').prop('disabled', true);
		$('.formulario .valoracion').hide();
		$('.formulario button').prop('disabled', true);
		$('.msjError').addClass('mostrarerr');
				$('.msjError').empty().html(mensaje_error);
	}
	
  idC	= getParameterByName('id');
	dameComentarios(idC);
	accionFormulario(idC);
	
											 
});

function accionFormulario(id){
	$('#form_comentario').bind('submit',function(){
			var mensaje_error = '';
			$('.msjError').removeClass('ocultarerr');
		
			//errores
		  var estrellas = $('.valoracion input[type="radio"]:checked ~ label').length;
			if(estrellas == 0){
				$('#form_comentario .valoracion').css('border-bottom','1px solid #d50000');
				mensaje_error = 'Valoración: Seleccione al menos 1 estrella';
			}else{
				$('#form_comentario .valoracion').css('border-bottom','1px solid transparent');
			}
			var texto = $("#comentario").val();
		
			if(texto.length == 0 || texto.length > 30){
					$('#form_comentario div')[0].className += ' is-dirty is-invalid';
				mensaje_error = 'Comentario: 0-30 caracteres'; 
			}
			
			
			if(mensaje_error == ''){
				//ResetForm
				$('#form_comentario .valoracion').css('border-bottom','1px solid transparent');
				$('.msjError').removeClass('mostrarerr');
				$('#form_comentario')[0].reset();
				//
			var nombre = sessionStorage.getItem('nombre');
			var sex = sessionStorage.getItem('sex');
				
				tomaComentario(idC, idP, texto, estrellas);
				//Añadimos el comentario a la lista
				var icono = sessionStorage.getItem('icono_select');
				rellenaComentariosChino(texto, idP, nombre,sex,estrellas,icono);
				
			}else{
				
				$('.msjError').addClass('mostrarerr');
				$('.msjError').empty().html(mensaje_error);
				mensaje_error = '';
			}
			//Enviamos por REST el comentario si devuelve 1 está OK si devuelve 0 está KO
			
			
			
			return false;
	});
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




