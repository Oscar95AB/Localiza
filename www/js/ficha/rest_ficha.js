function dameComentarios(id){
var data_com = {"id":id};
	var url_comp = url+'comentario/'+JSON.stringify(data_com);
	console.log('DameComentarios URL: '+ url_comp)
	$.ajax({
			url: url_comp,
			type: 'GET',	
			dataType:'json',
			crossDomain: true
    }).success(function(data) {	
		
			//Recorremos los datos
			var media = 0.0;
			for(var i = 0; i<data.length; i++){
				
				var comentario = data[i].comentario;
				var id = data[i].id;
				var nombre = data[i].nombre;
				var icono = data[i].icono;
				var sexo = data[i].sex;
				var val = data[i].valoracion;
				var lat = data[i].lat;
				var long = data[i].lon;
				var hora = data[i].hora;
				var icon_selected = devuelveIcono(icono);
			
				//PENDIENTE DE LA DIRECCION Y RETORNAR AL MAPA LA LAT Y LONG Y QUE TE LLEVE DIRECTAMENTE ALLI
				
				media = media+parseInt(val);
				
				if(hora != ''){
					$('#hour').empty().append(hora);
				}
				rellenaComentariosChino(comentario, id, nombre, sexo, val,icon_selected);
			}
		
		 media = media/data.length;
			
			$('#media').empty().append(media.toFixed(1).replace('.',','));
		
			//Calcular estrellas
		var total = $('<span>',{
						'class': 'mdl-list__item-secondary-action',
						'href': '#'
					});

		for(var i = 0; i<media.toFixed(0); i++){
			total.append( $('<i>',{
						'class': 'material-icons',
						'text': 'star',
						'style':'color:	#F6D681'
					}));
		}



		for(var i = 0; i<5-media.toFixed(0); i++){
			total.append( $('<i>',{
						'class': 'material-icons',
						'text': 'star',
						'style':'color:	#757575 !important;opacity:0.7;'
					}));
		}

		
			$('#star-val').empty().append(total);


			media = 0;
			}).fail(function(data) {
    console.error('Llamada AJAX incompleta. Esto tendrás que controlarlo en algún momento xd.');
		console.log(data);
  }); 
	
}

function tomaComentario(idC, idP, comentario, estrellas){
	
	
	
	var data_com = {"idC":idC,"idP":idP,"comentario":comentario,"estrellas":estrellas};
		
		callOtherDomain(data_ubi);
	
	var url_comp = url+'comentario/insert/'+JSON.stringify(data_com);
	console.log('URL+DATOS: '+ url_comp);
		$.ajax({
			url: url_comp,
			type: 'GET',	
			dataType:'json',
			crossDomain: true,
		//	contentType: 'application/json; charset=utf-8'
    }).success(
			function(data) {		
				console.log(data);	
    })
	.fail(function(data) {
    console.error('Llamada AJAX incompleta. Esto tendrás que controlarlo en algún momento xd.');
		console.log(data);
  });
}
