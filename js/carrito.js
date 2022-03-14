

function cargarProductosCarrito() {
    const currency = function(number){
        return new Intl.NumberFormat('es-AR', {style: 'currency', currency: 'ARG', minimumFractionDigits: 2}).format(number);
    };
    let productos = cargarCarrito();

    if (productos.length == 0) {
        document.getElementById('productos_carrito').innerHTML = "<h2 class='text-center alert alert-danger'>No hay productos en el carrito!</h2>";
        $("#btn1").hide(); 
        return false;
    }

    let total_pagar = 0;
    let contenido = `<table class="table">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Producto</th>
        <th scope="col">Precio</th>
      </tr>
    </thead>
    <tbody>`;

    for (let producto of productos) {
        let precio = currency(producto.precio);
        contenido += `<tr>
        <td><img src='/img/${producto.imagen}' alt='${producto.nombre}' width='80'></td>
        <td>${producto.nombre}</td>
        <td>$${precio}</td>
        </tr>`;
        total_pagar += parseFloat(producto.precio);
    }

    let total_pagar_precio = currency(total_pagar);
    contenido += `<tr>
    <td>&nbsp;</td>
    <td align='right'>Total</td>
    <td><b>$${total_pagar_precio}</b></td>
    </tr>
    </tbody>
    </table>`;

    document.getElementById('productos_carrito').innerHTML = contenido;
}

function botonCompra () {
  $("#botonCompra").prepend('<button type="button" class="btn btn-success btn-lg" id="btn1">Finalizar compra</button>');
  $("#btn1").click(function () { 
    Swal.fire(
      'Compra exitosa!',
      'Muchas gracias',
      'success'
    )
});
}

document.getElementById("eliminar_carrito").addEventListener("click", eliminarCarrito);

botonCompra();

ActualizarTotalCarrito();

cargarProductosCarrito();

