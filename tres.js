/*
3)Nos ingresan una cantidad indeterminada de estadías de  vacaciones, 
validando los datos ingresados. 
sexo del titular ,lugar ( “bariloche”, “cataratas” o “salta”),
temporada(“otoño”,”invierno, “verano,”primavera”),
cantidad de personas que viajan.
informar:
a)el lugar más elegido
b)el sexo de titular que lleva más pasajeros.
c)el promedio de personas por viaje,  que viajan en invierno
*/
function mostrar()
{
	let seguir;
	let sexo;
	let lugar;
	let temporada;
	let cantidad;
	let cBariloche=0;
	let cCataratas=0;
	let cSalta=0;
	let cantidadHombre=0;
	let cantidadMujer=0;
	let cantidadInvierno=0;
	let contadorInvierno=0;
	let promedioInvierno;

	do {

		sexo=prompt('Ingrese el sexo del titular ("m" o "f")');

		while(sexo!='m' && sexo!='f') {

			sexo=prompt('Sexo invalido. Ingrese el sexo del titular ("m" o "f")');
		}

		lugar=prompt('Ingrese el destino ( "bariloche", "cataratas" o "salta")');

		while(lugar!="bariloche" && lugar!="cataratas" && lugar!="salta") {

			lugar=prompt('Destino invalido. Ingrese el destino ( "bariloche", "cataratas" o "salta")');
		}

		temporada=prompt('Ingrese la temporada ("otoño", "invierno", "verano", "primavera")');

		while(temporada!="otoño" && temporada!="invierno" && temporada!="verano" && temporada!="primavera") {

			temporada=prompt('Temporada invalida. Ingrese la temporada ("otoño", "invierno", "verano", "primavera")');
		}

		cantidad=parseInt(prompt("Ingrese la cantidad de personas"));

		while(cantidad<1) {

			cantidad=parseInt(prompt("Cantidad invalida. Ingrese la cantidad de personas"));
		}

		if(lugar=="bariloche") {
			cBariloche++;
		}
		else if(lugar=="cataratas") {
			cCataratas++;
		}
		else {
			cSalta++;
		}

		if(sexo='m') {
			cantidadHombre+=cantidad;
		}
		else {
			cantidadMujer+=cantidad;
		}

		if(temporada=="invierno") {
			cantidadInvierno+=cantidad;
			contadorInvierno++;
		}

		seguir=prompt("Desea seguir (s/n)");

	} while(seguir=='s')

	if(cBariloche>cCataratas && cBariloche>cSalta) {
		console.log("El lugar mas elegido es Bariloche");
	}
	else if(cCataratas>cBariloche && cCataratas>cSalta) {
		console.log("El lugar mas elegido es Cataratas");
	}
	else {
		console.log("El lugar mas elegido es Salta");
	}

	if(cantidadHombre>cantidadMujer) {
		console.log("El sexo del titular que mas pasajeros lleva es HOMBRE");
	}
	else {
		console.log("El sexo del titular que mas pasajeros lleva es MUJER");
	}

	promedioInvierno=cantidadInvierno/contadorInvierno;

	if(contadorInvierno==0) {
		console.log("Promedio de personas que viajan en invierno: NO VIAJARON PERSONAS EN INVIERNO");
	}
	else {
		console.log("Promedio de personas que viajan en invierno: " + promedioInvierno);
	}
}
