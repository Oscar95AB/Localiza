function iniciar(){
	
	 perfilOuser();
	
	select_icon();
//	perfilOuser();
	perf_app();
}	

function select_icon(){
	var lista = document.getElementsByClassName('select-icon')[0].getElementsByTagName('li');
	for(var i = 0; i < lista.length;i++){

		lista[i].addEventListener('click', function(){
			for(var i = 0; i<lista.length;i++){
				lista[i].className = ''; 
			}
			this.className = 'active';
			
			//$('.change_photo a i')[0].innerHTML = '';
			$('.change_photo a i')[0].innerHTML = this.firstChild.firstChild.innerHTML;
		});
	}
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


function perfilOuser(){
	
	var perfil = getParameterByName('perfil');
	var id = '';
	if(perfil == 'true'){
		var nombre = sessionStorage.getItem('nombre');
		var apellido = sessionStorage.getItem('apellido');
		var icono = sessionStorage.getItem('icono');
		var icono_select = sessionStorage.getItem('icono_select');
		var sex = sessionStorage.getItem('sex');
		id = sessionStorage.getItem('id');
		
		$('.change_photo a i')[0].append(icono_select);
		$('#iconos li')[icono-1].className = 'active';
		
		//Rellenamos Datos
		var nom_active = $('#perf_form div')[0];
		nom_active.className += ' is-dirty';
		var nom = $('#user');
		nom.val(nombre);

		var ape_active = $('#perf_form div')[1];
		ape_active.className += ' is-dirty';
		var ape = $('#apel');
		ape.val(apellido);
		
	}else{
		console.log('hola');
	}
	
	dameComentariosUsuario(id);
	
	
	
	
	
	
	
	
	
	
}
//snackbarContainer.MaterialSnackbar.showSnackbar(data);
