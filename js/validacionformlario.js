
function valida(){

	var articulo = document.getElementById('articulo');
	if(articulo.selectedIndex == 0){
		alert('Necesitas seleccionar un articulo ');
		articulo.focus();
		return false;
    }
	
	var nombre = document.getElementById('nombre');
	if(nombre.value == ''){
		alert('El nombre es obligatorio');
		nombre.focus();
		return false;
	}
	
	
	
	var direccion = document.getElementById('direccion');
	if(direccion.value == ''){
		alert('La dirección es obligatoria');
		direccion.focus();
		return false;
	}
	
	var expDireccion = /^[A-Za-z0-9_\s]+$/;
	if(!expDireccion.test(direccion.value)){
		alert('La dirección es alfanumérica');
		direccion.focus();
		return false;
	}
	
	
	
	var fono = document.getElementById('fono');
	if(fono.value == ''){
		alert('El telefono es obligatorio');
		fono.focus();
		return false;
	}
	
	var expFono = /^\d+$/;
	if(!expFono.test(fono.value)){
		alert('El telefono es numérico');
		fono.focus();
		return false;
	}
	
	var movil = document.getElementById('movil');
	if(movil.value == ''){
		alert('El movil es obligatorio');
		movil.focus();
		return false;
	}
	
	var expMovil = /^\d+$/;
	if(!expMovil.test(movil.value)){
		alert('El movil es numérico');
		movil.focus();
		return false;
	}
	
	var email = document.getElementById('email');
	if(email.value == ''){
		alert('El email es obligatorio');
		email.focus();
		return false;
	}

	
}
	
	

	



	

