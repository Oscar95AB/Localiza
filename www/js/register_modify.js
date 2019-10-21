function iniciar(){
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
	
	if(perfil == 'true'){
		var nombre = sessionStorage.getItem('nombre');
		var apellido = sessionStorage.getItem('apellido');
		var icono = sessionStorage.getItem('icono');
		var sex = sessionStorage.getItem('sex');
	}else{
		
	}
	
	//Rellenamos la pagina
	//Quitamos la clase active a los iconos
	var elementos = document.getElementsByTagName('li');
	elementos[0].classList.remove('active');
	elementos[icono].classList.add('active');
	
	var nom = document.getElementById('name');
	nom.value= nombre;
	nom.disabled = true;
	
	
	
	
	
	
}
snackbarContainer.MaterialSnackbar.showSnackbar(data);
