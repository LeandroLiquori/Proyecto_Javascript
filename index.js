
let arrayCarrito = [];
let productos = [];
const containerCarrito = document.getElementById('carrito-container');
const botonVaciar = document.getElementById('eliminar-carrito')
const precioTotal = document.getElementById('precio-total');
const finalizarCompra = document.getElementById('finalizar-compra')

document.addEventListener('DOMContentLoaded', () => {
    createProduct();
    fetchData()
    aJson()
});


function aJson(){
  if(localStorage.getItem('cart')){
    arrayCarrito = JSON.parse(localStorage.getItem('cart'))
    renderizarCarrito()
  }
}


// reforzar fetch, metodos de array, spread operator, y condicionales con ternarias.


// traemos los productos con una promesa asyncrona.
// sinonimo de consumir una API pero local.
async function fetchData(){
    const res = await fetch("./data.json")
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
        <img class = "img" src="${producto.imagen}" class="card-img-top" alt="...">
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
          Toastify({
            text: "Se agrego al carrito exitosamente",
            duration: 3000,
            destination: "https://github.com/apvarun/toastify-js",
            newWindow: true,
            gravity: "top", // `top` or `bottom`
            position: "left ", // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
            style: {
              background: "linear-gradient(to right, #00b09b, #96c93d)",
            },
            onClick: function(){} // Callback after click
          }).showToast();
            pushearCarrito(`${producto.id}`);
            
        })
    })
}






// agregar producto al carrito
function pushearCarrito(id) {
    const producto = productos.find((prod) => prod.id == id);
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
    localStorage.setItem('cart',JSON.stringify(arrayCarrito))
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
           Swal.fire({
             position: 'center',
             icon: 'error',
             title: 'Se elimino correctamente del carrito',
             showConfirmButton: false,
             timer: 1500
           })
              eliminarDelCarrito(producto.id)
          })
          precioTotal.innerText = arrayCarrito.reduce((acc,producto) => acc + producto.cantidad * producto.precio,0)
      })
  }


 function eliminarDelCarrito(id){
  let existe = arrayCarrito.some((prod) => prod.id == id)
  if(existe){
    arrayCarrito.map((prod) => {
      if(prod.id == id){
        prod.cantidad--;
        if(prod.cantidad < 1){
          arrayCarrito = arrayCarrito.filter((prod) => prod.id != id);
        }
      }
    });
  }
  localStorage.setItem('cart',JSON.stringify(arrayCarrito))
  precioTotal.innerText = arrayCarrito.reduce((acc,producto) => acc - producto.precio,0)
  renderizarCarrito()
 }



 botonVaciar.addEventListener('click',() => {
  Swal.fire({
    title: 'Seguro que quieres vaciar el carrito?',
    text: "Si aceptas se eliminaran todos los productos de tu carrito",
    icon: 'warning',
    showCancelButton: false,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Aceptar!',
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire(
        'Carrito Vacio!',
      )
    }
  })
  arrayCarrito.length = 0;
  precioTotal.innerText = arrayCarrito.reduce((acc,producto) => acc - producto.precio,0)
  localStorage.setItem('cart',JSON.stringify(arrayCarrito))
  renderizarCarrito()
 })

 finalizarCompra.addEventListener('click', () => {
   Swal.fire('Muchas gracias por su compra!! El total de la compra es de: $ ' + precioTotal.innerHTML)
 
 })