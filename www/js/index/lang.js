/*Menú lateral*/

const far_es = 'Más cercano';
const val_es = 'Mejor valorado';
const welcome_es = 'Bienvenid@,';
const name_es = 'Nombre';
const count_es = 'Cuenta';
const log_title_es = 'Accede';
const log_user_es = 'Usuario';
const log_pass_es = 'Contraseña';
const conf_es = 'Configuración';
const dist_bus_es = 'Distancia de búsqueda';
const km_m_es = 'KM/Metros';
const help_es = 'Ayuda';
const add_es = 'Añadir localización';
const add_add_es = 'Añade';
const calle_es = 'Calle';
const user_es = 'Usuario';
const pass_es = 'Contraseña';
const esp_es = 'Español';
const ing_es = 'Inglés';
const fr_es = 'Francés';

const far_en = 'Más cercano';
const val_en = 'Mejor valorado';
const welcome_en = 'Welcome,';
const name_en = 'Name';
const count_en = 'Count';
const log_title_en = 'Access';
const log_user_en = 'User';
const log_pass_en = 'Password';
const conf_en = 'Settings';
const dist_bus_en = 'Distance to busqeuda';
const km_m_en = 'KM/Metter';
const help_en = 'Help';
const add_en = 'Add Location';
const add_add_en = 'Add';
const calle_en = 'Street';
const user_en = 'User';
const pass_en = 'Password';
const esp_en = 'Spanish';
const ing_en = 'English';
const fr_en = 'France';

const far_fr = 'Más cercano';
const val_fr = 'Mejor valorado';
const welcome_fr = 'Welcome,';
const name_fr = 'Name';
const count_fr = 'Count';
const log_title_fr = 'Access';
const log_user_fr = 'User';
const log_pass_fr = 'Password';
const conf_fr = 'Settings';
const dist_bus_fr = 'Distance to busqeuda';
const km_m_fr = 'KM/Metter';
const help_fr = 'Help';
const add_fr = 'Add Location';
const add_add_fr = 'Add';
const calle_fr = 'Street';
const user_fr = 'User';
const pass_fr = 'Password';
const esp_fr = 'Spanish';
const ing_fr = 'English';
const fr_fr = 'France';

/*Mapa*/

const search_es = 'Buscar dirección';
const ordenarmayomendist_es = 'Ordenar de mayor a menor distancia';
const ordenarmenmaydist_es = 'Ordenar de menor a mayor distancia';
const ordenarmayomenval_es = 'Ordenar de mayor a menor valoracion';
const ordenarmenmayoval_es = 'Ordenar de menor a mayor valoracion';
const mascercano_es = 'Más cercano';
const mejorval_es = 'Mejor valorado';


const search_en = 'Search address';
const ordenarmayomendist_en = 'Order mayor or menor distance';
const ordenarmenmaydist_en = 'Order menor or mayor distance';
const ordenarmayomenval_en = 'Order mayor or menor valoracion';
const ordenarmenmayoval_en = 'Order menor or mayor valoracion';
const mascercano_en = 'To near';
const mejorval_en = 'More valorate';

const search_fr = 'Search address';
const ordenarmayomendist_fr = 'Order mayor or menor distance';
const ordenarmenmaydist_fr = 'Order menor or mayor distance';
const ordenarmayomenval_fr = 'Order mayor or menor valoracion';
const ordenarmenmayoval_fr = 'Order menor or mayor valoracion';
const mascercano_fr = 'To near';
const mejorval_fr = 'More valorate';

function actualizarIdioma(lang){
	if(lang=='es'){
	  $('#es').empty().text(esp_es);
		$('#en').empty().text(ing_es);
		$('#fr').empty().text(fr_es);
		$('#welcome').empty().text(welcome_es);
		$('#name').empty().text(name_es);
		$('#count').empty().text(count_es);
		$('#settings').empty().text(conf_es);
		$('#settings_title').empty().text(conf_es);
		$('#help').empty().text(help_es);
		$('#add').empty().text(add_es);
		$('#log_tittle').empty().text(log_title_es);
		$('#log_user').empty().text(log_user_es);
		$('#log_pass').empty().text(log_pass_es);
		$('#dist_bus').empty().text(dist_bus_es);
		$('#km_met').empty().text(km_m_es);
		$('#add_add').empty().text(add_add_es);
		$('#calle').empty().text(calle_es);
		$('#buscador').attr('placeholder',search_es);

		$('#ordenarmayomendist').empty().text(ordenarmayomendist_es);
		$('#ordenarmenmaydist').empty().text(ordenarmenmaydist_es);
		$('#ordenarmayomenval').empty().text(ordenarmayomenval_es);
		$('#ordenarmenmayoval').empty().text(ordenarmenmayoval_es);
		$('#cercano').empty().text(mascercano_es);
		$('#valorado').empty().text(mejorval_es);
	}else if(lang == 'en'){
		$('#es').empty().text(esp_en);
		$('#en').empty().text(ing_en);
		$('#fr').empty().text(fr_en);
		$('#welcome').empty().text(welcome_en);
		$('#name').empty().text(name_en);
		$('#count').empty().text(count_en);
		$('#settings').empty().text(conf_en);
		$('#settings_title').empty().text(conf_en);
		$('#help').empty().text(help_en);
		$('#add').empty().text(add_en);
		$('#log_tittle').empty().text(log_title_en);
		$('#log_user').empty().text(log_user_en);
		$('#log_pass').empty().text(log_pass_en);
		$('#dist_bus').empty().text(dist_bus_en);
		$('#km_met').empty().text(km_m_en);
		$('#add_add').empty().text(add_add_en);
		$('#calle').empty().text(calle_en);
		$('#buscador').attr('placeholder',search_en);

		$('#ordenarmayomendist').empty().text(ordenarmayomendist_en);
		$('#ordenarmenmaydist').empty().text(ordenarmenmaydist_en);
		$('#ordenarmayomenval').empty().text(ordenarmayomenval_en);
		$('#ordenarmenmayoval').empty().text(ordenarmenmayoval_en);
		$('#cercano').empty().text(mascercano_en);
		$('#valorado').empty().text(mejorval_en);	
	}else{
		$('#es').empty().text(esp_fr);
		$('#en').empty().text(ing_fr);
		$('#fr').empty().text(fr_fr);
		$('#welcome').empty().text(welcome_fr);
		$('#name').empty().text(name_fr);
		$('#count').empty().text(count_fr);
		$('#settings').empty().text(conf_fr);
		$('#settings_title').empty().text(conf_fr);
		$('#help').empty().text(help_fr);
		$('#add').empty().text(add_fr);
		$('#log_tittle').empty().text(log_title_fr);
		$('#log_user').empty().text(log_user_fr);
		$('#log_pass').empty().text(log_pass_fr);
		$('#dist_bus').empty().text(dist_bus_fr);
		$('#km_met').empty().text(km_m_fr);
		$('#add_add').empty().text(add_add_fr);
		$('#calle').empty().text(calle_fr);
		$('#buscador').attr('placeholder',search_fr);

		$('#ordenarmayomendist').empty().text(ordenarmayomendist_fr);
		$('#ordenarmenmaydist').empty().text(ordenarmenmaydist_fr);
		$('#ordenarmayomenval').empty().text(ordenarmayomenval_fr);
		$('#ordenarmenmayoval').empty().text(ordenarmenmayoval_fr);
		$('#cercano').empty().text(mascercano_fr);
		$('#valorado').empty().text(mejorval_fr);
		
	}
	
}