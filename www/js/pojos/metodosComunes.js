//Métodos comunes de todos los objetos
var toString = function toString() {
							var cadena = '';
							for (var i in this) {
								if (this.hasOwnProperty(i)) {
									cadena += `${i} = ${this[i]}`;
									
								}
							}
							console.group('Objeto');
							console.info(cadena);
							console.groupEnd();
							return cadena;
						}
		var compare = function compare(object){
							var op = false;
							
							if(object.toString() == this.toString()){
								op = true;
							}
							
							return op;
						}
		
		function metodosComunes(objeto){
			objeto.toString = toString;
			objeto.compare = compare;
		}