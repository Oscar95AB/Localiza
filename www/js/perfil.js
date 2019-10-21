


function perf_app(){
	document.getElementsByClassName('change_photo')[0].addEventListener('click', function(){

	var list = document.getElementsByClassName('select-icon')[0].style.display;
		if(list === 'none'){
			document.getElementsByClassName('select-icon')[0].style.display = 'block';
			document.getElementsByClassName('change_photo')[0].style.marginTop = '0 auto';
			document.getElementsByClassName('change_datos')[0].style.marginTop = '0em';

		}else{
			document.getElementsByClassName('select-icon')[0].style.display = 'none';
			document.getElementsByClassName('change_photo')[0].style.marginTop = '7.7em';
			document.getElementsByClassName('change_datos')[0].style.marginTop = '7em';
		}

	}); 
}
