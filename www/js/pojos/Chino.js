		
		//Constructor
			function Chino(id,nombre,direccion,horario){
				this.id = id;
				this.nombre = nombre;
				this.direccion = direccion;
				this.horario = horario;
				metodosComunes(this);
			}
			
		//Acciones		
				var a = new Chino(1,2,3,4);
				var b = new Chino(1,2,3,4);
				var c = new Chino(1,2,24,4);
				a.toString();

				console.log(a.compare(b));
				console.log(b.compare(c));
				console.log(a.compare(c));
				console.log(b.compare(c));