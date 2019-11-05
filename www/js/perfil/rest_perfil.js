function dameComentariosUsuario(id){
var data_com = {"id":id};
	var url_comp = url+'comentario/usuario/'+JSON.stringify(data_com);
	console.log('DameComentariosUsuario URL: '+ url_comp)
	$.ajax({
			url: url_comp,
			type: 'GET',	
			dataType:'json',
			crossDomain: true
    }).success(function(data) {	
		console.log(sessionStorage);
			//Recorremos los datos
				var icono = sessionStorage.getItem('icono_select');
				var sexo = sessionStorage.getItem('sex');
			for(var i = 0; i<data.length; i++){
				console.log(data[i]);
				var comentario = data[i].comentario;
				var val = data[i].valoracion;
				var nombre =data[i].direccion;
				rellenaComentariosChino(comentario, id, nombre, sexo, val,icono);
			}
		
		 
			}).fail(function(data) {
    console.error('Llamada AJAX incompleta. Esto tendrás que controlarlo en algún momento xd.');
		console.log(data);
  }); 
	
}
