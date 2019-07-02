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
     bottom = -(ctd * 70 - 40);
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

 function iniciar() {
     posicionaLista();
     initMap();
     dialogForm();
     froute(1,1,1,1);
 }