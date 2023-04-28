
const arrayCarrito = [];
let productos = [];



const containerCarrito = document.getElementById('carrito-container');




document.addEventListener('DOMContentLoaded', () => {
    createProduct();
});


// traemos los productos con una promesa asyncrona.
async function fetchData(){
    const res = await fetch("./data.json");
    const data = await res.json();
    productos = data;
    console.log(productos)
    createProduct();
}





// creamos la funcion que renderiza nuestros productos traidos desde el json guardados en productos.
function createProduct(){
    const contenedorProductos = document.getElementById('container-productos');
        productos.forEach((producto) => {
        const div = document.createElement('div');
        div.innerHTML = `
        <div class="card">
        <img src="${producto.imagen}" class="card-img-top" alt="...">
        <div class="card-body">
        <h5 class="card-title">${producto.nombre}</h5>
        <p class="card-text">${producto.descripcion}</p>
        <p class="card-text">$ ${producto.precio}</p>
        <a class="agregar__carrito" id="button${producto.id}">Agregar al carrito</a>
      </div>
        </div>
        `
        contenedorProductos.appendChild(div)

        // agregamos funcionalidad al boton
        const agregar = document.getElementById(`button${producto.id}`);
        agregar.addEventListener('click',() => {
            alert(`Se agrego :  ${producto.nombre}`)
            pushearCarrito(`${producto.id}`);
            
        })
    })
}

fetchData()





// agregar producto al carrito
function pushearCarrito(id) {
    const producto = productos.find((p) => p.id == id);
    if (!producto) {
      return;
    }
    const existe = arrayCarrito.some((prod) => prod.id == id);
    if (existe) {
      arrayCarrito.map((prod) => {
        if (prod.id == id) {
          prod.cantidad++;
        }
      });
    } else {
      arrayCarrito.push({ ...producto, cantidad: 1 });
    }
    renderizarCarrito();
  }



// renderizamos el carrito
function renderizarCarrito(){
    containerCarrito.innerHTML = "";
     if(arrayCarrito.length < 1){
          return;}
     arrayCarrito.forEach(function renderizarProducto(producto){
         let productoContainer = document.createElement('div');
         productoContainer.id = producto.id
         productoContainer.innerHTML = `
         <div class="card">
         <h5 class="titulo">${producto.nombre}:</h5>
         <img src=${producto.imagen} alt=""/>
         <h4 class="price">$${producto.precio}</h4>
         <a class="cantidad">Cantidad:${producto.cantidad}</a>
         <a class="agregar__carrito agregar__carrito--2" id="eliminar${producto.id}">Retirar</a>
         </div>`
         containerCarrito.appendChild(productoContainer);
         const eliminar = document.getElementById(`eliminar${producto.id}`)
         eliminar.addEventListener('click', (id) => {
             eliminarDelCarrito(producto.id)
         })
     })
 }






// div.innerHTML =
//  `<div class="card">
// <img src="${vodka.imagen}" class="card-img-top" alt="...">
// <div class="card-body">
//   <h5 class="card-title">${vodka.nombre}</h5>
//   <p class="card-text">${vodka.descripcion}</p>
//   <p class="card-text">$ ${vodka.precio}</p>
//   <button id=btn${vodka.id} class="btn btn-primary">Comprar</button>
// </div>
// </div>`



// let div2 = document.getElementById("div2")
// div2.innerHTML = `<div class="card">
// <img src="${cerveza.imagen}" class="card-img-top" alt="...">
// <div class="card-body">
//   <h5 class="card-title">${cerveza.nombre}</h5>
//   <p class="card-text">${cerveza.descripcion}</p>
//   <p class="card-text">$ ${cerveza.precio}</p>
//   <button id=btn${cerveza.id} class="btn btn-primary">Comprar</button>
// </div>
// </div>`

// let div3 = document.getElementById("div3")
// div3.innerHTML = `<div class="card">
// <img src="${gin.imagen}" class="card-img-top" alt="...">
// <div class="card-body">
//     <h5 class="card-title">${gin.nombre}</h5>
//     <p class="card-text">${gin.descripcion}</p>
//     <p class="card-text">$ ${gin.precio}</p>
//     <button id=btn${gin.id}  class="btn btn-primary">Comprar</button>
// </div>
// </div>`

// let boton = document.getElementById('btn1');
// boton.onclick = () => agregarAlCarro();

// function agregarAlCarro (){
//     carrito.push(vodka);
//     alert('Se agrego el Vodka Absolut al carrito !')
// }


// let boton2 = document.getElementById('btn2');
// boton.onclick = () => agregarAlCarro2()

// function agregarAlCarro2(){
//     carrito.push(cerveza)
//     alert('Se agrego cerveza')}
    
