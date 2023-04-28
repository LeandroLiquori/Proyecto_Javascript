

let total = 0;
const productos = []; 


// clase de producto
class Producto {
  constructor(nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;
    this.cantidad = 0;
  }
}

// instanciar objetos de producto y agregarlos al array
productos.push(new Producto("Vodka", 1000));
productos.push(new Producto("Gin", 1500));
productos.push(new Producto("Cerveza", 750));



// metodos de array
// metodo find
const metodoFind = productos.find(prod => prod.precio == 750)
console.log(metodoFind)
// metodo filter
const metodoFilter = productos.filter (prod => prod.precio <= 1000)
console.log (metodoFilter)
// metodo map
const metodoMap = productos.map (prod => prod.precio == 750)
console.log(metodoMap)




function saludar (){
  alert ('Bienvenidos a LianBar, las mejores bebidas para vos!');
let edad = prompt ('Ingrese su edad');
if (edad >= 18){
  alert('Usted es mayor de edad, puede ingresar a la pagina');
  seleccionarBebidas()
  metodoDePago()
}
else {
  alert("Lo siento, debe ser mayor de edad para ingresar a la tienda.");
  return;
}}




function seleccionarBebidas (){
let elegirBebidas = Number(prompt('¿Que bebida estas buscando? 1-Vodka $1000 2-Gin $1500 3-Cerveza $750'))
while (elegirBebidas != 0) {
  switch (elegirBebidas) {
    case 1:
      productos[0].cantidad += Number(
        prompt("el producto seleccionado es Vodka, indique la cantidad")
      );
      total += productos[0].cantidad * productos[0].precio;
      break;
    case 2:
      productos[1].cantidad += Number(
        prompt("el producto seleccionado es Gin, indique la cantidad")
      );
      total += productos[1].cantidad * productos[1].precio;
      break;
    case 3:
      productos[2].cantidad += Number(
        prompt("el producto seleccionado es Cerveza, indique la cantidad")
      );
      total += productos[2].cantidad * productos[2].precio;
      break;
    default:
      break;
  }
  elegirBebidas = Number(
    prompt(
      "Desea seguir comprando o ingrese 0 para ir al carrito ¿Que bebida estas buscando? 1-Vodka $1000 2-Gin $1500 3-Cerveza $750"
    )
  );
}
if (elegirBebidas == 0){
alert('el total de la compra es de = $ ' + total)
}
}

function metodoDePago(){
let porcentajeTotal= (total*10)/100;
let totalConDescuento = total - porcentajeTotal;
let metodoPago = prompt('¿Como desea pagar? Efectivo / Tarjeta de credito / Tarjeta de debito');
if (metodoPago == "Efectivo" || metodoPago== "efectivo" || metodoPago == "EFECTIVO"){
  alert('Usted tiene un 10% de descuento en su compra, el total de la compra es de= ' + totalConDescuento);
}
else if ( metodoPago == 'tarjeta de credito' || metodoPago == 'TARJETA DE CREDITO' || metodoPago== 'Tarjeta de credito')
{
alert('Usted tiene 12 cuotas sin interes')
}
else if(metodoPago == 'Tarjeta de debito' || metodoPago == 'tarjeta de debito' || metodoPago == 'TARJETA DE DEBITO'){
  alert('Genial, gracias por tu compra.')
}
else {alert('Ingrese un metodo de pago valido')
return;}
}
saludar()

let div = document.getElementById("div")
div.innerHTML = "<h2>Las mejores bebidas te estan esperando!.</h2> <p>Descubrí en LIANBAR lo que más te gusta de Vinos, Gin , Cerveza y Vodka con las mejores ofertas.</p)"

let parrafo = document.createElement ("p")
parrafo.innerHTML = "<p>Todos los metodos de pago, Efectivo (con un 10% de descuento en tu compra) , Tarjeta de credito (con 12 cuotas sin interes) y Tarjeta de debito.</p>"
document.body.append(parrafo);