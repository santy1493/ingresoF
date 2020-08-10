/*
2)De una compra debes ingresar una cantidad indeterminada de productos,
 validando los siguientes datos:
marca, precio, peso en kilogramos, tipo(sólido o líquido)
a)informar el peso total de la compra.
b)la marca del más caro de los líquidos
c)la marca del más barato de los sólidos
*/function mostrar()
{
  let seguir;
  let marca;
  let precio;
  let peso;
  let tipo;
  let pesoTotal=0;
  let liqCaro;
  let liqCaroMarca;
  let solBarato;
  let solBaratoMarca;
  let flagLiquido=0;
  let flagSolido=0;

  do {
    marca=prompt("Ingrese la marca del producto");

    while(!(isNaN(marca))) {

      marca=prompt("Marca invalida. Ingrese la marca del producto");
    }

    precio=parseInt(prompt("Ingrese el precio"));

    while(precio<0) {

      precio=parseInt(prompt("Precio invalido. Ingrese el precio"));
    }

    peso=parseInt(prompt("Ingrese el peso en kg"));

    while(peso<0) {

      peso=parseInt(prompt("Peso invalido. Ingrese el peso en kg"));
    }

    tipo=prompt('Ingrese el tipo ("solido" o "liquido")');

    while(tipo!="solido" && tipo!="liquido") {

      tipo=prompt('Tipo invalido. Ingrese el tipo ("solido" o "liquido")');
    }

    pesoTotal+=peso;

    if(tipo=="liquido") {

      if(flagLiquido==0) {

        liqCaro=precio;
        liqCaroMarca=marca;
        flagLiquido=1;
      }
      else if(liqCaro<precio) {

        liqCaro=precio;
        liqCaroMarca=marca;
      }
    }

    if(tipo=="solido") {

      if(flagSolido==0) {

        solBarato=precio;
        solBaratoMarca=marca;
        flagSolido=1;
      }
      else if(solBarato>precio) {

        solBarato=precio;
        solBaratoMarca=marca;
      }
    }

    seguir=prompt("Desea ingresar otro producto (s/n)");

  } while(seguir=='s');

  console.log("El peso total de la compra es de " + pesoTotal + " kg");

  if(flagLiquido==0) {
    console.log("No se compraron liquidos");
  }
  else {
    console.log("La marca del liquido mas caro es: " + liqCaroMarca);
  }

  if(flagSolido==0) {
    console.log("No se compraron solidos");
  }
  else {
    console.log("La marca del solido mas barato es " + solBaratoMarca);
  }
}
