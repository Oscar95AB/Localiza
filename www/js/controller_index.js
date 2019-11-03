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



 function dialogForm() {
     var dialog = document.getElementsByTagName('dialog');
     var showModalButton = document.getElementsByClassName('show-modal');

     for(var i = 0; i<dialog.length;i++){
			 
					 registrarDialog(dialog[i], showModalButton[i]); 
     }
 }

 function registrarDialog(dialog, showModalButton){
    if (!dialog.showModal) {
        // dialogPolyfill.registerDialog(dialog);
     }

     showModalButton.addEventListener('click', function() {
         dialog.showModal();
     });

     dialog.getElementsByClassName('close')[0].addEventListener('click', function() {
         dialog.close();
     });

 }

function accionFormularios(){
	$('#login').click(function(){
		var user = $('#user').val();
		var pass = $('#password').val();
		
		login(user,pass);
	});
}

/* Llamadas REST */
function allItemsPosible(){
	 	 dameLoc();
}

function rellenaLista(id, dir, val, dist, pos){
	
	
	
	var cerc_val = '';
	var id2 = '';
	if(pos == 0){
		id2='cercano';
		cerc_val = 'Más cercano';
	}else if(pos == 1){
		id='valorado';
		cerc_val = 'Mejor valorado';
	}
	
	
	
	//Calcular estrellas
	var total = $('<span>',{
					'class': 'mdl-list__item-secondary-action',
					'href': '#'
				});
	for(var i = 0; i<val; i++){
		total.append( $('<i>',{
					'class': 'material-icons',
					'text': 'star'
				}));
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
            'text':'navigation'
          })
        ).append(
				$('<span>',{
            'text':dir.toUpperCase().substr(0,30) 
          })
				).append(
				$('<span>',{
						'class': 'mdl-list__item-sub-title',
            'text':dist.substr(0,4)+' km'
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
				
		}

	 	// 
     posicionaLista();
     initMap();
     dialogForm();
     //froute(1,1,1,1);
	 	 accionFormularios();
 });

function idioma(lang){
	window.localStorage.setItem('lang', lang);
	actualizarIdioma(lang);
}

