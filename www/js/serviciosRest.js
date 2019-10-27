
	
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
				var sexo = data[i].sex;
				var val = data[i].valoracion;
				var lat = data[i].lat;
				var long = data[i].lon;
				var hora = data[i].hora;
				
				//PENDIENTE DE LA DIRECCION Y RETORNAR AL MAPA LA LAT Y LONG Y QUE TE LLEVE DIRECTAMENTE ALLI
				
				media = media+parseInt(val);
				
				if(hora != ''){
					$('#hour').empty().append(hora);
				}
				rellenaComentariosChino(comentario, id, nombre, sexo, val);
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




//Toma
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
			
			sessionStorage.setItem('id', data.id);
			sessionStorage.setItem('nombre', data.nombre);
			sessionStorage.setItem('apellido', data.apellido);
			sessionStorage.setItem('icono', data.icono);
			sessionStorage.setItem('sex', data.sex);
		
		if(sessionStorage.getItem('id') != 'undefined'){
			window.location="perfil.html?perfil=true";
		}else{
			console.log('usuario/contraseña inválido');
		}
		});
	
}