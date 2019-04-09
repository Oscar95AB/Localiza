function iniciar(){
	select_icon();
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