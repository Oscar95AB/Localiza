function login(user,pass){
		console.log($('#user').val());
	console.log($('#password').val());
var data_com = {"user":user,"pass":pass};
	$.ajax({
			url: url+'user/'+JSON.stringify(data_com),
			type: 'GET',	
			dataType:'json',
			crossDomain: true
    }).success(function(data) {	
		
		var icon_selected = devuelveIcono(data.icono);
			
			
			sessionStorage.setItem('id', data.id);
			sessionStorage.setItem('nombre', data.nombre);
			sessionStorage.setItem('apellido', data.apellido);
			sessionStorage.setItem('icono', data.icono);
			sessionStorage.setItem('icono_select', icon_selected);
			sessionStorage.setItem('sex', data.sex);
		
		if(sessionStorage.getItem('id') != 'undefined'){
			window.location="perfil.html?perfil=true";
		}else{
			var mensaje_error = 'usuario/contraseña inválido';
			$('#div_login div')[0].className += ' is-dirty is-invalid';
			$('#div_login div')[1].className += ' is-dirty is-invalid';
			$('.msjError').addClass('mostrarerr');
				$('.msjError').empty().html(mensaje_error);
		}
		});
	
}

function dameLoc(){
	
	//Obtenemos la ubicación del usuario
	var lat = window.localStorage.getItem('alat');	
	var lng = window.localStorage.getItem('alng');	
	
	var data_ubi = {"latR":lat,"lngR":lng};
		
	

		callOtherDomain(data_ubi);
	var url_comp = url+'location/'+JSON.stringify(data_ubi);
	console.log('URL+DATOS: '+ url_comp);
		$.ajax({
			url: url_comp,
			type: 'GET',	
			dataType:'json',
			crossDomain: true,
		//	contentType: 'application/json; charset=utf-8'
    }).success(function(data) {		
			resetMark();
			$('#lista-abajo').empty();
			
			//Ordenamos primero menor distancia, segundo mejor valorado
			for(var i = 1; i<data.length; i++){
				for(var j = 1;j<(data.length-i);j++)
			{
				if(parseFloat(data[j].val)<parseFloat(data[j+1].val))
				{
					k=data[j+1];
					data[j+1]=data[j];
					data[j]=k;
				}
			}
				
			}
			
			//Ordenamos los demás
			for(var i = 2; i<data.length; i++){
				for(var j = 2;j<(data.length-1);j++)
			{
				if(parseFloat(data[j].distance)>parseFloat(data[j+1].distance))
				{
					k=data[j+1];
					data[j+1]=data[j];
					data[j]=k;
				}
			}
				
			}
			
			//Añadimos iconos del servidor
			for(var i = 0; i<data.length; i++){
				rellenaLista(data[i].id, data[i].dir,data[i].val, data[i].distance,i);
				addIcons([data[i].lat,data[i].lon], data[i].dir, data[i].hora);
			}
			posicionaLista();
			
			
    })
	.fail(function(data) {
    console.error('Llamada AJAX incompleta');
		console.log(data);
  });
}