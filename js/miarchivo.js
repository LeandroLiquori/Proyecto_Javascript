alert("Bienvenido a LianBar, Las mejores bebidas para vos.");
let nombreUsuario= prompt("Ingrese su nombre");
let apellidoUsuario=prompt("Ingrese su apellido");
alert("Hola " + nombreUsuario + " " + apellidoUsuario);

let edad=prompt("¿Que edad tienes?");

if (edad >=18){ 
     alert("Usted es mayor de edad, puede ingresar a la pagina.")
     }
else if (edad <18) {
     alert("Usted es menor de edad, Porfavor sal de la pagina.")
}

 alert("Para terminar la compra marque 0")


 
 let seleccionarBebidas = Number(prompt("¿Que bebida estas buscando? 1-Vodka $1000 2-Gin $1500 3-Cerveza $750"));
 let seleccionarCantidad;
 let total = 0;

 let cantidad= (cantida,bebidas)=> {
     return cantida * bebidas}

     while(seleccionarBebidas != 0) {
          switch (seleccionarBebidas) {
     case 1: seleccionarCantidad=Number(prompt("Ingresaste Vodka, Porvafor ingrese la cantidad"))
     total = seleccionarCantidad * 1000
          break;
     case 2:  seleccionarCantidad=Number(prompt("Ingresaste Gin, Porvafor ingrese la cantidad"))
     total = seleccionarCantidad * 1500
          break;
     case 3:  seleccionarCantidad=Number(prompt("Ingresaste Cerveza, Porvafor ingrese la cantidad"))
     total = seleccionarCantidad * 750
          break;

          default:
               break;
     }
     
     seleccionarBebidas = Number(prompt("¿Que bebida estas buscando? 1-Vodka $1000 2-Gin $1500 3-Cerveza $750"));
     }
     alert("El total de la compra es: " + total )


    