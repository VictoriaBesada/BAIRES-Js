const productos = [
    {
        id:1, 
        nombre: "Box Dulce", 
        imagen: "boxDulce.jpg", 
        descripcion:["La opción mas empalagosa y rica para los más golosos!"], 
        precio:2500
    },
    {
        id:2, 
        nombre: "Box Dia de la Madre", 
        imagen: "boxMadre.jpg", 
        descripcion:["En su día, regalale un desayuno increíble que va a disfrutar mucho."],
        precio:3000
    },
    {
        id:3, 
        nombre: "Box Picnic", 
        imagen: "picnic.jpg", 
        descripcion:["Llegó la primavera y traemos esta opción para compartir al aire libre."], 
        precio:3200
    }, 
    {
        id:4, 
        nombre: "Merienda para eventos", 
        imagen: "meriendaEventos.jpg", 
        descripcion:["Nuestra completísima Merienda siempre lista para mejorar tus eventos."], 
        precio:15000
    },
    {
        id:5, 
        nombre: "Cafe para eventos", 
        imagen: "cafeEventos.jpg", 
        descripcion:["Excelente servicio de café para tus eventos."], 
        precio:5000
    },
    {
        id:6, 
        nombre: "Box Degustacion", 
        imagen: "desgustacion.jpg", 
        descripcion:["Diseñada exclusivamente para que no te quedes sin probar nada!"], 
        precio:3900
    },
    {
        id:7, 
        nombre: "Mesa dulce para eventos", 
        imagen: "mesaDulce.jpg", 
        descripcion:["Nuestra completísima Mesa Dulce siempre lista para mejorar tus reuniones."], 
        precio:20000
    },
    {
        id:8, 
        nombre: "Tortas para eventos", 
        imagen: "tortaEntera.jpg", 
        descripcion:["Incluye una exhaustiva variedad de tortas para todos los gustos."], 
        precio:20000
    },
    {
        id:9, 
        nombre: "Box Merienda", 
        imagen: "merienda.jpg", 
        descripcion:["Sorprendé a tus personas favoritas con una merienda llena de amor!"], 
        precio:2700
    },
    {
        id:10, 
        nombre: "Desayuno para eventos", 
        imagen: "desayunoEventos.jpg", 
        descripcion:["Nuestro completísimo Desayuno siempre listo para mejorar tus reuniones."], 
        precio:10000
    }
];  


function mostrarProductos() {

    let productos = cargarProductosLocal();

    for (let producto of productos) {

        $(".container").prepend(`<div class='col-md-4 p-3'>
        <div class='card card h-100'>
        <h4 class='p-3 mb-2 bg-dark text-white text-uppercase text-center'> ${producto.nombre} </h4>
        <img class='card-img-top' src='/img/${producto.imagen}' alt='${producto.nombre}'></img>
        <div class='card-body d-grid gap-2' id='insertarBoton'>
        <p class='card-text'>
        <ul class='list-group list-group-flush'>
        <li class='list-group-item'>${producto.descripcion}</li>
        </ul>
        </p>
        <h5 class='card-title text-primary text-center'>$ ${producto.precio}</h5>
        </div>
        </div>
        </div>`);
        

        let boton = document.createElement("button");
                boton.className = "btn btn-warning botonServicios";
                boton.innerHTML = "Agregar (+)";
                boton.onclick = () => {
                    agregarAlCarrito(producto.id);
                    console.log(`Compraste ${producto.nombre}`);
                    Toastify({
                        text: "Producto agregado al carrito!",
                        duration: 3000,
                        }).showToast();
                }
         $("#insertarBoton").prepend(boton);
    }
}


function guardarProductosLocal(productos) {
    localStorage.setItem("productos", JSON.stringify(productos));
}

function cargarProductosLocal() {
    return JSON.parse(localStorage.getItem("productos"));
}

function agregarAlCarrito(id) {
    let producto = buscarProducto(id);
    let productos = cargarCarrito();
    productos.push(producto);
    localStorage.setItem("carrito", JSON.stringify(productos));
    localStorage.setItem("total_carrito", productos.length);
    ActualizarTotalCarrito();
}

function buscarProducto(id) {
    let productos = cargarProductosLocal();
    return productos.find(x => x.id == id);
}

function cargarCarrito() {
    if (localStorage.getItem("carrito")) {
        return JSON.parse(localStorage.getItem("carrito"));
    }

    return [];
}

function totalCarrito() {
    if (localStorage.getItem("total_carrito")) {
        return localStorage.getItem("total_carrito");
    }

    return 0;
}

function ActualizarTotalCarrito() {
    let total = totalCarrito();
    document.getElementById('datos_carrito').innerHTML = `<a href='carrito.html' title='Ver Carrito' class='text-white text-decoration-none'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart" viewBox="0 0 16 16">
    <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/></svg> ${total} Producto(s)</a>`;
}

function eliminarCarrito() {
    localStorage.removeItem("carrito");
    localStorage.removeItem("total_carrito");
    ActualizarTotalCarrito();
}



