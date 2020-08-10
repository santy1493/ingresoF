/*
1)De 5  personas que ingresan al hospital se deben tomar y 
validar los siguientes datos.
nombre ,peso, sexo y edad.
a)informar la cantidad de mujeres.
b)la edad promedio en total.
c)el hombre mas pesado.
pedir datos por prompt y mostrar por document.write o console.log
*/
function mostrar()
{
	let nombre;
	let peso;
	let sexo;
	let edad;
	let cantidadMujeres=0;
	let sumaEdad=0;
	let nombrePesado;
	let pesoPesado=0;
	let promedioEdad;

	for(let i=0; i<5; i++) {

		nombre=prompt("Ingrese su nombre");

		while(!(isNaN(nombre))) {

			nombre=prompt("Nombre invalido. Ingrese su nombre");
		}

		peso=parseInt(prompt("Ingrese su peso"));

		while(peso<0) {

			peso=parseInt(prompt("Peso invalido. Ingrese su peso"));
		}

		sexo=prompt('Ingrese su sexo ("m" o "f")');

		while(sexo!='m' && sexo!='f') {

			sexo=prompt('Sexo invalido. Ingrese su sexo ("m" o "f")');
		}

		edad=parseInt(prompt("Ingrese su edad"));

		while(edad<0 || edad>99) {

			edad=parseInt(prompt("Edad invalida. Ingrese su edad"));
		}

		if(sexo=='f') {

			cantidadMujeres++;
		}

		sumaEdad+=edad;

		if(sexo=='m' && pesoPesado<peso) {

			pesoPesado=peso;
			nombrePesado=nombre;
		}
	}
	
	promedioEdad=sumaEdad/5;

	if(cantidadMujeres>0) {
		console.log("Cantidad de mujeres: " + cantidadMujeres);
	}
	else {
		console.log("No ingresaron mujeres");
	}
	console.log("Edad promedio: " + promedioEdad);
	
	if(pesoPesado==0) {
		console.log("No se ingresaron hombres");
	}
	else {
		console.log("El hombre mas pesado es " +  nombrePesado + " con " + pesoPesado);
	}
}
