
const carrito = [];
const vodka = {
    id: 1,
    imagen: "./img/vodka.png",
    nombre: "Vodka Absolut",
    descripcion: "Vodka absolut de 1L",
    precio: 1000
}

const cerveza = {
    id: 2,
    imagen: "./img/cerveza.png",
    nombre: "Cerveza",
    descripcion: "Cerveza de 1L",
    precio: 750
}
const gin = {
    id: 3,
    imagen: "./img/gin.jpg",
    nombre: "Gin",
    descripcion: "Gin de 1L",
    precio: 1500
}

let parrafo = document.createElement ("p")
parrafo.innerHTML = "<p>Todos los metodos de pago, Efectivo (con un 10% de descuento en tu compra) , Tarjeta de credito (con 12 cuotas sin interes) y Tarjeta de debito.</p>"
document.body.append(parrafo);

let div = document.getElementById("div")
// div.innerHTML = "<h2>Las mejores bebidas te estan esperando!.</h2> <p>Descubrí en LIANBAR lo que más te gusta de Vinos, Gin , Cerveza y Vodka con las mejores ofertas.</p)"

div.innerHTML =
 `<div class="card">
<img src="${vodka.imagen}" class="card-img-top" alt="...">
<div class="card-body">
  <h5 class="card-title">${vodka.nombre}</h5>
  <p class="card-text">${vodka.descripcion}</p>
  <p class="card-text">$ ${vodka.precio}</p>
  <button id=btn${vodka.id} class="btn btn-primary">Comprar</button>
</div>
</div>`



let div2 = document.getElementById("div2")
div2.innerHTML = `<div class="card">
<img src="${cerveza.imagen}" class="card-img-top" alt="...">
<div class="card-body">
  <h5 class="card-title">${cerveza.nombre}</h5>
  <p class="card-text">${cerveza.descripcion}</p>
  <p class="card-text">$ ${cerveza.precio}</p>
  <button id=btn${cerveza.id} class="btn btn-primary">Comprar</button>
</div>
</div>`

let div3 = document.getElementById("div3")
div3.innerHTML = `<div class="card">
<img src="${gin.imagen}" class="card-img-top" alt="...">
<div class="card-body">
    <h5 class="card-title">${gin.nombre}</h5>
    <p class="card-text">${gin.descripcion}</p>
    <p class="card-text">$ ${gin.precio}</p>
    <button id=btn${gin.id}  class="btn btn-primary">Comprar</button>
</div>
</div>`

let boton = document.getElementById('btn1');
boton.onclick = () => agregarAlCarro();

function agregarAlCarro (){
    carrito.push(vodka);
    alert('Se agrego el Vodka Absolut al carrito !')
}


let boton2 = document.getElementById('btn2');
boton.onclick = () => agregarAlCarro2()

function agregarAlCarro2(){
    carrito.push(cerveza)
    alert('Se agrego cerveza')}
    
